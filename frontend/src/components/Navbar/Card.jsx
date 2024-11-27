import { IoRemoveCircleSharp } from "react-icons/io5";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import "./Card.css";
import { useProductStore } from "../../store/Product";
const Card = ({ product }) => {
  const { removeProduct } = useProductStore();

  const deleteHandler = async (pid) => {
    const { success, error } = await removeProduct(pid);
    console.log(`suceess : `, success);
    console.log(`error : `, error);
  };

  // const updateHandler = async (pid) => {
  //   const { success, error } = await updateProduct(pid);
  //   console.log(`suceess : `, success);
  //   console.log(`error : `, error);
  // };
  return (
    <div className="productcard">
      <img src={product.image} alt={product.name} className="productImage" />
      <h2 className="productName">{product.name}</h2>
      <h3 className="productPrice">₹{product.price}</h3>
      <div className="btncontainer">
        <MdOutlineDriveFileRenameOutline
          className="updatebtn"
          // onClick={() => updateHandler(product._id)}
        />
        <IoRemoveCircleSharp
          className="removebtn"
          onClick={() => deleteHandler(product._id)}
        />
      </div>
    </div>
  );
};
export default Card;
