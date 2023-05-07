import { authUser } from "../../api/auth";
import Swal from "sweetalert2";

export const loginUser = async (
  e: any,
  setLoading: any,
  username: string,
  password: string,
  setSession: any
): Promise<void> => {
  e.preventDefault();
  setLoading(true); // activating the loading spinner
  const res = await authUser(username, password); // * checking if the information matches
  setLoading(false); // disabling the spinner

  if (!res) Swal.fire("Error", "Username or password is incorrect.", "error");
  else {
    localStorage.setItem("session", String(true));
    setSession(true);
  }
};
