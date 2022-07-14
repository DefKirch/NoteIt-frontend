import axios from "axios";
import { apiUrl } from "../../config/constants";
import { selectToken } from "../user/selectors";
import { setProject, setMyProjects, addTask } from "./slice";

export const fetchMyProjects = () => async (dispatch, getState) => {
  const token = selectToken(getState());
  try {
    const response = await axios.get(`${apiUrl}/projects/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log("Response:", response.data);
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
    console.log("Response:", response.data);
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
      // console.log("Response:", response.data.newProject.id);
      navigate(`/project/${response.data.newProject.id}`);
    } catch (e) {
      console.log(e.message);
    }
  };

export const addNewTask =
  (status, title, pId, description) => async (dispatch, getState) => {
    const token = selectToken(getState());
    try {
      // console.log("Status:", status, "Title:", title, "pId:", pId);
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
      console.log(response.data);
      dispatch(addTask(response.data));
    } catch (e) {
      console.log(e.message);
    }
  };

export const updateTask =
  (title, description, id) => async (dispatch, getState) => {
    const token = selectToken(getState());
    try {
      const response = await axios.patch(
        `${apiUrl}/projects/task/${id}`,
        {
          title,
          description,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      dispatch(updateTask(response.data));
      console.log(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };
