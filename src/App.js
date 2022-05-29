import { useState } from "react";
import List from "./List";
import birthdaysData from "./birthdaysData";
import "./App.css";

function App() {
    const [persons, usePerson] = useState(birthdaysData);

    const ResetAllBirthdays = () => {
        usePerson([]);
    };

    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>{persons.length} birthday found</h2>
                </div>
                <div className="card-list">
                    <List persons={persons} />
                </div>
                <button className="card-clear-all" onClick={ResetAllBirthdays}>
                    Clear All
                </button>
            </div>
        </div>
    );
}

export default App;
