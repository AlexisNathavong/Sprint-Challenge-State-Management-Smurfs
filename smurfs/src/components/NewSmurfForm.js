import React, { useState, useReducer } from 'react';
import { reducer, initialState }from './reducers/SmurfReducer';

const NewSmurfForm = () => {
    const [newSmurf, setNewSmurf] = useState('');

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChanges = event => {
        setNewSmurf(event.target.value)
    };

    const addSmurf = event => {
        event.preventDefault();
        dispatch({ type: 'ADD_SMURF', payload: newSmurf});
        setNewSmurf('');
    };




    console.log(state);

    return (
        <>
            <form>
                <div className="form-group">
                    <label> Name: </label>
                        <input
                            
                            type="text"
                            value={newSmurf} required
                            name="smurf"
                            onChange={handleChanges}
                        />
                </div>

                <div className="form-group">
                    <label> Age: </label>
                        <input
                            type="text"
                            value={newSmurf} required
                            name="age"
                            onChange={handleChanges}
                        />
                </div>

                <div className="form-group">
                    <label> Height: </label>
                        <input
                            type="text"
                            value={newSmurf} required
                            name="height"
                            onChange={handleChanges}
                        />
                </div>

                <div className="form-group">
                    <label> ID: </label>
                        <input
                            type="text"
                            value={newSmurf}
                            name="id"
                            onChange={handleChanges}
                        />
                </div>
                <div className="btn-container">
                    <button onClick={addSmurf}>Add</button>
                </div>

            </form>
        </>
    );
}

export default NewSmurfForm;