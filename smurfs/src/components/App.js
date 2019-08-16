import React from "react";
import "./App.css";
import NewSmurfForm from "./NewSmurfForm";

import { Title } from './StyledWidgets';


const App = () => {
  
    return (

      
        <div className="App">

          <Title>
           <h1>Welcome to the Smurf Registration Form:</h1>
          </Title>

          <NewSmurfForm />
        </div>
      
    );
}


export default App;
