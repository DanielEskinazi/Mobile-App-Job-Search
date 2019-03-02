import {
    FETCH_GEOLOCATION
} from '../actions/types';

export default function(state = {}, action) {
    
    switch (action.type) {
        case FETCH_GEOLOCATION:
            // console.log("Maps Reducer > action.payload: ")
            // console.log(action.payload)
            return action.payload;
        default:
            return state;
    }
}