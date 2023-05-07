import { PagesContext } from "./context/PagesContext";
import Login from "./pages/Login";
import Main from "./pages/dashboard/Main";
import { useContext } from "react";

const App = () => {
  // * Pages context
  const { session} = useContext(PagesContext);
  return <>{!session ? <Login /> : <Main />}</>;
};

export default App;
