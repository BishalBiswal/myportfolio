import React from 'react';
import './CardGrid.css';
import vit from './ftvit.jpg'
import ear from './ear.jpg'
import ltech from './ltech.jpg'
import mask from './mask.jpeg'
import todo from './todo.jpg'
import code from './code.jpg'

const CardGrid = () => {
    const cards = [
        {
            id: 1,
            name: 'Improved brain tumour classification using ViT',
            content: ' Development of a Model for Brain Tumor Classification using fine tuned vision transformer model and various pre processing techniques.',
            link: 'https://github.com/BishalBiswal/Improved-brain-tumour-classification-using-ViT',
            imageUrl: vit
        },
        {
            id: 2,
            name: 'EyeConnect',
            content: 'A Human-computer interface application using machine learning that helps people who are partially paralysed use computer system. A paralysed person can move the mouse only by their eye movements like blinking, looking up and down,etc.',
            link: 'https://github.com/BishalBiswal/EyeConnect',
            imageUrl: ear
        },
        {
            id: 3,
            name: 'Automatic internship application script',
            content: 'A python script to automatically apply for internships on internshala, install selenium before running script',
            link: 'https://github.com/BishalBiswal/Automatic-internship-application',
            imageUrl: code
        },
        {
            id: 4,
            name: 'Smart face mask detection system with ML and IoT',
            content: "A smart face mask detection system that turns motor(for smart door) and changes led light's colour depending on if youre wearing a mask or not",
            link: 'https://github.com/BishalBiswal/smart-face-mask-detection-system',
            imageUrl: mask
        },
        {
            id: 5,
            name: 'E Commerce Website',
            content: 'E-commerce website made with ReactJS',
            link: 'https://github.com/BishalBiswal/e-commerce-website',
            imageUrl: ltech
        },
        {
            id: 6,
            name: 'To-do List',
            content: 'To-do list app made with ReactJS',
            link: 'https://github.com/BishalBiswal/To-do-list',
            imageUrl: todo
        },
    ];

    return (
        <>
            <div className="card-grid">
                <h2>Projects</h2>
                {cards.map(card => (
                    <div key={card.id} className="card">
                        <a href={card.link} target="_blank" rel="noopener noreferrer">
                            <img src={card.imageUrl} alt={`Card ${card.id}`} className="card-image" />
                        </a>
                        <h3>{card.name}</h3>
                        <p>{card.content}</p>
                    </div>
                ))}
            </div>
        </>

    );
};

export default CardGrid;
