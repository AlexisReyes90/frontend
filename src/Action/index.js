import axios from 'axios';

export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const GET_NOTE = 'GET_NOTE';


// axios.get config

export const getNote = (id) => {
    return {
        type: GET_NOTE,
        id: id,
    }
}

export const getNotes = () => {
    return dispatch => {
        dispatch({ type: LOADING });
        axios
            .get('http://localhost:5000/notes')
            .then(response => dispatch({ type: SUCCESS, notes: response.data }))
    }
}

// axios.post config

export const postNote = (newNoteObj) => {
    return dispatch => {
        dispatch({ type: LOADING });
        axios
            .post('http://localhost:5000/notes', newNoteObj)
            .then(response => { 
                dispatch({ type: SUCCESS, notes: response.data })
            })
    }
}

// axios.post new user

export const createUser = (newUser) => {
    return dispatch => {
        dispatch({ type: LOADING });
        axios
            .post('http://localhost:5000/register', newUser)
            .then(response => {
                dispatch({ type: SUCCESS })
            })
    }
}

//axios log in user

export const login = ({ username, password }) => {
    return dispatch => {
        dispatch({ type: LOADING });
        axios
            .post('http://localhost:5000/user/login', { username, password })
            .then(response => {
                dispatch({ type: SUCCESS })
            })
    }
}

//axios.delete config

export const deleteNote = (id) => {
    return dispatch => {
        dispatch({ type: LOADING });
        axios
            .delete(`http://localhost:5000/notes/remove/${id}`)
            .then(response => {
                dispatch({ type: SUCCESS, notes: response.data })
            })
    }
}

//axios.put config

export const updateNote = (updatedNoteObj) => {
    return dispatch => {
        dispatch({ type: LOADING });
        axios
            .put(`http://localhost:5000/notes/edit/${updatedNoteObj.id}`, updatedNoteObj)
            .then(response => {
                dispatch({ type: SUCCESS, notes: response.data })
            })
    }
}