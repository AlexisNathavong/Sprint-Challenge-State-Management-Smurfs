

export const initialState = {
    smurf: [
        {
          name: "Brainey",
          age: 200,
          height: "5cm",
          id: 0
        }
      ]
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {

        case 'ADD_SMURF':

        return {
            ...state,
            smurf: [...state.smurf, {name: action.payload, id: Date.now()}]
        };


        default:
            return state;
    }
}