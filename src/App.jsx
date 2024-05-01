import React, { useState } from 'react';
import CompetenceList from './Components/CompetenceList';
import FilterButtons from './Components/FilterButtons';

const App = () => {
    const [filter, setFilter] = useState(null);

    const handleFilter = type => {
        setFilter(type);
    };

    return (
        <div className="App">
            <FilterButtons onFilter={handleFilter} />
            <CompetenceList filter={filter} />
        </div>
    );
};

export default App;
