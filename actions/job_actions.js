import axios from 'axios';
import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';

import {
    FETCH_JOBS
} from './types'



export const fetchJobs = (region) => {
    try {
        let zip_code = await reverseGeocode(region);
    } catch (err) {
        console.log(err);
    }
};