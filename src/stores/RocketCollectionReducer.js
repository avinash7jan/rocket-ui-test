import { ACTIONS } from '../actions/Rockets';

const initialState = {
  rockets: [],
  fetching: false
};

const actionHandlers = {
  [ACTIONS.REQUEST_ROCKETS]: ({ state }) => ({
    ...state,
    fetching: true
  }),
  [ACTIONS.RECEIVE_ROCKETS]: ({ state, action }) => ({
    ...state,
    fetching: false,
    rockets: [...state.rockets, ...action.payload.rockets]
  })
};

export default (state = initialState, action) =>
  actionHandlers[action.type] ? actionHandlers[action.type]({ state, action }) : state;
