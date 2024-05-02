import React from 'react';
import './Landing.css';


function Synergy(){
    return (
        <div className="synergy">

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Synergy Link: Connecting Personalities for Meaningful Conversations</h1>
                    <p>Connect with people who share your personality and goals for lasting friendships and collaborations.</p>
                    <ul className="benefits">
                        <li>Personality based Matching</li>
                        <li>Goal Oriented Connections</li>
                        <li>Build a Supportive Network</li>
                    </ul>
                    <div className="cta">
                        <a href="" className="button primary">Join Now for Free</a>
                        <a href="" className="button secondary">Learn More</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Synergy;