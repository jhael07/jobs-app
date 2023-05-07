import { ModalContext } from "../../context/ModalContext";
import { useContext } from "react";
import CloseModal from "./CloseModal";
import { Status } from "../../pages/enums";
import { useState } from "react";
import { createJob } from "../../api/jobs";
import Spinner from "../spinner/Spinner";

const AddJob = () => {
  const { enableModalAddJob, setEnableModalAddJob } = useContext(ModalContext);
  const closeModal = () => setEnableModalAddJob(false);
  const [isLoading, setIsLoading] = useState(false);

  const [newJob, setNewJob] = useState({
    title: "",
    company: "",
    img_url: "",
    categories: [],
    status: "",
  });

  const handleChange = (e: any) => {
    console.log(e.target.name);
    setNewJob({ ...newJob, [e.target.name]: e.target.value });
  };

  const handleChangeCategory = (e: any) => {
    setNewJob({ ...newJob, categories: e.target.value.split(",") });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setIsLoading(true);
    await createJob(newJob);
    setIsLoading(false);
    window.location.reload();
  };

  console.log(newJob);

  return (
    <div className={`${enableModalAddJob ? "visible" : "hidden"} modal__container`}>
      <div className="modal__form-container">
        <CloseModal closeFn={closeModal} />
        <form className="modal__form">
          {isLoading && <Spinner message="Adding the job..." />}
          <div className="mx-2">
            <label className="modal__form-label">Job's title:</label>
            <input
              type="text"
              placeholder="Type the position"
              className="modal__form-input"
              name="title"
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
              onChange={handleChangeCategory}
            />
          </div>

          <div className="absolute top-[17.2rem] grid w-[70%] mx-2">
            <label className="modal__form-label"> Status:</label>
            <select className="mt-3 text-black p-2" name="status" onChange={handleChange}>
              <option>Select the status</option>
              <option>{Status.PENDING}</option>
              <option>{Status.INTERVIEW}</option>
              <option>{Status.ACCEPTED}</option>
              <option>{Status.REJECT}</option>
            </select>
          </div>

          <button onClick={handleSubmit} className="btn-green modal__form-btn">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
