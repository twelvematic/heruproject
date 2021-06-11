import USERS_TYPES from './types';

interface State {
  users: any;
  isLoading: boolean;
}

const initialState: State = {
  users: [],
  isLoading: false,
};

const reducer = (state: State = initialState, action: any): State => {
  const {type, payload} = action;
  switch (type) {
    case USERS_TYPES.GET_USERS: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case USERS_TYPES.SET_USERS: {
        return {
          ...state,
          users: payload.data,
          isLoading: false,
        };
      }
    default:
      return state;
  }
};

export default reducer;
