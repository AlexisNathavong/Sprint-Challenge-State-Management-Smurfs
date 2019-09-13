import React, { useState, useReducer } from 'react';
import axios from 'axios';
import { reducer, initialState } from './reducers/SmurfReducer';
import { SmurfForm, Context, AddBtn } from './StyledWidgets';

const NewSmurfForm = props => {
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
               
            })
            setNewSmurf('');
    }
    console.log('State', state);

    return (
        <SmurfForm>
            <form>
                <Context>
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

                    <div className="smurf-form">
                        <label>Age:</label>
                        <input
                            type="number"
                            name="age"
                            placeholder="Add age"
                            onChange={handleChanges}
                            value={newSmurf.age} required
                        />
                    </div>

                    <div className="smurf-form">
                        <label>Height:</label>
                        <input
                            type="text"
                            name="height"
                            placeholder="Add height"
                            onChange={handleChanges}
                            value={newSmurf.height} required
                        />
                    </div>
                    <img src={require('../imgs/199-1994074_brainy-smurf-holding-a-book-clipart-brainy-smurf.png')} alt='' width="200"/>

                    <AddBtn onClick={addNewSmurf} className="add-btn">Add</AddBtn>
                </Context>
            </form>
        </SmurfForm>
    )

}



export default NewSmurfForm;
    

    

    




