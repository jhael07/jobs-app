import { useState } from "react";
import { ModalContext } from "./ModalContext";
import { ModalContextProps } from "./contextTypes";

// * PAGE CONTEXT PROVIDER
const ModalProvider = ({ children }: ModalContextProps) => {
  const [enableModalAddJob, setEnableModalAddJob] = useState<boolean>(false);

  const values = { enableModalAddJob, setEnableModalAddJob };

  return <ModalContext.Provider value={{ ...values }}>{children}</ModalContext.Provider>;
};

export default ModalProvider;
