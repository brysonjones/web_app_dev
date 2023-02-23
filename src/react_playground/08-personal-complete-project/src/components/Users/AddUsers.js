import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from './AddUsers.module.css'

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0)
        {
            return;
        }        
        if (+enteredAge < 1)
        {
            return;
        }
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };
    
    return (
    <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor='username'>Username</label>
            <input 
                id='username' 
                type='text' 
                value={enteredUsername} 
                onChange={usernameChangeHandler}>
            </input>
            <label htmlFor='age'>Age (Years)</label>
            <input 
                id='age' 
                type='number' 
                value={enteredAge} 
                onChange={ageChangeHandler}>
            </input>
            <Button type="submit">Add User</Button>
        </form>
    </Card>
    );
};

export default AddUser;