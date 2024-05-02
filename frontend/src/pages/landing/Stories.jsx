import React from 'react';
import Story from './Story';
import Slider from 'react-slick';

const stories = [
    {
        name: 'Lakshay Mehta',
        quote: '"Synergy Link helped me find like-minded people who share my passion for coding. We now collaborate on projects and support each other\'s goals."',
        image: './images/user-images/lakshay-mehta.jpg'
    },
    {
        name: 'Gagan Deep',
        quote: '"Thanks to Synergy Link, I met my best friend! We connected over our love for travel and now explore new destinations together."',
        image: './images/user-images/gagan-deep.jpg'
    }
];

const Stories = () => {
    const settings = {
        dots: true, // Enable navigation dots
        infinite: true, // Enable continuous looping
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Set autoplay interval
        slidesToShow: 2, // Display two stories at once (adjust as needed)
        slidesToScroll: 1, // Scroll one story at a time
        responsive: [
          {
            breakpoint: 768, // Adjust breakpoint for responsive design
            settings: {
              slidesToShow: 1, // Show one story on smaller screens
            },
          },
        ],
      };
    
    return (
        <div className="stories">
            <h2>Success Stories</h2>
            <div className="stories-container">
                <Slider {...settings}>
                {stories.map((story) => (
                    <Story key={story.name} {...story} />
                ))}
                </Slider>
            </div>
        </div>
    );
};

export default Stories;