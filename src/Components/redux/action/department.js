import { DEPARTMENT_DETAILS, EDIT_DATA } from "../const";

export const addDept = (data) => {
  return {
    type: DEPARTMENT_DETAILS,
    payload: data,
  };
};

export const editData = (data) => {
  return {
    type: EDIT_DATA,
    payload: data,
  };
};
