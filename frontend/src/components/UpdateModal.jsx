import "./Modal.css";
import { RxCross2 } from "react-icons/rx";
const UpdateModal = () => {
  return (
    <>
      <div className="modalContainer">
        <div className="modal-1">
          <h2>update product</h2>
          <RxCross2 className="modalcross" />
        </div>
        <form className="modalform">
          <input
            type="text"
            placeholder="  product"
            autoComplete="off"
            autoCorrect="on"
          />
          <input type="number" placeholder="  price" />
          <input
            type="text"
            placeholder=" image"
            autoComplete="off"
            autoCorrect="on"
          />
        </form>
        <div className="modal3">
          <button className="modalupdate">update</button>
          <button className="modalcancel">cancel</button>
        </div>
      </div>
    </>
  );
};
export default UpdateModal;
