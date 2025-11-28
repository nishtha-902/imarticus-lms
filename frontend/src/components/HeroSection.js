import React from "react";
import "../styles/HeroSection.css";
import studentImg from "../assets/student.png";

const HeroSection = () => {
  return (
    <>
      <div className="container hero-container">
        <div className="left">
          <h2>Introduction to Machine Learning</h2>
          <p id="desc">Free certification course of Machine Learning</p>
          <h6>
            Created By: <span>Ritesh Singh</span>
          </h6>
          <h6>
            Course Duration: <span>2 Years</span>
          </h6>
          <div className="info">
            <div className="free">
              <p>Free</p>
            </div>
            <div className="rating">
              <h5>Ratings</h5>
              <p>⭐⭐⭐⭐⭐</p>
              <p id="rating-enroll">2510 Ratings | 4786 Enrollments</p>
            </div>
          </div>
          <button className="enroll-btn">Enroll Now</button>
        </div>

        <div className="img-parent">
          <img
            src={studentImg}
            className="student"
            alt="student"
            width={600}
            height={450}
          />
        </div>
      </div>

      <div className="container extended-info">
        <div className="list1">
          <h4>Includes</h4>
          <ul className="custom-list1">
            <li>Concept Videos</li>
            <li>Practice Quizzes</li>
            <li>Certificate of Completion</li>
          </ul>
        </div>
        <div className="list2">
          <h4>What will I learn?</h4>
          <ul className="custom-list2">
            <li>Introduction to Machine Learning</li>
            <li>Basic Concepts of Machine Learning</li>
            <li>Linear Regression, Polymer Regression, Logistic Regression</li>
            <li>Neural Network and Deep Learning</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
