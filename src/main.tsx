import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import PageProvider from "./context/PagesProvider";

const root = document.querySelector("#root");

if (root)
  ReactDOM.createRoot(root).render(
    <PageProvider>
      <App />
    </PageProvider>
  );
