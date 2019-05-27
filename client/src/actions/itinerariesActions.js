import axios from "axios"
import {GET_ITINERARIES} from './actionsTypes'
import {GET_ITINERARIES_ERROR} from './actionsTypes'



export const getItineraries = () => {
    return (dispatch) => {
        axios.get("http://localhost:5000/api/itineraries/")
        .then( res => {
            dispatch({
               type: GET_ITINERARIES,
               payload:  res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ITINERARIES_ERROR,
                payload:  err
             })
        })
    }
   
}


export const getItinerariesById = (cityId) => {
    return (dispatch) => {
        console.log(cityId);
        axios.get("http://localhost:5000/api/itineraries/" + cityId)
        .then( res => {
            dispatch({
               type: GET_ITINERARIES,
               payload:  res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ITINERARIES_ERROR,
                payload:  err
             })
        })
    }
   
}