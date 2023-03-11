import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCoderStatus, updateNameAsync } from "../actions";
import {
  fetchUserNameAsync,
  updateAge,
  updateName,
  updateStatus,
} from "../reducer/userReducer";

const Profile = () => {
  let { age, name, status } = useSelector((state) => {
    return state;
  });
  const dispatch = useDispatch();
  const changeAge = () => {
    //dispatch({ type: "UPDATE_AGE", payload: 40 });
    dispatch(updateAge(5));
  };
  const changeName = async () => {
    // let res = await fetch("https://jsonplaceholder.typicode.com/users");
    // let result = await res?.json();
    // dispatch({ type: "UPDATE_NAME", payload: result[0].name });
    // dispatch(updateNameAsync());
    // dispatch(updateName("hi"));
    dispatch(fetchUserNameAsync());
  };
  const changeStatus = () => {
    // dispatch(updateCoderStatus("developer"));
    dispatch(updateStatus("developer"));
  };
  return (
    <div>
      <h1>name is {name}</h1>
      <h1>age is {age}</h1>
      <h1>status is {status}</h1>
      <button onClick={() => changeAge()}>update age</button>
      <button onClick={() => changeName()}>update name</button>
      <button onClick={() => changeStatus()}>update status</button>
    </div>
  );
};

export default Profile;
