import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  project: null,
  myProjects: null,
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setProject: (state, action) => {
      state.project = action.payload;
    },
    setMyProjects: (state, action) => {
      state.myProjects = action.payload;
    },
  },
});

export const { setProject, setMyProjects } = projectSlice.actions;

export default projectSlice.reducer;
