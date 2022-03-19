import { SET_LOCATION } from 'actions/tracker';

const initialState = {
  ip: '',
  location: '',
  timezone: '',
  isp: '',
  lat: '',
  lng: '',
};

// eslint-disable-next-line default-param-last, no-unused-vars
function trackerReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_LOCATION:
      return {
        ...payload,
      };

    default:
      return state;
  }
}

export default trackerReducer;
