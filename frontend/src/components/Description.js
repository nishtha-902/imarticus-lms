import React from 'react'
import '../styles/Description.css'

const Description = () => {
  return (
    <>
    <div className="nav" id='desc-heading'>
        <div className='sub-nav'>
        <a href='#desc-heading'>Description</a>
        <a href='#last'>Curriculum</a>
        <a href='#instructors-heading'>Instructors</a>
        <a href='#faq-heading'>FAQs</a>
        </div>
    </div>
    <div className="container" id='description-container'>
        <h4>Description</h4>
        <p>Machine learning is a field of computer science that uses statistical techniques to give computer systems the ability to "learn" with data, without being explicitly programmed.  </p>
        <p>The course of Introduction to Machine Learning is a free online certification course. The important elements of the course are</p>
        <ul>
            <li>Concept Videos</li>
            <li>Quizzes</li>
            <li>Certification</li>
            <li>Discussion and Mentorship</li>
        </ul>
        <p id="bold">The topics covered in the Introduction to Machine Learning Course are:</p>
        <ol>
            <li>Introduction</li>
            <li>Project: Cost of Flats</li>
            <li>Linear Regression</li>
            <li>Polymer Regression</li>
            <li>Project: Spam Email Filter and App Recommendation </li>
            <li>Neural Network</li>
            <li>Deep Learning</li>
        </ol>
        <p id='last'>The excellent introduction course is of 75 mins course which will give you the overview of the most trending topic, Machine Learning and Artificial Intelligence. </p>
    </div>

    <div className="container" id='curriculum-container'>
        <h4>Curriculum</h4>
        <div className="box">Introduction to Machine Learning</div>
        <div className="box">Concepts of Machine Learning</div>
        <div className="box">Application of Machine Learning</div>
        <div className="box">Neural Network and Deep Learning</div>
        <div className="box" id='instructors-heading'>Application of Deep Learning</div>
    </div>

    <div className="container" id='instructors-container'>
        <h4>About Instructors</h4>
        <div className='instructor'>
            <div>
                <img src="https://cdn.pegasus.imarticus.org/courses/images/ritesh.jpeg" alt="instructor" className='instructor-image'/>
            </div>
            <div>
                <h3>Ritesh Singh</h3>
                <h4>Ritesh Singh is an IIT Delhi Graduate with 8 years of experience in Web Development and has created more than 15 websites both for his own enterpreneurial ventures as well as for other companies. With this course, he wants to disseminate this skill of making complex websites in just 30 days to as many students as possible. So, without a second thought, invest in yourself if you want to learn web development.</h4>
            </div>
        </div>
        <p id='faq-heading'>With 2 Patents and 4 innovation report, instructor is having 8 Years of Industrial Experience</p>
    </div>

    <div className="container" id='faq-container'>
        <h4>FAQ</h4>
        <div className="faq">
            <h4>How will I learn?</h4>
            <p>When you get access to the course, you will be able to see the modules within the course. Watch the videos whenever you get time and complete the tests for each module. The self-paced videos have been created by subject matter experts to ensure you learn from the best.</p>
        </div>
        <div className="line"></div>
        <div className="faq">
            <h4>Will I get a certificate?</h4>
            <p>Yes, when you complete all videos and tests in the course you will be eligible for certification. Your certificate will get unlocked. You can share the certificate with others on social media and add it to your profile.</p>
        </div>
    </div>
    </>
  )
}

export default Description
