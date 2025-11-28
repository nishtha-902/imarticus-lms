import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import "./App.css"; // custom styles
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <div className="bg-light min-vh-100 py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
      <Footer/>

      {/* Footer */}
      {/* <footer className="text-center py-3 bg-primary text-white mt-auto">
        © {new Date().getFullYear()} Imarticus LMS | Built with ❤️ by Full-Stack Intern
      </footer> */}
    </Router>
  );
};

export default App;



// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import Admin from "./pages/Admin";
// import "./App.css"; // optional custom styles

// const App = () => {
//   return (
//     <Router>
//       {/* Top Navbar */}
//       <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
//         <div className="container">
//           <Link className="navbar-brand fw-bold" to="/">
//             Imarticus LMS
//           </Link>

//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <Link className="nav-link" to="/">
//                   Home
//                 </Link>
//               </li>

//               <li className="nav-item">
//                 <Link className="nav-link" to="/admin">
//                   Admin Panel
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Page Content */}
//       <div className="bg-light min-vh-100 pt-4 pb-5">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/admin" element={<Admin />} />
//         </Routes>
//       </div>

//       {/* Footer */}
//       <footer className="text-center py-3 bg-primary text-white">
//         © {new Date().getFullYear()} Imarticus LMS | Built with ❤️ by Full-Stack Intern
//       </footer>
//     </Router>
//   );
// };

// export default App;

