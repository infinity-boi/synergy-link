import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import logo from "../../assets/logo.png"

const Landing = () => {
  return (
    <div id="landing">
      <header className="header">
        <img
          src={logo}
          alt="Synergy Link"
          className="company-logo"
        />
        <nav className="nav">
          <ul>
            <li>
              <Link to="#synergy">Home</Link>
            </li>
            <li>
              <Link to="#about">About</Link>
            </li>
            <li>
              <Link to="#howitworks">How it Works</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Link className="link-class" to="/login">
            <a href="/login" id="login-button" className="button">
              Log in
            </a>
          </Link>
          <Link className="link-class" to="/signup">
            <a href="/signup" className="button primary">
              Sign Up
            </a>
          </Link>
        </div>
      </header>
      <div className="content" id="app-content">
        <section id="synergy" className="synergy">
          <div className="hero-content">
            <h1>
              Synergy Link: Connecting Personalities for Meaningful
              Conversations
            </h1>
            <p>
              Connect with people who share your personality and goals for
              lasting friendships and collaborations.
            </p>
            <ul className="benefits">
              <li>Personality based Matching</li>
              <li>Goal Oriented Connections</li>
              <li>Build a Supportive Network</li>
            </ul>
            <div className="cta">
              <a href="" className="button primary">
                Join Now for Free
              </a>
              <a href="" className="button secondary">
                Learn More
              </a>
            </div>
          </div>
        </section>
        <section synergy="about" className="about">
          <div className="hero-content">
            <h1>About Synergy Link</h1>
            <p>
              Synergy Link is a platform designed to help people build
              meaningful connections based on personality and goals. We believe
              that strong relationships are essential for personal and
              professional growth. Our mission is to empower individuals to find
              their tribe, connect with like-minded people, and build supportive
              networks.
            </p>
          </div>
        </section>

        <section className="team">
          <h2>Meet the Team</h2>
          <p>
            Synergy Link is driven by a passionate team dedicated to building a
            platform that fosters meaningful connections.
          </p>
          <div className="team-members">
            {/* Add team member profiles here (repeat for each member) */}
            <div className="team-member">
              <img src="team-member-1.jpg" alt="Team Member 1" />
              <h3>Gourav Singh</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <img src="team-member-2.jpg" alt="Team Member 2" />
              <h3>Gourav Singh</h3>
              <p>CTO</p>
            </div>
            {/* Add more team member profiles as needed */}
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
      </div>
    </div>
  );
};

export default Landing;
