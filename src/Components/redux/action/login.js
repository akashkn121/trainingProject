import { CREATE_USER, GET_USER } from "./../const";

export const addUser = (data) => {
  return {
    type: CREATE_USER,
    payload: data,
  };
};

export const getUser = () => {
  return {
    type: GET_USER,
    payload: null,
  };
};
