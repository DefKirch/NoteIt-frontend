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
    addTask: (state, action) => {
      state.project.tasks = [...state.project.tasks, action.payload];
    },
    changeTaskStatus: (state, action) => {
      // state.project.task[action.payload]
    },
  },
});

export const { setProject, setMyProjects, addTask, changeTaskStatus } =
  projectSlice.actions;

export default projectSlice.reducer;
