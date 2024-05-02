import React from 'react';

const Story = ({ name, quote, image, animationDelay }) => {
    return (
        <div className={`story animate__animated animate__${animationDelay}`} key={name}>
            <img src={image} alt={`${name}'s Story`} className="stroy-image" />
            <div className="story-content">
                <h3>{name}</h3>
                <p>{quote}</p>
            </div>
        </div>
    );
};

export default Story;