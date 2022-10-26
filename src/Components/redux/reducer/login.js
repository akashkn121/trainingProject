import { CREATE_USER, GET_USER } from "./../const";

const initialState = {
  userLists: [],
};

const loginReducer = (state = initialState, action) => {
  const actionType = action.type;

  switch (actionType) {
    case CREATE_USER:
      const data = action.payload;
      return (state.userLists = [...state.userLists, data]);

    case GET_USER:
      return state.userLists;

    default:
      return state;
  }
};

export default loginReducer;

export const getUserList = (state) => {
  return state.loginReducer.userLists;
};
