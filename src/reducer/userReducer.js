import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import { updateCoderStatus } from "../actions";

const initialState = {
  name: "shivam",
  age: 14,
  status: "coder",
};

// export default (state = initialState, action) => {
//   if (action.type == "UPDATE_AGE") {
//     return { ...state, age: action.payload };
//   }
//   return state;
// };

// export default createReducer(initialState, (builder) => {
//   builder.addCase("UPDATE_AGE", (state, action) => {
//     state.age = action.payload;
//   });
//   builder.addCase("UPDATE_NAME", (state, action) => {
//     state.name = action.payload;
//   });
//   builder.addCase(updateCoderStatus, (state, action) => {
//     state.status = action.payload;
//   });
// });

export const fetchUserNameAsync = createAsyncThunk(
  "fetchUser",
  async (params, { rejectWithValue }) => {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let result = await response?.json();
      return result[0]?.name;
    } catch (error) {
      return rejectWithValue("Try again");
    }
  }
);

const userReducer = createSlice({
  name: "person",
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateAge: (state, action) => {
      state.age = action.payload;
    },
    updateStatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: {
    [fetchUserNameAsync.fulfilled]: (state, action) => {
      state.name = action.payload;
    },
    [fetchUserNameAsync.pending]: (state, action) => {
      state.name = "Loading!";
    },
    [fetchUserNameAsync.rejected]: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { updateName, updateAge, updateStatus } = userReducer.actions;

export default userReducer.reducer;
