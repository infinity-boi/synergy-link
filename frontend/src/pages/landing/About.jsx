import React from 'react';
import './Landing.css';

function About() {
  return (
        <div className="about">
            <section className="hero">
                <div className="hero-content">
                <h1>About Synergy Link</h1>
                <p>
                    Synergy Link is a platform designed to help people build meaningful
                    connections based on personality and goals. We believe that strong
                    relationships are essential for personal and professional growth. Our
                    mission is to empower individuals to find their tribe, connect with
                    like-minded people, and build supportive networks.
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
        </div>
  );
}

export default About;
