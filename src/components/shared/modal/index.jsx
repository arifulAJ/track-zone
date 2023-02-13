import { useState } from "react";
import Button from "../../ui/Button.styled";
import FormOfModal from "../../ui/Form/Form";
import { ModalMain, ModalText } from "../../ui/modal.style";

const Modal = () => {
  const [model, setModal] = useState(false);

  const handleClick = () => {
    setModal(!model);
  };
  const closeModel = (model) => {
    if (model) {
      console.log(!model);
      setModal(!model);
    }
  };
  return (
    <div>
      <Button onClick={handleClick}> modal button</Button>
      {model && (
        <div>
          <ModalMain onClick={() => closeModel(model)}>
            {" "}
            <ModalText className="text">
              <input type="text" placeholder="name" />
              <select name="ti" id="ti">
                <option value="ti">mp</option>
              </select>
              <h2>this is the clock</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Itaque, magnam veniam aspernatur nostrum laudantium molestias
              </p>
              <button onClick={handleClick}>close</button>
            </ModalText>
          </ModalMain>
        </div>
      )}
    </div>
  );
};
export default Modal;
{
  /* <FormOfModal
 { onChange, onSubmit, formValues, title, edit }
        onSubmit={onSubmit}
        onChange={onChange}
        formValues={formValues}
        title={title}
        edit={edit}
      /> */
}
