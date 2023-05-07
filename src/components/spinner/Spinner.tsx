import "./spinner.css";

type Props = {
  message: string;
};

const Spinner = ({ message }: Props) => {
  return (
    <div className="z-50 absolute grid shadow-lg ml-12 mt-24 border m-auto bg-white w-[300px] h-[180px] items-center  justify-center p-3 rounded">
      <div className="sk-chase  m-auto justify-center">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
      <h2>{message}</h2>
    </div>
  );
};

export default Spinner;
