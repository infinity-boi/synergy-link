import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import logo from "../../assets/logo.png";
import BgVideo from "../../assets/landing.mp4";
import member1 from "../../assets/gouravsingh.jpg";

const Landing = () => {
  return (
    <div id="landing">
      <header className="header">
        <img src={logo} alt="Synergy Link" className="company-logo" />
        <nav className="nav">
          <ul>
            <li>
              <a href="#synergy">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#howitworks">How it Works</a>
            </li>
          </ul>
        </nav>
        <div className="header-buttons">
          <Link className="link-class" to="/login">
            <a href="/login" id="login-button" className="button secondary">
              Log in
            </a>
          </Link>
          <Link className="link-class" to="/signup">
            <a href="/signup" id="signup-button" className="button primary">
              Sign Up
            </a>
          </Link>
        </div>
      </header>

      <div className="content" id="app-content">
        <video autoPlay loop muted playsInline id="video">
          <source src={BgVideo} type="video/mp4" />
        </video>
        <section id="synergy" className="synergy">
          <div className="hero-content">
            <h1 style={{ fontWeight: "bolder" }}>Synergy Link</h1>
            <h1 style={{ fontSize: "x-large" }}>
              Connecting Personalities for Meaningful Conversations
            </h1>
            <p className="w-3/4 py-2 mb-3">
              Synergy Link will help you connect with people who has the
              compatible personality and goals for lasting friendships and
              collaborations.
            </p>
            <ul className="benefits">
              <li>
                {" "}
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="green"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-check"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  <span>&nbsp;Personality based Matching</span>
                </div>
              </li>
              <li>
              <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="green"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-check"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  <span>&nbsp;Goal Oriented Connections</span>
                </div></li>
              <li><div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="green"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-check"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                  <span>&nbsp;Build a Supportive Network</span>
                </div></li>
            </ul>
            <div className="cta">
              <Link className="link-class" to="/signup">
                <a href="/signup" className="button primary">
                  Join Now for Free
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section id="about" className="about">
          <div className="hero-content">
            <h1 style={{ fontSize: "x-large" }}> About Synergy Link</h1>
            <p className="w-4/5">
              Synergy Link is a platform designed to help people build
              meaningful connections based on personality and goals. We believe
              that strong relationships are essential for personal and
              professional growth. Our mission is to empower individuals to find
              their tribe, connect with like-minded people, and build supportive
              networks.
            </p>
          </div>
        </section>
        <section id="howitworks" className="how-it-works">
          <h2>How it Works</h2>
          <p>
            Synergy Link uses a unique approach to connect people. Here's a
            simple breakdown of the process:
          </p>
          <ul className="steps">
            <li>
              <span className="step-number">1</span>
              <span className="step-description">
                Sign Up and Create Your Profile
              </span>
              <p>
                Tell us about yourself! Complete your profile by sharing your
                personality type (MBTI), personal and professional goals, and
                interests.
              </p>
            </li>
            <li>
              <span className="step-number">2</span>
              <span className="step-description">Get Matched</span>
              <p>
                Our intelligent algorithm connects you with people who share
                your personality and goals, increasing the likelihood of
                compatible connections.
              </p>
            </li>
            <li>
              <span className="step-number">3</span>
              <span className="step-description">Spark a Connection</span>
              <p>
                Send personalized "Synergy Spark" tests to your potential
                matches. This interactive quiz helps assess compatibility and
                break the ice for meaningful conversations.
              </p>
            </li>
            <li>
              <span className="step-number">4</span>
              <span className="step-description">Chat and Connect</span>
              <p>
                Once the "Synergy Spark" test is passed by both parties, you can
                start chatting and exploring shared interests. Build lasting
                friendships or collaborations based on genuine connections.
              </p>
            </li>
          </ul>
        </section>
        <section className="team">
          <h2>Meet the Team</h2>
          <p>
            Synergy Link is driven by a passionate team dedicated to building a
            platform that fosters meaningful connections.
          </p>
          <div className="team-members grid-container">
            {/* Add team member profiles here (repeat for each member) */}
            <div className="team-member">
              <img src={member1} alt="Team Member 1" />
              <h3>Gourav Singh</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <img src={member1} alt="Team Member 2" />
              <h3>Gourav Singh</h3>
              <p>CTO</p>
            </div>
            <div className="team-member">
              <img src={member1} alt="Team Member 1" />
              <h3>Gourav Singh</h3>
              <p>Software Architect</p>
            </div>
            <div className="team-member">
              <img src={member1} alt="Team Member 2" />
              <h3>Gourav Singh</h3>
              <p>Designer</p>
            </div><div className="team-member">
              <img src={member1} alt="Team Member 1" />
              <h3>Gourav Singh</h3>
              <p>Frontend Engineer</p>
            </div>
            <div className="team-member">
              <img src={member1} alt="Team Member 2" />
              <h3>Gourav Singh</h3>
              <p>Backend Engineer</p>
            </div><div className="team-member">
              <img src={member1} alt="Team Member 1" />
              <h3>Gourav Singh</h3>
              <p>Database Administrator</p>
            </div>
            <div className="team-member">
              <img src={member1} alt="Team Member 2" />
              <h3>Gourav Singh</h3>
              <p>Software Developer</p>
            </div>
            <div className="team-member">
              <img src={member1} alt="Team Member 2" />
              <h3>Gourav Singh</h3>
              <p>Software Developer</p>
            </div>
            {/* Add more team member profiles as needed */}
          </div>
        </section>
      </div>
      <footer>
        <p>&#169; &nbsp; Synergy Link &nbsp; <b>2024</b></p>
      </footer>
    </div>
  );
};

export default Landing;
