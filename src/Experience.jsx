import React from 'react';
import './ExperienceCard.css';

const ExperienceCard = () => {
    return (
        <>
            <div className="experience-card">
                <h2>Experience</h2>

                <div className="header">
                    <h2>Wordpress Developer Intern</h2>
                    <span className="date">7/2021 - 9/2021</span>
                </div>
                <div className="company">Codevita Live</div>
                <ul>
                    <li>Implemented responsive design techniques to ensure that WordPress websites look good and function properly on different devices and screen sizes.</li>
                    <li>Contributed in UI design ideas for the company website.</li>
                    <li>Conducted website maintenance and updates.</li>
                    <li>Customized WordPress themes to fit the design needs using HTML and CSS for the company website.</li>
                </ul>
            </div>
        </>
    );
};

export default ExperienceCard;
