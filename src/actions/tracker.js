import track from '../services/tracker';

export const SET_LOCATION = 'SET_LOCATION';

const setLocation = (payload) => ({
  type: SET_LOCATION,
  payload,
});

export const getLocation = (query, value) => async (dispatch) => {
  try {
    const location = await track(query, value);

    return dispatch(setLocation(location));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
    return null;
  }
};
