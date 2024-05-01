import React from 'react';

const FilterButtons = ({ onFilter }) => {
    return (
        <div className="filter-buttons">
            <button onClick={() => onFilter('greater')}>Показать {'>'} 50%</button>
            <button onClick={() => onFilter('less')}>Показать {'<'} 50%</button>
        </div>
    );
};

export default FilterButtons;