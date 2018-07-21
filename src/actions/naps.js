import fetch from 'isomorphic-fetch';

export function fetchNaps() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_NAPS' });
    return fetch('http://localhost:3001/api/v1/naps', {
    	method: 'GET',
      	headers:{ Accept: "application/json",
               "Content-Type": "application/json"}
    }).then(response => response.json())
    .then(naps => dispatch({ type: 'FETCH_NAPS', payload: naps}))
  };
}

export function addNap(nap) {
  console.log('from addNap', nap)
  return (dispatch) => {
    dispatch({ type: 'ADD_NAP_PENDING' });

    return fetch('http://localhost:3001/api/v1/naps', {

      method: 'POST',
      body: JSON.stringify({ nap: nap }),
      headers:{ 'Accept': "application/json",
               "Content-Type": "application/json"}
    }).then(response => response.json())
      .then(nap => dispatch({ type: 'ADD_NAP_FULFILLED', payload: nap }))
    };
  }

  // export function fetchRecipe(recipeId) {
  //   return (dispatch) => {
  //     dispatch({ type: 'LOADING_RECIPE' });
  //     return fetch(`http://localhost:3001/api/v1/recipes/${recipeId}`)
  //     .then(response => response.json())
  //     .then(recipe => dispatch({ type: 'RECIPE_LOADED', payload: recipe}))
  //   }
  // }

  export function deleteNap(napId) {
    console.log('inDeleteNapACTION', napId)
    return dispatch => {
      dispatch({type: 'DELETE_NAP_PENDING'});
      return fetch(`http://localhost:3001/api/v1/naps/${napId}`, {
          method: "DELETE",
      }).then(response => response.json())
        .then(naps => dispatch({ type: 'DELETE_NAP_FULFILLED', payload: naps }))

    };
  };