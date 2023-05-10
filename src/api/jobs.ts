import { API_URL, headers } from "./db";
import axios from "axios";
import Swal from "sweetalert2";
import "../components/spinner/spinner.css";

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
export const updateJob = async (id: string, updateJob: object) => {
  try {
    const { data } = await axios.patch(`${API_URL}jobs?id=eq.${id}`, updateJob, { headers });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteJob = async (id: string | null) => {
  try {
    const message = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#31cd8e",
      confirmButtonText: "Yes, delete it!",
    });

    if (message.isConfirmed) {
      await axios.delete(`${API_URL}jobs?id=eq.${id}`, { headers });
      Swal.fire("Deleted!", "The job has been deleted.", "success");
      setTimeout(() => window.location.reload(), 1000);
    }
  } catch (err: any) {
    Swal.fire("Error", err, "error");
    console.error(err.message);
  }
};
