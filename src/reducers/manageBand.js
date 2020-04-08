import uuid from 'uuid';

export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case "ADD_BAND":
      const band = {
        id: uuid(),
        ...action.band
      }
      return {bands: [...state.bands, band]}
    default:
      return state
  }
};
