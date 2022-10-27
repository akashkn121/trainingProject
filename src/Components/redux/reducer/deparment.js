import { DEPARTMENT_DETAILS, EDIT_DATA } from "../const";

const initialState = {
  departmentList: [],
};

const departmentReducer = (state = initialState, action) => {
  const actionType = action.type;
  const data = action.payload;

  switch (actionType) {
    case DEPARTMENT_DETAILS:
      return {
        departmentList: [...state.departmentList, data],
      };
    case EDIT_DATA:
      return {
        departmentList: data,
      };

    default:
      return state;
  }
};

export default departmentReducer;

export const getDeptList = (state) => {
  return state.departmentReducer.departmentList;
};
