import axios from "axios";
import { apiUrl } from "../../config/constants";
import { setProject } from "./slice";

export const fetchProject = (id) => async (dispatch, getState) => {
  try {
    const response = await axios.get(`${apiUrl}/projects/${id}`);
    console.log("Response:", response.data);
    dispatch(setProject(response.data));
  } catch (e) {
    console.log(e.message);
  }
};
