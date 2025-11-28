import React from "react";

const VideoPlayer = ({ title, url }) => {
  return (
    <div className="mb-3">
      <h6 className="fw-semibold">{title}</h6>
      <video controls className="w-100 rounded shadow-sm">
        <source src={url} type="video/mp4" />
        Your browser does not support HTML video.
      </video>
    </div>
  );
};

export default VideoPlayer;



// import React from 'react';

// const VideoPlayer = ({ title, url }) => {
//     return (
//         <div className="mb-3">
//             <h6>{title}</h6>
//             <video controls width="100%">
//                 <source src={url} type="video/mp4" />
//                 Your browser does not support HTML video.
//             </video>
//         </div>
//     );
// };

// export default VideoPlayer;
