import { createContext } from "react";
import { PagesContextType } from "./contextTypes";

// * CREATING THE PAGES CONTEXT
export const PagesContext = createContext<PagesContextType>({
  session: false,
  setSession: () => {},
  loading: false,
  setLoading: () => {},
});
