import { create } from "zustand";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.image || !newProduct.price) {
      toast.error("Please fill all the fields!");
      return { success: false, message: "Please fill all the fields" };
    }

    try {
      const res = await fetch("/api/products/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      if (!res.ok) {
        const errorMessage = `Server error: ${res.statusText}`;
        toast.error(errorMessage);
        return { success: false, message: `Server error: ${errorMessage}` };
      }

      const data = await res.json();

      if (!data.success) {
        toast.error(data.message || "Failed to create product");
        return {
          success: false,
          message: data.message || "Failed to create product",
        };
      }

      set((state) => ({ products: [...state.products, data.data] }));
      toast.success("Product created successfully!");

      return {
        success: true,
        message: "Product created successfully",
        product: data.data,
      };
    } catch (error) {
      console.error("Error creating product:", error);
      toast.error(error.message);
      return { success: false, message: "An unexpected error occurred" };
    }
  },
  fetchProduct: async () => {
    try {
      const res = await fetch("/api/products/get");
      const data = await res.json();

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Error fetching products:", errorText);
        toast.error("Failed to fetch products");
        return { success: false, message: "Failed to fetch products" };
      }

      if (res.ok) {
        set({ products: data.data });
        toast.success("Fetched products successfully");
      } else {
        toast.error(data.message || "Failed to fetch products");
      }
    } catch (err) {
      console.error("Error fetching products:", err);
      toast.error("Failed to fetch products: " + (err.message || err));
    }
  },

  removeProduct: async (pid) => {
    try {
      const res = await fetch(`/api/products/delete/${pid}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        const errorMessage = `Failed to delete product: ${res.statusText}`;
        toast.error(errorMessage);
        return { success: false, message: errorMessage };
      }

      const data = await res.json();

      if (!data.success) {
        toast.error(data.message || "Product deletion failed");
        return { success: false, message: data.message || "Deletion failed" };
      }

      set((state) => ({
        products: state.products.filter((product) => product._id !== pid),
      }));

      toast.success("Product deleted successfully!");
      return { success: true, message: "Product deleted successfully!" };
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error(`An error occurred: ${error.message || "Unknown error"}`);
      return { success: false, message: error.message || "Unknown error" };
    }
  },

  updateProduct: async (pid, updatedProduct) => {
    try {
      const res = await fetch(`/api/products/update/${pid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      });

      if (!res.ok) {
        const errorMessage = `Failed to update product: ${res.statusText}`;
        toast.error(errorMessage);
        return { success: false, message: errorMessage };
      }
      const data = await res.json();
      if (!data.success) {
        toast.error(data.message || "Product update failed");
        return { success: false, message: data.message || "Update failed" };
      }

      set((state) => ({
        products: state.products.map((product) =>
          product._id === pid ? { ...product, ...updatedProduct } : product
        ),
      }));

      toast.success("Product updated successfully!");
      return { success: true, message: "Product updated successfully!" };
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error(`An error occurred: ${error.message || "Unknown error"}`);
      return { success: false, message: error.message || "Unknown error" };
    }
  },
}));
