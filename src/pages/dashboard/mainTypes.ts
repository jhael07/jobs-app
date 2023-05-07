export type Job = {
  title: string;
  img_url: null | string;
  categories: null | string | any;
  status: string;
  company: null | string;
};

export type ContainerProps = {
  fullname: string[];
  jobsInfo: Job[];
};
