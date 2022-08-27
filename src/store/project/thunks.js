import axios from "axios";
import { apiUrl } from "../../config/constants";
import { selectToken } from "../user/selectors";
import {
  setProject,
  setMyProjects,
  addTask,
  changeTaskStatus,
  deleteOneTask,
  updateTaskInfo,
  saveAllUsersWithId,
} from "./slice";

export const fetchMyProjects = () => async (dispatch, getState) => {
  const token = selectToken(getState());
  try {
    const response = await axios.get(`${apiUrl}/projects/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    // console.log("Response:", response.data);
    dispatch(setMyProjects(response.data));
  } catch (e) {
    console.log(e.message);
  }
};

export const fetchProject = (id) => async (dispatch, getState) => {
  const token = selectToken(getState());
  try {
    const response = await axios.get(`${apiUrl}/projects/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    // console.log("Response:", response.data);
    dispatch(setProject(response.data));
  } catch (e) {
    console.log(e.message);
  }
};

export const createNewProject =
  (name, description, navigate) => async (dispatch, getState) => {
    const token = selectToken(getState());
    try {
      const response = await axios.post(
        `${apiUrl}/projects`,
        { name, description },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      navigate(`/project/${response.data.newProject.id}`);
    } catch (e) {
      console.log(e.message);
    }
  };

export const addNewTask =
  (status, title, pId, description) => async (dispatch, getState) => {
    const token = selectToken(getState());
    try {
      const response = await axios.post(
        `${apiUrl}/projects/task/${pId}`,
        {
          status,
          title,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(addTask(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };

export const updateTask =
  (title, description, id, status) => async (dispatch, getState) => {
    const token = selectToken(getState());
    try {
      console.log("Title", title);
      const response = await axios.patch(
        `${apiUrl}/projects/task/${id}`,
        {
          title,
          description,
          status,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response.data.message);
      dispatch(updateTaskInfo({ title, description, id }));
    } catch (e) {
      console.log(e.message);
    }
  };

export const updateTaskStatus = (id, status) => async (dispatch, getState) => {
  const token = selectToken(getState());
  try {
    console.log(id, status);
    const response = await axios.patch(
      `${apiUrl}/projects/task/${id}`,
      {
        status,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    dispatch(changeTaskStatus({ id, status }));
    console.log(response.data.message);
  } catch (e) {
    console.log(e.message);
  }
};

export const deleteTask = (id) => async (dispatch, getState) => {
  const token = selectToken(getState());
  try {
    const response = await axios.delete(`${apiUrl}/projects/task/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response.data.message);
    dispatch(deleteOneTask(id));
  } catch (e) {
    console.log(e.message);
  }
};

export const fetchAllUsersEmailsAndId = () => async (dispatch, getState) => {
  const token = selectToken(getState());
  try {
    const response = await axios.get(`${apiUrl}/projects/allUsers`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(response.data);
    dispatch(saveAllUsersWithId(response.data));
  } catch (e) {
    console.log(e.message);
  }
};

export const addNewUserToProject = (pId, uId) => async (dispatch, getState) => {
  const token = selectToken(getState());
  try {
    console.log("pId: ", pId, " uId: ", uId);
    const response = await axios.post(
      `${apiUrl}/projects/newUserProject`,
      {
        pId,
        uId,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log(response.message);
  } catch (e) {
    console.log(e.message);
  }
};
