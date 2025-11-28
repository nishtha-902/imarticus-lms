import Breadcrumb from "react-bootstrap/Breadcrumb";
import "../styles/Breadcrumb.css";

const BreadCrumb = () => {
  return (
    <div className="container breadcrumb-container">
      <Breadcrumb>
        <Breadcrumb.Item href="#" className="breadcrumbitem">
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#" className="breadcrumbitem">
          Courses
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          Introduction to Machine Learning
        </Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
};

export default BreadCrumb;
