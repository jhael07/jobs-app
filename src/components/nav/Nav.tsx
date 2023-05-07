import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { PagesContext } from "../../context/PagesContext";
import "./nav.css";

const Nav = () => {
  const { setSession } = useContext(PagesContext);

  const logoutFn = () => {
    localStorage.removeItem("session");
    localStorage.removeItem("user");
    setSession(false);
  };

  return (
    <nav className="nav__container">
      <h1>Jobs</h1>
      <ul>
        <a href="#" className="nav__items">
          Settings
        </a>
        <a onClick={logoutFn} className="nav__items-logout">
          <FontAwesomeIcon icon={faPowerOff} size="xl" className="mx-3" />
        </a>
      </ul>
    </nav>
  );
};

export default Nav;
