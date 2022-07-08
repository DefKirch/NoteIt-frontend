import axios from "axios";
import { apiUrl } from "../../config/constants";
import { selectToken } from "../user/selectors";
import { setProject, setMyProjects } from "./slice";

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

export const addNewTask = (status) => async (dispatch, getState) => {
  try {
    console.log("Status:", status);
  } catch (e) {
    console.log(e.message);
  }
};
