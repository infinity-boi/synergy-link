import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <img href="https://i.pinimg.com/736x/94/0a/30/940a305f636526c7e71d066be8232beb.jpg" alt="Synergy Link" className="company-logo" />
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/synergy">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/howitworks">How it Works</Link>
                    </li>
                    <li>
                        <Link to="/stories">Stories</Link>
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
    );
}

export default Header;
