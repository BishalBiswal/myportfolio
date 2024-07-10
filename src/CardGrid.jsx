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
            content: 'Development of a Model for Brain Tumor Classification using fine tuned vision transformer model and various pre processing techniques.',
            link: 'https://github.com/BishalBiswal/Improved-brain-tumour-classification-using-ViT',
            imageUrl: vit,
            tags: ['Python', 'Vision Transformers', 'Scikit Learn', 'Torchvision', 'Numpy', 'Matplotlib']
        },
        {
            id: 2,
            name: 'EyeConnect',
            content: 'A Human-computer interface application using machine learning that helps people who are partially paralysed use computer system. A paralysed person can move the mouse only by their eye movements like blinking, looking up and down, etc.',
            link: 'https://github.com/BishalBiswal/EyeConnect',
            imageUrl: ear,
            tags: ['Python', 'Pytautogui', 'Numpy', 'OpenCV', 'Mediapipe', 'Machine Learning']
        },
        {
            id: 3,
            name: 'Automatic internship application script',
            content: 'A python script to automatically apply for internships on internshala, install selenium before running script',
            link: 'https://github.com/BishalBiswal/Automatic-internship-application',
            imageUrl: code,
            tags: ['Python', 'Selenium']
        },
        {
            id: 4,
            name: 'Smart face mask detection system with ML and IoT',
            content: "A smart face mask detection system that turns motor(for smart door) and changes led light's colour depending on if youre wearing a mask or not",
            link: 'https://github.com/BishalBiswal/smart-face-mask-detection-system',
            imageUrl: mask,
            tags: ['IoT', 'Python', 'TinkerCAD', 'Selenium', 'OpenCV', 'Tensorflow', 'Numpy']
        },
        {
            id: 5,
            name: 'E Commerce Website',
            content: 'E-commerce website made with ReactJS',
            link: 'https://github.com/BishalBiswal/e-commerce-website',
            imageUrl: ltech,
            tags: ['ReactJS', 'Boostrap CSS']
        },
        {
            id: 6,
            name: 'To-do List',
            content: 'To-do list app made with ReactJS',
            link: 'https://github.com/BishalBiswal/To-do-list',
            imageUrl: todo,
            tags: ['ReactJS', 'CSS']
        },
    ];

    return (
        <>
            <div className="card-grid">
                <h2>Projects</h2>
                {cards.map(card => (
                    <a href={card.link} target="_blank" rel="noopener noreferrer" key={card.id}>
                        <div className="card">
                            <img src={card.imageUrl} alt={`Card ${card.id}`} className="card-image" />
                            <h3>{card.name}</h3>
                            <div className="tags">
                                {card.tags.map(tag => (
                                    <span className="tag" key={tag}>{tag}</span>
                                ))}
                            </div>
                            <p>{card.content}</p>

                        </div>
                    </a>
                ))}
            </div>
        </>
    );
};

export default CardGrid;
