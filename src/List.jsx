import React from "react";
import "./List.css";

const List = ({ persons }) => {
    return (
        <div>
            {persons.map((person) => {
                const { id, name, age, mobile, image } = person;
                return (
                    <div key={id} className="person-card">
                        <div className="person-image">
                            <img src={image} alt={name} />
                        </div>
                        <div className="person-description">
                            <div className="desc-head">
                                <h3>{name}</h3>
                                <p>{mobile}</p>
                            </div>
                            <div className="desc-subhead">
                                <p>{age} years old.</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default List;
