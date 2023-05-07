import "./modal.css";

const CloseModal = ({ closeFn }: any) => {
  return (
    <button onClick={closeFn} className="btn-close group" style={{ borderRadius: "100%" }}>
      <span className="absolute top-0 scale-125 group-hover:scale-90">&times;</span>
    </button>
  );
};

export default CloseModal;
