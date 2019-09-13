
export const initialState = {
    smurf: [
        {
           name: 'Brainey',
           age: 200,
           height: '5cm',
           id: 0 
        }
    ]
}

export const reducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_SMURF':
            return {
                ...state,
                smurf: action.payload
            }
        default:
            return state;
    }
}