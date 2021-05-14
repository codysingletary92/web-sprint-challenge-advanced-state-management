import axios from 'axios';

export const LOADING = "LOADING";
export const FAILURE = "FAILURE";
export const SUCCESS = "SUCCESS";
export const ADD_SMURF = "ADD_SMURF";
export const ERROR = "ERROR"

export const fetchSmurfs = () => (dispatch) => {
    console.log('now fetching')
    dispatch({type: LOADING, payload: true})
    axios.get('http://localhost:3333/smurfs')
        .then( res => dispatch({type: SUCCESS, payload: res.data}))
        .catch( err => dispatch({type: FAILURE, payload: err}))
    console.log('done fetching')
}

export const addSmurf = (name, description, nickname, position) => (dispatch) => {
    console.log('yep')
    const newSmurf = {
        name: name,
        description : description,
        nickname : nickname,
        position : position,
    }
    console.log(newSmurf)

    dispatch({type: ADD_SMURF, payload: newSmurf})
}

export const setError = (err) => dispatch => {
    console.log('called')
    dispatch({ type: ERROR, payload: err })
};





//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.