import { createContext } from "react";
import { ModalContextType } from "./contextTypes";

// * CREATING THE Modal CONTEXT
export const ModalContext = createContext<ModalContextType>({
  enableModalAddJob: false,
  setEnableModalAddJob: () => {},
});
