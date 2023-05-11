import { useContext, useEffect, useState } from "react";
import { PagesContext } from "../context/PagesContext";
import Spinner from "../components/spinner/Spinner";
import logo from "../asset/img/logo.png";
import Main from "./dashboard/Main";
import { loginUser } from "./login/loginUser";
import "./login/login.css";

function Login() {
  // * Pages context
  const { session, setSession, setLoading, loading } = useContext(PagesContext);

  useEffect(() => {
    setSession(Boolean(localStorage.getItem("session")));
  }, []);

  // * STATES FOR THE LOGIN
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });

  // * On change handle the inputs information
  const handleChange = (e: any) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  const loginUserFn = (e: any) => {
    loginUser(e, setLoading, loginInfo.username, loginInfo.password, setSession);
  };

  return (
    <>
      {session ? (
        <Main />
      ) : (
        <div className="bg-general">
          <div className="login__container">
            <div className="login__header">Login</div>

            {/* THIS IS THE SPINNER THAT LOADS WHEN WAITING FOR THE API */}
            {loading && <Spinner message="Signing in" />}

            <form className="login__form">
              <img src={logo} className="w-2/6" />

              <input
                type="text"
                placeholder="username"
                name="username"
                className="input-general"
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input-general"
                onChange={handleChange}
              />
              <button onClick={loginUserFn} className="btn-green w-2/4">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
