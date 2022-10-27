import { CREATE_USER, LOGGED_USER } from "./../const";

export const addUser = (data) => {
  return {
    type: CREATE_USER,
    payload: data,
  };
};

export const loggedUser = (data) => {
  return {
    type: LOGGED_USER,
    payload: data,
  };
};
