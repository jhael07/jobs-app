import { Status } from "../../pages/enums";

const Select = (props: any) => {
  const { handleChange, value } = props;
  return (
    <select
      className="mt-3 text-black p-2"
      name="status"
      onChange={handleChange}
      value={value}
    >
      <option>Select the status</option>
      <option>{Status.PENDING}</option>
      <option>{Status.INTERVIEW}</option>
      <option>{Status.ACCEPTED}</option>
      <option>{Status.REJECT}</option>
    </select>
  );
};

export default Select;
