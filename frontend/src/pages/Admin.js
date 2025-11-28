// frontend/src/pages/Admin.js
import React, { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api"; // ensure your backend is running at this URL

const Admin = () => {
  const [course, setCourse] = useState({ title: "", description: "" });
  const [videoList, setVideoList] = useState([{ title: "", url: "" }]);
  const [document, setDocument] = useState(null);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const addVideoField = () => setVideoList([...videoList, { title: "", url: "" }]);

  const handleCourseUpload = async () => {
    // client-side validation
    if (!course.title.trim()) {
      setMsg("❗ Please enter a course title.");
      return;
    }

    // Remove completely empty video entries
    const cleanedVideos = videoList
      .map(v => ({ title: v.title.trim(), url: v.url.trim() }))
      .filter(v => v.title !== "" && v.url !== "");

    if (cleanedVideos.length === 0) {
      setMsg("❗ Add at least one valid video (title + url).");
      return;
    }

    const payload = {
      title: course.title.trim(),
      description: course.description.trim(),
      videos: cleanedVideos
    };

    try {
      setLoading(true);
      setMsg("");

      const res = await axios.post(`${API_URL}/courses`, payload, {
        headers: { "Content-Type": "application/json" },
        timeout: 20000
      });

      // success response handling (backend should return created course)
      if (res.status === 200 || res.status === 201) {
        setMsg("✅ Course uploaded successfully!");
        setCourse({ title: "", description: "" });
        setVideoList([{ title: "", url: "" }]);
      } else {
        setMsg(`❌ Unexpected response: ${res.status}`);
      }
    } catch (error) {
      // show detailed error in console and a friendly message in UI
      console.error("Course upload error:", error.response ?? error.message ?? error);
      const serverMsg = error.response?.data?.error || error.response?.data?.message || null;
      setMsg(serverMsg ? `❌ ${serverMsg}` : "❌ Failed to upload course. Check server logs.");
    } finally {
      setLoading(false);
    }
  };

  const handleDocumentUpload = async () => {
    if (!document) {
      setMsg("❗ Please choose a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("document", document);

    try {
      setLoading(true);
      setMsg("");
      const res = await axios.post(`${API_URL}/documents/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        timeout: 30000
      });

      if (res.status === 200 || res.status === 201) {
        setMsg("✅ Document uploaded successfully!");
        setDocument(null);
      } else {
        setMsg(`❌ Unexpected response: ${res.status}`);
      }
    } catch (error) {
      console.error("Document upload error:", error.response ?? error.message ?? error);
      const serverMsg = error.response?.data?.error || error.response?.data?.message || null;
      setMsg(serverMsg ? `❌ ${serverMsg}` : "❌ Document upload failed. Check server logs.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-4">
      <h2 className="text-center fw-bold mb-4">🛠 Admin Panel</h2>

      <div className="row">
        {/* Course Upload */}
        <div className="col-lg-6 mb-4">
          <div className="card shadow-sm p-3 h-100">
            <h4 className="mb-3">➕ Add New Course</h4>

            <label className="form-label">Course Title</label>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Course Title"
              value={course.title}
              onChange={(e) => setCourse({ ...course, title: e.target.value })}
              disabled={loading}
            />

            <label className="form-label">Course Description</label>
            <textarea
              className="form-control mb-2"
              placeholder="Course Description"
              value={course.description}
              onChange={(e) => setCourse({ ...course, description: e.target.value })}
              disabled={loading}
            />

            <h6 className="fw-bold mt-3 mb-2">Course Videos</h6>
            {videoList.map((video, i) => (
              <div className="row g-2 mb-2 align-items-center" key={i}>
                <div className="col-5">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Video Title"
                    value={video.title}
                    onChange={(e) => {
                      const updated = [...videoList];
                      updated[i].title = e.target.value;
                      setVideoList(updated);
                    }}
                    disabled={loading}
                  />
                </div>
                <div className="col-5">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Video URL (mp4 or link)"
                    value={video.url}
                    onChange={(e) => {
                      const updated = [...videoList];
                      updated[i].url = e.target.value;
                      setVideoList(updated);
                    }}
                    disabled={loading}
                  />
                </div>
                <div className="col-2">
                  <button
                    className="btn btn-outline-danger btn-sm w-100"
                    onClick={() => {
                      const updated = videoList.filter((_, idx) => idx !== i);
                      setVideoList(updated.length ? updated : [{ title: "", url: "" }]);
                    }}
                    disabled={loading}
                    title="Remove"
                  >
                    ✖
                  </button>
                </div>
              </div>
            ))}

            <div className="d-flex gap-2">
              <button
                className="btn btn-secondary btn-sm"
                onClick={addVideoField}
                disabled={loading}
              >
                ➕ Add Another Video
              </button>

              <button
                className="btn btn-primary ms-auto"
                onClick={handleCourseUpload}
                disabled={loading}
              >
                {loading ? "Uploading..." : "Upload Course"}
              </button>
            </div>
          </div>
        </div>

        {/* Document Upload */}
        <div className="col-lg-6 mb-4">
          <div className="card shadow-sm p-3 h-100">
            <h4 className="mb-3">Upload Document (for AI Summarisation)</h4>
            <input
              type="file"
              className="form-control mb-3"
              onChange={(e) => setDocument(e.target.files[0])}
              disabled={loading}
            />
            <button className="btn btn-success w-100" onClick={handleDocumentUpload} disabled={loading}>
              {loading ? "Uploading..." : "Upload Document"}
            </button>
          </div>
        </div>
      </div>

      {msg && <div className="alert alert-info text-center mt-3">{msg}</div>}
    </div>
  );
};

export default Admin;

