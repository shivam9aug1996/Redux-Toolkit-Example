import { createAction } from "@reduxjs/toolkit";

// export const updateCoderStatus = (status) => {
//   return {
//     type: "UPDATE_STATUS",
//     payload: status,
//   };
// };

export const updateCoderStatus = createAction("UPDATE_STATUS");

export const updateNameAsync = () => {
  return async (dispatch) => {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let result = await res?.json();
    dispatch({ type: "UPDATE_NAME", payload: result[0].name });
  };
};
