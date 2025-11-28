import React, { useEffect, useState } from "react";
import { getCourses } from "../api";
import VideoPlayer from "./VideoPlayer";

const CourseList = ({ sidebar }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((res) => setCourses(res.data));
  }, []);

  return (
    <div className={sidebar ? "list-group" : "container mt-2"}>
      {courses.map((course) => (
        <div
          key={course._id}
          className={sidebar ? "list-group-item list-group-item-action mb-2 rounded" : "card mb-3 shadow-sm"}
        >
          {!sidebar && (
            <div className="card-body">
              <h5 className="card-title fw-bold">{course.title}</h5>
              <p className="card-text">{course.description}</p>
            </div>
          )}
          {course.videos.map((video) => (
            <VideoPlayer key={video.url} title={video.title} url={video.url} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default CourseList;



// import React, { useEffect, useState } from 'react';
// import { getCourses } from '../api';
// import VideoPlayer from './VideoPlayer';

// const CourseList = () => {
//     const [courses, setCourses] = useState([]);

//     useEffect(() => {
//         getCourses().then(res => setCourses(res.data));
//     }, []);

//     return (
//         <div className="container mt-4">
//             <h2>Courses</h2>
//             {courses.map(course => (
//                 <div className="card mb-3" key={course._id}>
//                     <div className="card-body">
//                         <h5 className="card-title">{course.title}</h5>
//                         <p className="card-text">{course.description}</p>
//                         {course.videos.map(video => (
//                             <VideoPlayer key={video.url} title={video.title} url={video.url} />
//                         ))}
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default CourseList;
