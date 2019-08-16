import React, { useState, useReducer } from 'react';
import { reducer, initialState }from './reducers/SmurfReducer';

import axios from 'axios';

import { Form, Context, AddBtn } from './StyledWidgets';

const NewSmurfForm = () => {
    
    const [newSmurf, setNewSmurf] = useState({name: '', age: '', height: ''});

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChanges = event => {
        
        setNewSmurf({...newSmurf, [event.target.name]: event.target.value});
    };

   

    const addSmurf = event => {

        event.preventDefault();
        axios.post('http://localhost:3333/smurfs', newSmurf)
            .then(res => {
                
                dispatch({ type: 'ADD_SMURF', payload: res.data});
            })
            .catch(err => {
                dispatch({ type: "FAILURE"})
            })
        setNewSmurf('');
    };




    console.log(state);

    return (
        
            <Form>
                <form>
                    <Context>
                        <div className="form-group">
                            <label> Name: </label>
                                <input
                                    
                                    className="form-group"
                                    type="text"
                                    value={newSmurf.name} required
                                    name="name"
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

                        <AddBtn onClick={addSmurf}>Add</AddBtn>
                      
                    </Context>
                </form>
            </Form>
        
    );
}

export default NewSmurfForm;