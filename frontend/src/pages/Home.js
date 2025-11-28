import React from "react";
import DocumentSummariser from "../components/DocumentSummariser";
import BreadCrumb from "../components/BreadCrumb";
import HeroSection from "../components/HeroSection";
import Description from "../components/Description";
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="container-fluid">
      <BreadCrumb/>
      <HeroSection/>
      <Description/>
      <div className="row">
        

        <div className="card-container">
          <div className="card shadow-sm mb-4 p-3">
            <h4 className="mb-3">Document Summarisation with AI</h4>
            <p className="text-muted">Upload your notes and click "Summarise with AI" for smart revision.</p>
            <DocumentSummariser />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


// import React from "react";
// import CourseList from "../components/CourseList";
// import DocumentSummariser from "../components/DocumentSummariser";

// const Home = () => {
//   return (
//     <div className="container mt-4">
//       <header className="text-center mb-4">
//         <h2 className="fw-bold">📚 Learning Dashboard</h2>
//         <p className="text-muted">Watch your course videos and learn at your own pace.</p>
//       </header>

//       {/* Course Section */}
//       <div className="card shadow-sm p-3 mb-4">
//         <h4 className="mb-3">🎥 Course Videos</h4>
//         <CourseList />
//       </div>

//       {/* Document Summariser Section */}
//       <div className="card shadow-sm p-3">
//         <h4 className="mb-3">📝 Document Summarisation with AI</h4>
//         <p className="text-muted">Upload your notes and click "Summarise with AI" for smart revision.</p>
//         <DocumentSummariser />
//       </div>
//     </div>
//   );
// };

// export default Home;
