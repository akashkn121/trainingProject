import { CREATE_USER, LOGGED_USER } from "./../const";

const initialState = {
  userLists: [],
  loggedUser: [],
};

const loginReducer = (state = initialState, action) => {
  const actionType = action.type;
  const data = action.payload;

  switch (actionType) {
    case CREATE_USER:
      return { userLists: [...state.userLists, data] };

    case LOGGED_USER:
      return { loggedUser: data[0] };

    default:
      return state;
  }
};

export default loginReducer;

export const getUserList = (state) => {
  return state.loginReducer.userLists;
};

export const getloggedUser = (state) => {
  return state.loginReducer.loggedUser;
};
