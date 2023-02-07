import { useState } from "react";
import Button from "../../ui/Button.styled";
import ClockFrom from "../clock-form";

const ClockAction = ({ local = false, clock, updateClock }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isCreate, setIsCreate] = useState(false);

  // const handelChange = (e) => {
  //   let { value, name } = e.target;

  //   if (name === "offset") {
  //     value = Number(value) * 60;
  //   }
  //   updateClock({
  //     [name]: value,
  //   });
  // };
  const handelClock = (values) => {
    console.log(values);
  };
  return (
    <div>
      <Button color="#e2aa50" onClick={() => setIsEdit(!isEdit)}>
        Edit
      </Button>
      {local ? (
        <Button color="#4facc4" onClick={() => setIsCreate(!isCreate)}>
          Create
        </Button>
      ) : (
        <Button color="#E53D30">Delete</Button>
      )}
      {isEdit && (
        <>
          <h3>Edit Clock</h3>
          <ClockFrom
            values={clock}
            handelClock={updateClock}
            title={!local}
            edit={true}
          />
        </>
      )}
      {isCreate && (
        <>
          <h3>Create Clock</h3>
          <ClockFrom handelClock={handelClock} />
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
