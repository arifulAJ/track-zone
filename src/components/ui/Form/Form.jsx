import { getOffset, getTimezoneOffset } from "../../../utils/timezone";
import Button from "../Button.styled";
import InputStyled from "../Input.styled";
import SelectStyled from "../Select.styled";
import "./form.css";
const FormOfModal = ({
  onChange,
  onSubmit,
  formValues,
  title,
  edit,
  toggleModalEdit,
  toggleModalCreate,
}) => {
  return (
    <div className="modal">
      {toggleModalEdit ? (
        <div onClick={toggleModalEdit} className="overlay"></div>
      ) : (
        <div onClick={toggleModalCreate} className="overlay"></div>
      )}

      <form className=" modal-content" onSubmit={onSubmit}>
        <div>
          <label htmlFor="title"> Clock Title: </label>
          <br />
          <InputStyled
            type="text"
            id="title"
            value={formValues.title}
            name={"title"}
            disabled={!title}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="timezone"> Select Timezone :</label>
          <br />

          <SelectStyled
            id="timezone"
            onChange={onChange}
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
              <label htmlFor="offset"> Select Offset:</label>
              <br />
              <SelectStyled
                onChange={onChange}
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
        {toggleModalEdit ? (
          <Button
            color="#b33b32"
            onClick={toggleModalEdit}
            className="close-modal"
            style={{ color: "#e9e2e1" }}
          >
            close
          </Button>
        ) : (
          <Button
            style={{ color: "#e9e2e1" }}
            color="#b33b32"
            onClick={toggleModalCreate}
            className="close-modal"
          >
            close
          </Button>
        )}
      </form>
    </div>
  );
};
export default FormOfModal;
