import React, { useState } from 'react';
import CompetenceCard from './CompetenceCard';
import competences from './competencesData';

const CompetenceList = ({ filter }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [level, setLevel] = useState('');
    const [competenceList, setCompetenceList] = useState(competences);
    const [showAll, setShowAll] = useState(false);


    const toggleShowAll = () => {
        setShowAll(!showAll);
    };
    
    const handleAddCompetence = () => {
        const newCompetence = {
            id: competenceList.length + 1,
            title,
            description,
            level: parseInt(level)
        };
        setCompetenceList([...competenceList, newCompetence]);
        setTitle('');
        setDescription('');
        setLevel('');
    };

    
    const handleDeleteCompetence = (id) => {
        const updatedList = competenceList.filter(comp => comp.id !== id);
        setCompetenceList(updatedList);
    };

    const filteredCompetences = competenceList.filter(comp => {
        if (filter === 'greater') {
            return comp.level > 50;
        } else if (filter === 'less') {
            return comp.level < 50;
        }
        return true;
    });

    return (
        <div className="competence-list">
            <h2>Компетенции</h2>
            <button onClick={toggleShowAll}>
                {showAll ? 'Показать компетенции' : 'Убрать компетенции'}
            </button>
            {showAll && (
                <div>
                    {filteredCompetences.map(comp => (
                        <div key={comp.id}>
                            <CompetenceCard
                                title={comp.title}
                                description={comp.description}
                                level={comp.level}
                            />
                            <button onClick={() => handleDeleteCompetence(comp.id)}>
                                Удалить
                            </button>
                        </div>
                    ))}
                </div>
            )}
            <h3>Добавить новую компетенцию</h3>
            <input
                type="text"
                placeholder="заголовок"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="описание"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="number"
                placeholder="Уровень"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
            />
            <button onClick={handleAddCompetence}>Создать</button>
        </div>
    );
};

export default CompetenceList;