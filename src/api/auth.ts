import { API_URL, headers } from "./db";
import axios from "axios";

interface User {
  username: string;
  password: string;
}

export const authUser = async (username: string, password: string) => {
  try {
    const { data: credentials } = await axios.get(`${API_URL}credentials`, { headers });

    const match = credentials.find(
      (user: User) => username === user.username && password === user.password
    );

    const { data: personalInfo } = await axios.get(
      `${API_URL}user_information?credential_id=eq.${match.id}&select=name,lastname`,
      { headers }
    );

    localStorage.setItem(
      "user",
      JSON.stringify({ ...personalInfo[0], username: match.username })
    );

    return match ? true : false;
  } catch (err: any) {
    // console.log(err);
    return;
  }
};
