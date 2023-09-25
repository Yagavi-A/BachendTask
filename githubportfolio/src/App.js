import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <div className="header">
        <div className="row1">
          <img src="images/Profile.jpeg" alt="Profile" />
        </div>
        <div className="row2">
          <h2>Yagavi A</h2>
          <p>UX Enginneer Intern<br />DevRev, Chennai</p>
        </div>
      </div>
      <br /><br />
      <h1>Education / Courses</h1>
      <div className="education">
        <div className="row3">
          <div className="col1">
            <h3>B.E Computer Science</h3>
            <p>Currently Pursuing B.E CSE in Sona College Of Technology, Salem.</p>
            <button>2020 - 2024</button>
          </div>
          <div className="col1">
                <h3>Data Analytics Course</h3>
                <p>Done a Data Analtics Google certification course in online. </p>
                <button>April 2023</button>
            </div>
            </div>
            <div className="row3">
            <div className="col1">
                <h3>Social Network Course</h3>
                <p>Successfully completed Nptel Social network course and an elite performer. </p>
                <button>October 2022</button>
            </div>
            <div className="col1">
                <h3>Content and Copywriting Pro</h3>
                <p> Completed a 3 months course with Terribly Tiny tales</p>
                <button>March 2021- June 2023</button>
            </div>
            </div>
            <div className="row3">
            <div className="col1">
                <h3> C Programming </h3>
                <p>Successfully completed C Programming course with MyCaptain</p>
                <button>Jan 2021</button>
            </div>
            <div className="col1">
                <h3>Web Development</h3>
                <p>Successfully completed Web Development course with Mycaptain</p>
                <button>Dec 2020</button>
            </div>
            </div>
      </div>
      <br /><br />
      <h1>Projects/Experience</h1>
      <div className="main">
        <div className="row">
          <div className="col">
            <h3>Flight Ticket Booking</h3>
            <img src="images/flight.png" alt="Project" />
            <p>This Project is done by using HTML, CSS, Flask, python and Firebase. </p>
          </div>
          <div className="col">
                    <h3>Library Management System</h3>
                    <img src="images/library.png" alt="Project " />
                    <p>This Project is done by using MERN Stack.</p>
                </div>
                <div className="col">
                    <h3>OTP Veification</h3>
                    <img src="images/otp.png" alt="Project"/>
                    <p>This Project is done by HTML, CSS, Javascript and Firebase.</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h3>Movie Ticket Booking</h3>
                    <img src="images/movie.png" alt="Project" />
                    <p>This Project is done by using MERN Stack.</p>
                </div>
                <div className="col">
                    <h3>Sales Prediction</h3>
                    <img src="images/sales.png" alt="Project" />
                    <p>This Project is done by using Angular, Flask, Python and Machine Learning.</p>
                </div>
                <div className="col">
                    <h3>Car Rental Application</h3>
                    <img src="images/car.png" alt="Project" />
                    <p>This Project is done by Using MERN Stack.</p>
                </div>
        </div>
      </div>
      <h1>About Me</h1>
      <div className="info">
        <div className="row">
          <div className="col">
            <h2>Personal Details</h2>
            <ul>
              <li>Name: Yagavi A</li>
              <li>DOJ: 07/11/2002</li>
              <li>Location: Chennai</li>
              <li>Status: Single</li>
              <li>Mail ID: yagavi072002@gmail.com</li>
            </ul>
          </div>
          <div className="col2">
            <h2>SkillPot</h2>
            <ul>
              <li>MERN Stack</li>
              <li>Flask Framework</li>
              <li>HTML, CSS, JavaScript</li>
              <li>Firebase</li>
              <li>MEAN Stack</li>
              <li>Machine Learning</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer">
        <h3>@copyright 2023</h3>
      </div>
    </div>
  );
}

export default App;
