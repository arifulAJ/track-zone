import { useState } from "react";
import Button from "../../ui/Button.styled";
import ClockFrom from "../clock-form";
import "./index.css";
const ClockAction = ({
  local = false,
  clock,
  updateClock,
  createClock,
  deleteClock,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isCreate, setIsCreate] = useState(false);

  const handelClock = (values) => {
    createClock(values);
  };
  const toggleModalEdit = () => {
    setIsEdit(!isEdit);
  };
  const toggleModalCreate = () => {
    setIsCreate(!isCreate);
  };

  return (
    <div>
      <Button color="#e2aa50" onClick={toggleModalEdit}>
        Edit
      </Button>
      {local ? (
        <Button color="#4facc4" onClick={toggleModalCreate}>
          Create
        </Button>
      ) : (
        <Button onClick={() => deleteClock(clock.id)} color="#E53D30">
          Delete
        </Button>
      )}
      {isEdit && (
        <div className="">
          <h3 className="text">Edit Clock</h3>
          <ClockFrom
            values={clock}
            handelClock={updateClock}
            title={!local}
            edit={true}
            toggleModalEdit={toggleModalEdit}
            isEdit={isEdit}
          />
        </div>
      )}
      {isCreate && (
        <>
          <h3>Create Clock</h3>
          <ClockFrom
            handelClock={handelClock}
            toggleModalCreate={toggleModalCreate}
          />
        </>
      )}
    </div>
  );
};
export default ClockAction;

{
  /* <div>
<input
  onChange={handelChange}
  type="text"
  name="title"
  value={clock.title}
/>
<select
  onChange={handelChange}
  name="timeZone"
  value={clock.timeZone}
>
  <option value="GMT">GMT</option>
  <option value="EST">EST</option>
  <option value="PST">PST</option>
  <option value="NO">NO</option>
  <option value="HK">HK</option>
</select>
{(clock.timeZone === "UTC" || clock.timeZone === "GMT") && (
  <select
    onChange={handelChange}
    name="offset"
    value={clock.offset / 60}
  >
    {defaultOffsets.map((offset) => (
      <option key={offset} value={offset}>
        {offset}
      </option>
    ))}
  </select>
)}
</div> */
}
