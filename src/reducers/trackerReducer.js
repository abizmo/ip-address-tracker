const initialState = {
  ip: '192.212.174.101',
  location: 'Brooklyn, NY 10001',
  timezone: 'UTC',
  offset: '-05:00',
  isp: 'SpaceX Starlink',
};

// eslint-disable-next-line default-param-last, no-unused-vars
function trackerReducer(state = initialState, { type, payload }) {
  switch (type) {
    default:
      return state;
  }
}

export default trackerReducer;
