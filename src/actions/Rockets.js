import RocketService from '../services/RocketService';

export const ACTIONS = {
  REQUEST_ROCKETS: 'REQUEST_ROCKETS',
  RECEIVE_ROCKETS: 'RECEIVE_ROCKETS'
};

export const requestRockets = () => ({
  type: ACTIONS.REQUEST_ROCKETS
});

const receiveRockets = response => ({
  type: ACTIONS.RECEIVE_ROCKETS,
  payload: {
    rockets: response.data
  }
});

export const fetchRockets = dispatch => {
  dispatch(requestRockets());
  return RocketService.get().then(response => dispatch(receiveRockets(response)));
};

const shouldFetchRockets = rocketCollection => !rocketCollection || !rocketCollection.fetching;

export const fetchRocketsIfNeeded = ({ dispatch, rocketCollection }) =>
  shouldFetchRockets(rocketCollection) && fetchRockets(dispatch);
