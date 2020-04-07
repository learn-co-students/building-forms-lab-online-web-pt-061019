export default function manageBand(state = {
  bands: [],
}, action) {

  console.log("payload", action.payload)
  switch(action.type){
    case 'ADD_BAND':
      // console.log({ bands: state.bands.concat(action.payload.text) });
      // return Object.assign({}, state, {bands: state.bands.concat(action.payload)})
      // return { bands: state.bands.concat(action.payload) };
      return { ...state, bands: [...state.bands, action.payload] }

      default:
      return state
  }
  
  

};
