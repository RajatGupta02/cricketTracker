import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "bootstrap";

const PlayerForm = ({ addPlayer }) => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addPlayer(name);
        setName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Player Name"
                value = {name}
                onChange={(e)=> setName(e.target.value)}
                required
            />
            <button type = "submit">Add Player</button>
        </form>
    )
};

export default PlayerForm;