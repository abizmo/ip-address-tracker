import axios from 'axios';

const API_KEY = process.env.REACT_APP_GEO_IPIFY_API_KEY;
const BASE_URL = 'https://geo.ipify.org/api/v2';

async function track(query) {
  try {
    const { status, statusText, data } = await axios
      .get(`${BASE_URL}/country,city?apiKey=${API_KEY}&${query}`);

    if (status !== 200) {
      throw new Error(statusText);
    }
    // eslint-disable-next-line no-console
    console.log(data);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }
}

export function trackIP(ip) {
  return track(`ipAddress=${ip}`);
}

export function trackDomain(domain) {
  return track(`domain=${domain}`);
}
