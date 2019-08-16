import React, { useState, useReducer } from 'react';
import { reducer, initialState }from './reducers/SmurfReducer';

import { Form } from './StyledWidgets';

const NewSmurfForm = () => {
    const [newSmurf, setNewSmurf] = useState({name: '', age: '', height: ''});

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChanges = event => {
        const updatedSmurf = {...newSmurf, [event.target.name]: event.target.value};
        console.log('handleChanges', event.target.name, event.target.value, updatedSmurf);
        setNewSmurf(updatedSmurf);
    };

    const addSmurf = event => {
        event.preventDefault();
        dispatch({ type: 'ADD_SMURF', payload: newSmurf});
        setNewSmurf('');
    };




    console.log(state);

    return (
        
            <Form>
                <form>
                    <div className="form-group">
                        <label> Name: </label>
                            <input
                                
                                className="form-group"
                                type="text"
                                value={newSmurf.name} required
                                name="smurf"
                                onChange={handleChanges}
                            />
                    </div>

                    <div className="form-group">
                        <label> Age: </label>
                            <input

                                className="form-group"
                                type="text"
                                value={newSmurf.age} required
                                name="age"
                                onChange={handleChanges}
                            />
                    </div>

                    <div className="form-group">
                        <label> Height: </label>
                            <input

                                className="form-group"
                                type="text"
                                value={newSmurf.height} required
                                name="height"
                                onChange={handleChanges}
                            />
                    </div>

                    <div className="btn-container">
                        <button onClick={addSmurf}>Add</button>
                    </div>

                </form>
            </Form>
        
    );
}

export default NewSmurfForm;