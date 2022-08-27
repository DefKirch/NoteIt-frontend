import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  project: null,
  myProjects: null,
  allUsersWithId: null,
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
    updateTaskInfo: (state, action) => {
      // title, description, id
      state.project.tasks.find((task) => task.id === action.payload.id).title =
        action.payload.title;
      state.project.tasks.find(
        (task) => task.id === action.payload.id
      ).description = action.payload.description;
    },
    changeTaskStatus: (state, action) => {
      state.project.tasks.find((task) => task.id === action.payload.id).status =
        action.payload.status;
    },
    deleteOneTask: (state, action) => {
      const updatedArray = [...state.project.tasks].filter(
        (task) => task.id !== action.payload
      );
      state.project.tasks = updatedArray;
    },
    saveAllUsersWithId: (state, action) => {
      state.allUsersWithId = action.payload;
    },
  },
});

export const {
  setProject,
  setMyProjects,
  addTask,
  changeTaskStatus,
  deleteOneTask,
  updateTaskInfo,
  saveAllUsersWithId,
} = projectSlice.actions;

export default projectSlice.reducer;
