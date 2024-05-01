import React from 'react';

const CompetenceCard = ({ title, description, level }) => {
    return (
        <div className="competence-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Level: {level}%</p>
        </div>
    );
};

export default CompetenceCard;