import React, { useState } from "react";
import { uploadDocument, summariseDocument } from "../api";

const DocumentSummariser = () => {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("document", file);
    const res = await uploadDocument(formData);
    const docId = res.data._id;

    const summaryRes = await summariseDocument(docId);
    setSummary(summaryRes.data.summary);
  };

  return (
    <div className="border rounded shadow-sm p-3 bg-white">
      <input type="file" className="form-control mb-3" onChange={(e) => setFile(e.target.files[0])} />
      <button className="btn btn-primary w-100" onClick={handleUpload}>
        Summarise with AI
      </button>
      {summary && (
        <div className="mt-3 card p-3 shadow-sm">
          <h5 className="fw-bold">Summary:</h5>
          <p>{summary}</p>
        </div>
      )}
    </div>
  );
};

export default DocumentSummariser;



// import React, { useState } from 'react';
// import { uploadDocument, summariseDocument } from '../api';

// const DocumentSummariser = () => {
//     const [file, setFile] = useState(null);
//     const [summary, setSummary] = useState('');

//     const handleUpload = async () => {
//         const formData = new FormData();
//         formData.append('document', file);
//         const res = await uploadDocument(formData);
//         const docId = res.data._id;

//         const summaryRes = await summariseDocument(docId);
//         setSummary(summaryRes.data.summary);
//     };

//     return (
//         <div className="container mt-4">
//             <h3>Upload Document</h3>
//             <input type="file" className="form-control" onChange={e => setFile(e.target.files[0])} />
//             <button className="btn btn-primary mt-2" onClick={handleUpload}>Summarise with AI</button>
//             {summary && (
//                 <div className="mt-3 card p-3">
//                     <h5>Summary:</h5>
//                     <p>{summary}</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default DocumentSummariser;
