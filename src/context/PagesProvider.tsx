import { useState } from "react";
import { PagesContextProps } from "./contextTypes";
import { PagesContext } from "./PagesContext";

// * PAGE CONTEXT PROVIDER
const PageProvider = ({ children }: PagesContextProps) => {
  const [session, setSession] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const values = { session, setSession, loading, setLoading };

  return <PagesContext.Provider value={{ ...values }}>{children}</PagesContext.Provider>;
};

export default PageProvider;
