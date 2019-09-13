import React, { useState, useReducer } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { reducer, initialState } from './reducers/SmurfReducer';

const NewSmurfForm = () => {
    const [newSmurf, setNewSmurf] = useState({name: '', age: '', height: ''});

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChanges = e => {
        setNewSmurf({...newSmurf, [e.target.name]: e.target.value});
    };

    const addNewSmurf = e => {
        axios.post('http://localhost:3333/smurfs', newSmurf)
            .then(res => {
                console.log('addNewSmurf api', res.data)
                dispatch({ type: 'ADD_SMURF', payload: res.data})
            })
            .catch(err => {
                console.log('Error in addNewSmurf', err.response)
                dispatch({ type: 'FAILURE'})
            })
            setNewSmurf('');
    }
    console.log('State', state);

    return (
        <>
            <form>
                <div className="smurf-form">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Add new name"
                        onChange={handleChanges}
                        value={newSmurf.name} required
                    />
                </div>
            </form>
        </>
    )

}

export default NewSmurfForm;
    

    

    




