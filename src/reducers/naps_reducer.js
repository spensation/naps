export function napReducer(state = {
  loading: true,
  naps: [],
  nap: {},
  
}, action) {
  switch(action.type) {
    case 'LOADING_NAPS':
      return Object.assign({}, state, { loading: true });
    case 'FETCH_NAPS':
      return Object.assign({}, state, { loading: false, naps: action.payload });
    case 'LOADING_NAP':
      return Object.assign({}, state, { loading: true });
    case 'NAP_LOADED':
      return Object.assign({}, state, { loading: false, nap: action.payload })
    case 'ADD_NAP_PENDING':
      return {...state, posting: true}
    case 'ADD_NAP_FULFILLED':
      return Object.assign({}, state, {nap: state.recipes.concat(action.payload) });
    
    case 'DELETE_NAP_PENDING':
      return {...state, posting: true}
    case 'DELETE_NAP_FULFILLED':
      const naps = state.naps.filter( nap => nap.id !== action.id);
      return { naps };
    default:
      return state;

  }
}