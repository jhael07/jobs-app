import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { JobType } from "./jobsCardTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { deleteJob } from "../../api/jobs";
import EditJob from "../modals/EditJob";
import { ModalContext } from "../../context/ModalContext";
import { useContext } from "react";
import "./jobsCards.css";

interface Job {
  job: JobType;
}

const JobsCard = (props: Job) => {
  const { job } = props;
  const { setEnableModalEditJob, setModalId } = useContext(ModalContext);

  const handleDelete = async (id: null | string) => {
    try {
      await deleteJob(id);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (id: null | string) => {
    setEnableModalEditJob(true);
    if (id) setModalId(id);
  };

  return (
    <>
      <EditJob {...job} />
      <div className="card__container group">
        <div className="card__action group-hover:opacity-100  group-hover:top-0">
          <button className="card__action-edit" onClick={() => handleEdit(job.id)}>
            <FontAwesomeIcon icon={faPencil} />
          </button>
          <button className="card__action-delete" onClick={() => handleDelete(job?.id)}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
        <div className="w-full m-auto flex justify-center items-center  mt-1">
          {job.img_url ? (
            <img src={`${job.img_url}`} className="w-[13rem]" />
          ) : (
            <h1 className="text-3xl text-center items-center">Not image found</h1>
          )}
        </div>

        <h1 className="text-xl font-medium text-center mt-2">{job.title}</h1>
        <div className="flex gap-3">
          <h1 className="mt-5">
            <b>Company:</b> <span className="bg-white p-1 rounded">{job.company}</span>
          </h1>
          <h1 className="mt-5">
            <b>Status:</b>{" "}
            <span
              className={` p-1 px-2 rounded ${
                job.status === "Pending..." && "bg-yellow-200"
              } ${job.status === "Accepted" && "bg-green-300"}
              ${job.status === "Interview" && "bg-cyan-200"}
              ${job.status === "Rejected" && "bg-red-500 text-red-900"}
              `}
            >
              {job.status}
            </span>
          </h1>
        </div>

        <div className="flex gap-2 items-center mt-6 w-full">
          <b>Categories:</b>
          <div className="w-full flex gap-3 items-center">
            {job.categories.map((category: string) => (
              <span className="bg-blue-300 text-blue-900 p-1 px-2 rounded">{category}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobsCard;
