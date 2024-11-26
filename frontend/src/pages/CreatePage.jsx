import "./Create.css";
import { useState } from "react";
import { useProductStore } from "../store/Product";
const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const { createProduct } = useProductStore();
  const changeHandler = async () => {
    const { success, message } = await createProduct(newProduct);
    console.log(`Success : `, success);
    console.log(`Message : `, message);

    setNewProduct({
      name: "",
      price: "",
      image: "",
    });
  };

  return (
    <>
      <div className="createContainer">
        <h1 className="createtitle">Create New Product</h1>
        <form action="#" onSubmit={submitHandler}>
          <input
            type="text"
            autoComplete="off"
            placeholder="Product Name"
            name="name"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Price"
            name="price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
          />
          <input
            type="text"
            autoComplete="off"
            placeholder="Image URL"
            name="image"
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
          />
          <button type="submit" className="btn" onClick={changeHandler}>
            Add Product
          </button>
        </form>
      </div>
    </>
  );
};
export default CreatePage;
