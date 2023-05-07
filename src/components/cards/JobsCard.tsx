import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { JobType } from "./jobsCardTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Job {
  job: JobType;
}
const JobsCard = (props: Job) => {
  const { job } = props;
  return (
    <>
      <div className="w-5/6 p-3 rounded-lg m-auto  border-2 shadow-md bg-white relative group ">
        <div
          className="absolute opacity-0 right-5 flex  gap-3 top-[-0.6rem] group-hover:opacity-100  group-hover:top-0"
          style={{ transitionDuration: ".3s" }}
        >
          <button className="p-3 rounded-b bg-blue-300  flex justify-center items-center  text-blue-700 ">
            <FontAwesomeIcon icon={faPencil} />
          </button>
          <button className="p-3 rounded-b bg-red-500 hover:bg-red-600  justify-center  flex text-white">
            {" "}
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
            <b>Status:</b> <span className="bg-white p-1 rounded">{job.status}</span>
          </h1>
        </div>

        <div className="flex gap-2 items-center mt-4 w-full">
          <b>Categories:</b>
          <div className="w-full flex gap-3">
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
