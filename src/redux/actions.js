
export const REQUEST_APPS = 'REQUEST_APPS'
export const RECEIVE_APPS = 'RECEIVE_APPS'


function requestApps() {
  return {
    type: REQUEST_APPS
  }
}

function receiveApps(json) {
  return {
    type: RECEIVE_APPS,
    apps: json
  }
}

export function fetchApps(data,class_name) {

  let url = 'https://api.spaceXdata.com/v3/launches?limit=100';

  if(class_name === 'successful-landing'){
    url += '&launch_success=true&land_success='+data.toLowerCase();
  }
  else if(class_name === 'launch-year'){
    url += '&land_success=true&launch_success=true&launch_year='+data;
  }
  else {
    url += '&launch_success='+data.toLowerCase();
  }

  return dispatch => {
    dispatch(requestApps())

    return fetch(url)
      .then(response => response.json())
      .then(json => dispatch(receiveApps(json)))
  }
}

function shouldFetchApps(state) {
  const apps = state.apps
  if (apps.length==0) {
    return true
  } else if (state.isFetching) {
    return false
  }
}

export function fetchAppsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchApps(getState())) {
      return dispatch(fetchApps())
    }
  }
}
