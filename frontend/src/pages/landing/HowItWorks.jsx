import React from 'react';
import './Landing.css';


export default function HowItWorks(){
    return (
        <div className="howitworks">
            <section className="how-it-works">
                <h2>How it Works</h2>
                <p>
                Synergy Link uses a unique approach to connect people. Here's a
                simple breakdown of the process:
                </p>
                <ul className="steps">
                <li>
                    <span className="step-number">1</span>
                    <span className="step-description">Sign Up and Create Your Profile</span>
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
    );

}