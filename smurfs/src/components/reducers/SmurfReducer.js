

export const initialState = {
    smurf: [
        {
          name: '',
          age: '',
          height: '',
          id: 0
        }
      ]
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {

        case 'ADD_SMURF':

        return {
            ...state,
            smurf: action.payload
        };


        default:
            return state;
    }
}