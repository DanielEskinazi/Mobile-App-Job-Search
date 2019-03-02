import axios from 'axios';
import { Location } from 'expo';
//import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';

import {
    FETCH_GEOLOCATION,
    FETCH_GEOLOCATION_SUCCESS,
    FETCH_GEOLOCATION_FAILURE
} from './types'

//google maps api
const google_maps_API_KEY = 'AIzaSyB6BoeEmA0nRg2mzvnzL2VkHILnSx2npOs';  
const GOOGLE_URL = 'https://maps.googleapis.com/maps/api/geocode/json?';


const buildMapsUrl = (city) => {
    let MAP_QUERY_PARAMS = {
        key: google_maps_API_KEY,
        address: city
    }
    const query = qs.stringify({ ...MAP_QUERY_PARAMS });
    return `${GOOGLE_URL}${query}`;
};

export const fetchGeolocation = (city) => async (dispatch) => {
    try {
        console.log("fetchGeolocation (city):" + city);
        
        const url = buildMapsUrl(city);
        console.log("\n ============== fetch GEOLOCATION URL:" + url + " ==================\n");

        let { data } = await axios.get(url);

        const latitude = data.results[0].geometry.location.lat;
        const longitude = data.results[0].geometry.location.lng;
        let coordinates = data.results[0].geometry.location;
        console.log("Coordinates:" );
        console.log(coordinates)        

        dispatch({ type: FETCH_GEOLOCATION, payload: coordinates});

    } catch (err) {
        console.log(err);
    }
};
