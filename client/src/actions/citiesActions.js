import axios from "axios"
import {GET_CITIES} from './actionsTypes'
import {GET_CITIES_ERROR} from './actionsTypes'



export const getCities = () => {
    return (dispatch) => {
        axios.get("http://localhost:5000/api/cities/")
        .then( res => {
            dispatch({
               type: GET_CITIES,
               payload:  res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_CITIES_ERROR,
                payload:  err
             })
        })
    }
   
}






