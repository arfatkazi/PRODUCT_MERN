import "./Create.css";
const CreatePage = () => {
  return (
    <>
      <div className="createContainer">
        <h1>Create New Product</h1>
        <form action="#">
          <input type="text" placeholder="Product Name" />
          <input type="text" placeholder="Price" />
          <input type="text" placeholder="Image URL" />
          <button type="submit" className="btn">
            Add Product
          </button>
        </form>
      </div>
    </>
  );
};
export default CreatePage;
