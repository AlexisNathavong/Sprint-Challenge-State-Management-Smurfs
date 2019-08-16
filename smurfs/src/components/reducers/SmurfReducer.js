

export const initialState = {
    smurf: [
        {
          name: '',
          age: '',
          height: '',
          id: Date.now()
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