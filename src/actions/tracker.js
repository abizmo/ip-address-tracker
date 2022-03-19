import track from 'services/tracker';

export const SET_LOCATION = 'SET_LOCATION';

const setLocation = (payload) => ({
  type: SET_LOCATION,
  payload,
});

export const getMyLocation = () => async (dispatch) => {
  try {
    const location = await track();

    return dispatch(setLocation(location));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    return null;
  }
};

export const getLocationByDomain = (domain) => async (dispatch) => {
  try {
    const location = await track({ domain });

    return dispatch(setLocation(location));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    return null;
  }
};

export const getLocationByIp = (ipAddress) => async (dispatch) => {
  try {
    const location = await track({ ipAddress });

    return dispatch(setLocation(location));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    return null;
  }
};
