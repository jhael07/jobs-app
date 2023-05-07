import { useContext, useEffect, useState } from "react";
import { PagesContext } from "../../context/PagesContext";
import { getAllJobs } from "../../api/jobs";
import { Job } from "./mainTypes";
import Login from "../Login";
import Nav from "../../components/nav/Nav";
import Container from "./Container";
import "./main.css";
import ModalProvider from "../../context/ModalProvider";
import Spinner from "../../components/spinner/Spinner";

const Main = () => {
  const { session } = useContext(PagesContext);
  const [fullname, setFullname] = useState<string[]>([]);
  const [jobsInfo, setJobsInfo] = useState<Job[]>([]);
  const [isLoading, setLoading] = useState(false);
  const containerProps = { fullname, jobsInfo };

  useEffect(() => {
    (async () => {
      setLoading(true);
      setJobsInfo(await getAllJobs());
      setLoading(false);
    })();
    const userInformationString: string | null = localStorage.getItem("user");

    if (userInformationString !== null) {
      const { name, lastname } = JSON.parse(userInformationString);
      setFullname([name, lastname]);
    }
  }, []);
  console.log(isLoading);
  return (
    <>
      {session ? (
        <div className="container">
          <Nav />
          <ModalProvider>
            {isLoading ? (
              <div className="m-auto w-full flex justify-center">
                <Spinner message="The jobs are loading" />
              </div>
            ) : null}
            <Container {...containerProps} />
          </ModalProvider>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Main;
