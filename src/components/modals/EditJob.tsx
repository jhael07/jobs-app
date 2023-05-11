import { ModalContext } from "../../context/ModalContext";
import { useContext, useState } from "react";
import CloseModal from "./CloseModal";
import Spinner from "../spinner/Spinner";
import Swal from "sweetalert2";
import Select from "./Select";
import { JobType } from "../cards/jobsCardTypes";
import { updateJob } from "../../api/jobs";

const EditJob = (props: JobType) => {
  const { id, categories, company, img_url, status, title } = props;

  const { enableModalEditJob, setEnableModalEditJob, modalId } = useContext(ModalContext);
  const closeModal = () => setEnableModalEditJob(false);
  const [isLoading, setIsLoading] = useState(false);

  const [newJob, setNewJob] = useState({
    title,
    company,
    img_url,
    categories,
    status,
  });

  const handleChange = (e: any) => {
    setNewJob({ ...newJob, [e.target.name]: e.target.value });
  };

  const handleChangeCategory = (e: any) => {
    setNewJob({ ...newJob, categories: e.target.value.split(",") });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!newJob.title) {
      Swal.fire("Error", "The title cannot be empty", "error");
      return;
    }
    if (!newJob.company) {
      Swal.fire("Error", "The Company field cannot be empty", "error");
      return;
    }
    if (!newJob.img_url) {
      Swal.fire("Error", "The Img field cannot be empty", "error");
      return;
    } else if (!newJob.img_url.includes("http") || !newJob.img_url.includes("https")) {
      Swal.fire("Error", "The Img field needs to be a valid url.", "error");
      return;
    }
    if (!newJob.status) {
      Swal.fire("Error", "The status field cannot be empty", "error");
      return;
    }

    setIsLoading(true);
    if (id) updateJob(id, newJob);
    Swal.fire("Success", "The job has been update", "success");
    setIsLoading(false);
    setTimeout(() => window.location.reload(), 1000);
  };

  return (
    <>
      {id === modalId && (
        <div className={`${enableModalEditJob ? "visible" : "hidden"} modal__container`}>
          <div className="modal__form-container flex justify-center">
            <CloseModal closeFn={closeModal} />
            <h2 className="text-xl text-black absolute">Edit the job's information</h2>
            <form className="modal__form mt-20">
              {isLoading && <Spinner message="Adding the job..." />}
              <div className="mx-2">
                <label className="modal__form-label">Job's title:</label>
                <input
                  type="text"
                  placeholder="Type the position"
                  className="modal__form-input"
                  name="title"
                  value={String(newJob?.title)}
                  onChange={handleChange}
                />
              </div>
              <div className="mx-2">
                <label className="modal__form-label">Company name:</label>
                <input
                  type="text"
                  placeholder="Company Example Inc"
                  name="company"
                  className="modal__form-input"
                  value={String(newJob?.company)}
                  onChange={handleChange}
                />
              </div>

              <div className="mx-2">
                <label className="modal__form-label"> Company Img URL:</label>
                <input
                  type="text"
                  placeholder="https://www.img-url.com"
                  className="modal__form-input"
                  name="img_url"
                  value={String(newJob?.img_url)}
                  onChange={handleChange}
                />
              </div>

              <div className="mx-2">
                <label className="modal__form-label"> Category:</label>
                <input
                  type="text"
                  placeholder="React, Materiul UI, Java, etc..."
                  name="category"
                  className="modal__form-input"
                  value={String(newJob?.categories)}
                  onChange={handleChangeCategory}
                />
              </div>

              <div className="absolute top-[19rem] grid w-[70%] mx-2 ">
                <label className="modal__form-label"> Status:</label>
                <Select handleChange={handleChange} value={String(newJob?.status)} />
              </div>

              <button onClick={handleSubmit} className="btn-green modal__form-btn mt-6">
                Update
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default EditJob;
