import { useState } from "react";
import { ModalContext } from "./ModalContext";
import { ModalContextProps } from "./contextTypes";

// * PAGE CONTEXT PROVIDER
const ModalProvider = ({ children }: ModalContextProps) => {
  const [enableModalAddJob, setEnableModalAddJob] = useState<boolean>(false);
  const [enableModalEditJob, setEnableModalEditJob] = useState<boolean>(false);
  const [modalId, setModalId] = useState<string>("");

  const values = {
    enableModalAddJob,
    setEnableModalAddJob,
    enableModalEditJob,
    setEnableModalEditJob,
    modalId,
    setModalId,
  };

  return <ModalContext.Provider value={{ ...values }}>{children}</ModalContext.Provider>;
};

export default ModalProvider;
