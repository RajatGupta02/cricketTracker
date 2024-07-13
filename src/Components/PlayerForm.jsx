import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";

const PlayerForm = ({ addPlayer }) => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addPlayer(name);
        setName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div class="d-flex flex-nowrap justify-content-center">
            <input
                class="form-control form-control-lg"
                type="text"
                placeholder="Player Name"
                value = {name}
                onChange={(e)=> setName(e.target.value)}
                required
            />
            <div class="col-1"></div> 
            <Button variant="dark" type = "submit">Add Player</Button>
            </div>
        </form>
    )
};

export default PlayerForm;