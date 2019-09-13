// import axios from 'axios';

// export const ADD_SMURF = 'ADD_SMURF';

// export const getSmurf = () => {
//     return (dispatch) => {
//         dispatch({ type: 'ADD_SMURF'});
//         axios.get('http://localhost:3333/smurfs')
//             .then(res => {
//                 console.log('getSmurf api', res.data)
//                 dispatch({ type: ADD_SMURF, payload: res.data})
//             })
//             .catch(err => {
//                 console.log('Error in getSmurf', err.response)
//             })
//     }
// }