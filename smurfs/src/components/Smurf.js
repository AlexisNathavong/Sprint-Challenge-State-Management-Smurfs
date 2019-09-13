import React from 'react';
import { SmurfCard, Name, Info } from './StyledWidgets';

const Smurf = props => {
    return (
        <SmurfCard>
            <Name>
                <h2>{props.smurf.name}</h2>
            </Name>

            <Info>
                <p>Age: {props.smurf.age}</p>
                <p>Height: {props.smurf.height}</p>
            </Info>
        </SmurfCard>
    )
}

export default Smurf;