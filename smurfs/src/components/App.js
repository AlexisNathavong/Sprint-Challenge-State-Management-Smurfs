import React, { useReducer, useEffect } from "react";
import "./App.css";
import axios from "axios";

import { initialState, reducer } from '../components/reducers/SmurfReducer';
import NewSmurfForm from "./NewSmurfForm";
import Smurf from './Smurf';

import { Title } from './StyledWidgets';


function App () {
  
  const [state, dispatch] = useReducer(reducer, initialState);



  useEffect(() => {
    //Adding axios GET request HERE
    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        console.log('res api', res.data);
        dispatch({ type: 'ADD_SMURF', payload: res.data});


      })
      .catch(err => console.log('Error, please try again', err))

  }, [])

  
    return (
      <div className="App">
            <Title>
           <h1>Welcome to the Smurf Registration Form:</h1>
          </Title>

          <NewSmurfForm />
          
          {state.smurf.map(smurf => (
            <Smurf key={smurf.id} smurf={smurf} />
          ))}
      </div>
    );
}


export default App;
