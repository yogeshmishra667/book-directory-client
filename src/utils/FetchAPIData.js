import axios from 'axios';
import { getCookie } from './CookiesHelper';
/**
 * Fetch Data from the API & return Response
 * @param {String} method - HTTP requests - GET || POST || PUT || DELETE
 * @param {String} endpoint
 * @param {Object} data
 * @param {String} endpointPrefix - EndPoint Prefix. default - '/api'
 * @returns - {Object} - API response
 */
const FetchAPIData = async (endpoint, method = 'post', data = null, endpointPrefix = '') => {
  // const BASE_URL = process.env.REACT_APP_API_BASE_URL + endpointPrefix;
  const BASE_URL = 'http://localhost:8000/api/v1/' + endpointPrefix;
  const accessToken = 'Bearer ' + getCookie('user-token');
  //   console.log('accessToken', accessToken);

  let config = {};

  if ((method == 'post' || method == 'put' || method == 'patch') && data) {
    config = {
      method: method,
      url: BASE_URL + endpoint,
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
      data: data,
    };
  }

  if (method == 'get') {
    config = {
      method: 'get',
      url: BASE_URL + endpoint,
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
    };
  }

  if (method == 'delete') {
    config = {
      method: 'delete',
      url: BASE_URL + endpoint,
      headers: {
        'Content-Type': 'application/json',
        Authorization: accessToken,
      },
    };
  }

  let response = await axios(config).catch((error) => {
    console.log(error.response.data.error);
    // return error;
  });

  return response;
};

export default FetchAPIData;
