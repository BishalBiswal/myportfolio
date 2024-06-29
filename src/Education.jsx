import React from 'react';
import './EducationCard.css';

const EducationCard = ({ title, institution, duration, description }) => {
    return (


        <div className="education-card">
            <div className="header">
                <h2>{title}</h2>
                <span className="date">{duration}</span>
            </div>
            <div className="institution">{institution}</div>
            {description && <p>{description}</p>}
        </div>

    );
};

const EducationList = () => {
    const educationDetails = [
        {
            title: 'B.Tech in Computer Science Engineering',
            institution: 'ITER, Siksha O’ Anusandhan',
            duration: '2020-2024',
            description: 'I am currently pursuing B.Tech in ITER, SOA university in my 4th year, having learnt a lot in college going through internships, hackathon and project provided valuable experience for improving me as a person.',
        },
        {
            title: '(CBSE)12th Science PCM with Computer Science',
            institution: 'St. Xavier’s High School',
            duration: '2018-2020',
            description: '',
        },
        {
            title: '10th CBSE',
            institution: 'St. Xavier’s High School',
            duration: '2018',
            description: '',
        },
    ];

    return (
        <>
            <div className="education-list">
                <h2>Education</h2><br />

                {educationDetails.map((edu, index) => (
                    <EducationCard
                        key={index}
                        title={edu.title}
                        institution={edu.institution}
                        duration={edu.duration}
                        description={edu.description}
                    />
                ))}
            </div>
        </>
    );
};



export default EducationList;
