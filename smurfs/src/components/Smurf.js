import React from 'react';

import { Card, Name, Info } from './StyledWidgets';

const Smurf = props => {

    return (
        <Card>
            <Name>
                <h2>{props.smurf.name}</h2>
            </Name>

            <Info>
                <p>Age: {props.smurf.age}</p>
                <p>Height: {props.smurf.height}</p>
            </Info>
        </Card>
    )
}

export default Smurf;