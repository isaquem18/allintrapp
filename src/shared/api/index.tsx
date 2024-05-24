/* eslint-disable consistent-return */
import axios from 'axios';

export const fetchData = async (pageno: number) => {
  try {
    const apiurl = process.env.API_URL_CRIPTOLIST_COINGECKO;
    return await axios({
      url: apiurl,
      method: 'GET',
      params: {
        page: pageno,
      },
    });
  } catch (error) {
    // handle error
  }
};
