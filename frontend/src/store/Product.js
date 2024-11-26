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
}));
