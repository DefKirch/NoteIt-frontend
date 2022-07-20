import { createSlice, current } from "@reduxjs/toolkit";

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
      const arrayToUpdate = [...state.project.tasks];
      arrayToUpdate.map((task) =>
        task.id === action.payload.id
          ? {
              ...task,
              status: action.payload.status,
            }
          : task
      );
      state.project.tasks = arrayToUpdate;
      // console.log(state.project.tasks);
    },
    deleteOneTask: (state, action) => {
      const updatedArray = [...state.project.tasks].filter(
        (task) => task.id !== action.payload
      );
      state.project.tasks = updatedArray;
    },
  },
});

export const {
  setProject,
  setMyProjects,
  addTask,
  changeTaskStatus,
  deleteOneTask,
} = projectSlice.actions;

export default projectSlice.reducer;
