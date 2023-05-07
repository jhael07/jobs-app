export type PagesContextType = {
  session: boolean;
  setSession: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export type PagesContextProps = {
  children: React.ReactNode;
};

export type ModalContextType = {
  enableModalAddJob: Boolean;
  setEnableModalAddJob: React.Dispatch<React.SetStateAction<boolean>>;
};

export type ModalContextProps = {
  children: React.ReactNode;
};
