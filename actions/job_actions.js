import axios from 'axios';
import { Location } from 'expo';
//import reverseGeocode from 'latlng-to-zip';
import qs from 'qs';

import JOB_DATA from './IndeedJobData.json';

import {
    FETCH_JOBS
} from './types'

const JOB_ROOT_URL = 'https://authenticjobs.com/api/?';
const JOB_QUERY_PARAMS = {
    api_key: 'ae14c2e712c6c2cffa632aa9ec8a1386',
    method: 'aj.jobs.search',
    format: 'json',
    perpage: '10',
};

const buildJobsUrl = (zip) => {
    const query = qs.stringify({ ...JOB_QUERY_PARAMS });
    return `${JOB_ROOT_URL}${query}`;
};

export const fetchJobs = (region, callback) => async (dispatch) => {
    try {
        let zip = await Location.reverseGeocodeAsync(region);
        const url = buildJobsUrl(zip);
        console.log("\n ============== URL:" + url + " ==================\n");
        let { data } = await axios.get(url);
      // const data = JOB_DATA;
        dispatch({ type: FETCH_JOBS, payload: data });
     //   console.log(data)
        callback();
    } catch (err) {
        console.log(err);
    }
};