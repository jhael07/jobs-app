import { useContext, useState, useEffect } from "react";
import JobsCard from "../../components/cards/JobsCard";
import AddJob from "../../components/modals/AddJob";
import { ModalContext } from "../../context/ModalContext";
import { ContainerProps } from "./mainTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Pagination from "../../components/pagination/Pagination";

const Container = (props: ContainerProps) => {
  const { jobsInfo, fullname } = props;
  const { setEnableModalAddJob } = useContext(ModalContext);
  const [jobs, setJobs] = useState(jobsInfo);

  useEffect(() => {
    setJobs(jobsInfo);
  }, [jobsInfo]);

  const showAddJobsModal = () => {
    setEnableModalAddJob(true);
  };

  const handleSearch = async (searchByWord: string) => {
    const search = jobsInfo.filter((job) =>
      job.company?.toLowerCase().includes(searchByWord.toLowerCase())
    );
    setJobs(search);
  };

  // * pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState<number>(4);

  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;
  const currentCards = jobs.slice(firstCardIndex, lastCardIndex);
  return (
    <>
      <AddJob />
      <div className="p-2 mt-2">
        <h2 className="user-greeting">{`Hi, ${fullname[0]} ${fullname[1]} `}</h2>
        <div className="options">
          <input
            type="text"
            placeholder="Search by the company title..."
            className="search-bar"
            onChange={(e) => handleSearch(e.target.value)}
          />
          <button onClick={showAddJobsModal} className="btn-green w-1/12">
            Add Job
          </button>
        </div>
        <div className="mx-2 mt-5">
          <div
            className={`grid ${
              jobs.length < 2 ? "" : "grid-cols-2"
            } bg-gray-50 border-2 p-5 gap-y-10 gap-x-1 columns`}
          >
            {jobs.length < 1 && (
              <>
                <FontAwesomeIcon icon={faClose} className="m-auto text-7xl text-gray-500" />
                <h1 className="m-auto text-4xl text-gray-500">There is not jobs yet.</h1>
              </>
            )}
            {currentCards.map((job, index) => {
              return (
                <div key={index}>
                  <JobsCard job={job} />
                </div>
              );
            })}
          </div>
          <Pagination
            cardsPerPage={cardsPerPage}
            totalCards={jobs.length}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
};

export default Container;
