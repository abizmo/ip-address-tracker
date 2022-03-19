import axios from 'axios';

const API_KEY = process.env.REACT_APP_GEO_IPIFY_API_KEY;
const BASE_URL = 'https://geo.ipify.org/api/v2';
// eslint-disable-next-line no-console
console.log(API_KEY);

async function track({ domain, ipAddress } = {}) {
  try {
    let query = '';
    query = ipAddress ? `&ipAddress=${ipAddress}` : query;
    query = domain ? `${query}&domain=${domain}` : query;

    const { status, statusText, data } = await axios
      .get(`${BASE_URL}/country,city?apiKey=${API_KEY}${query}`);

    if (status !== 200) {
      throw new Error(statusText);
    }

    const { ip, location, isp } = data;
    const {
      city, region, postalCode, timezone, lat, lng,
    } = location;
    return {
      ip,
      location: `${city}, ${region} ${postalCode}`,
      timezone,
      isp,
      lat,
      lng,
    };
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    return null;
  }
}

export default track;
