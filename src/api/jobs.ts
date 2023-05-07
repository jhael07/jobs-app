import { API_URL, headers } from "./db";
import axios from "axios";

export const getAllJobs = async () => {
  try {
    const { data } = await axios.get(`${API_URL}jobs`, { headers });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const createJob = async (newJob: object) => {
  try {
    const { data } = await axios.post(`${API_URL}jobs`, newJob, { headers });
    return data;
  } catch (err) {
    console.log(err);
  }
};
