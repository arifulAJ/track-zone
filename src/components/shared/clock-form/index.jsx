/**
 * for local clock title won't be edit
 * to crete a new clock we have to create timezone,title,offset
 * for edit  we will have timezone,title,and offset
 */
// const values={
//     title:'',
//     timezone:"",
//     offset:""
// }

import { useEffect, useState } from "react";

import { TIMEZONE_OFFSET } from "../../../constants/constants";
import { getOffset, getTimezoneOffset } from "../../../utils/timezone";
import Button from "../../ui/Button.styled";
import InputStyled from "../../ui/Input.styled";
import SelectStyled from "../../ui/Select.styled";

const ClockFrom = ({
  values = { title: "", timeZone: "UTC", offset: 0 },
  handelClock,
  title = true,
  edit = false,
}) => {
  const [formValues, SetFormValues] = useState({ ...values });

  useEffect(() => {
    console.log(TIMEZONE_OFFSET[formValues.timeZone]);
    if (TIMEZONE_OFFSET[formValues.timeZone]) {
      SetFormValues((prev) => ({
        ...prev,
        offset: TIMEZONE_OFFSET[formValues.timeZone],
      }));
    }
  }, [formValues.timeZone]);

  const handelChange = (e) => {
    let { value, name } = e.target;

    if (name === "offset") {
      value = Number(value) * 60;
    }

    SetFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    handelClock(formValues);
  };

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <div>
          <label htmlFor="title"> Enter Title: </label>
          <br />
          <InputStyled
            type="text"
            id="title"
            value={formValues.title}
            name={"title"}
            disabled={!title}
            onChange={handelChange}
          />
        </div>
        <div>
          <label htmlFor="timezone"> Enter Timezone :</label>
          <br />

          <SelectStyled
            id="timezone"
            onChange={handelChange}
            name="timeZone"
            value={formValues.timeZone}
          >
            {getTimezoneOffset().map((timezone) => (
              <option key={timezone} value={timezone}>
                {timezone}
              </option>
            ))}
          </SelectStyled>
        </div>
        <div>
          {(formValues.timeZone === "UTC" || formValues.timeZone === "GMT") && (
            <>
              <label htmlFor="offset"> Enter Offset:</label>
              <br />
              <SelectStyled
                onChange={handelChange}
                name="offset"
                value={formValues.offset / 60}
              >
                {getOffset().map((offset) => (
                  <option key={offset} value={offset}>
                    {offset}
                  </option>
                ))}
              </SelectStyled>
            </>
          )}
        </div>

        {edit ? (
          <Button color="#a4a4d1">Update</Button>
        ) : (
          <Button color="#4facc4">Create</Button>
        )}
        {/* <Button color="red">{edit ? "Update" : "Create"}</Button> */}
      </form>
    </div>
  );
};
export default ClockFrom;
