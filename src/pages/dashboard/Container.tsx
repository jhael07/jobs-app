import JobsCard from "../../components/cards/JobsCard";
import AddJob from "../../components/modals/AddJob";
import { ModalContext } from "../../context/ModalContext";
import { ContainerProps } from "./mainTypes";
import { useContext } from "react";

const Container = (props: ContainerProps) => {
  const { jobsInfo, fullname } = props;
  const { setEnableModalAddJob } = useContext(ModalContext);

  const showAddJobsModal = () => {
    setEnableModalAddJob(true);
  };

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
          />
          <button onClick={showAddJobsModal} className="btn-green w-1/12">
            Add Job
          </button>
        </div>
        <div className="mx-2 mt-5">
          <div
            className={`grid ${
              jobsInfo.length < 2 ? "" : "grid-cols-2"
            } bg-gray-50 border-2 p-5 gap-y-10`}
          >
            {jobsInfo.map((job) => {
              return <JobsCard job={job} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;