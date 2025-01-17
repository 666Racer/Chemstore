import { createSlice } from "@reduxjs/toolkit";

const url = "../data/dataCompounds.json";

export async function fetchProducts(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

function findProductInData(array, productId) {
  const addedProduct = array.find((product) => product.id === productId);
  return addedProduct;
}

function haveProductInStore(productId) {
  let isInStore = false;
  const productsLS = JSON.parse(localStorage.getItem("shopping_card"));
  productsLS?.forEach((product) => {
    if (product.id === productId) {
      isInStore = true;
      return isInStore;
    }
  });
  return isInStore;
}

export const dataCompounds = await fetchProducts(url);

const initialState = {
  products: JSON.parse(localStorage.getItem("shopping_card") || "[]"),
};

export const saveToLocalStorage = (products) => {
  localStorage.setItem("shopping_card", JSON.stringify(products));
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const newProduct = findProductInData(dataCompounds, action.payload);
      if (haveProductInStore(newProduct.id)) {
        return;
      }
      const products = [...state.products, newProduct];
      saveToLocalStorage(products);
      state.products = products;
    },
    deleteProduct: (state, action) => {
      const products = state.products.filter(
        (product) => product.id !== action.payload
      );
      saveToLocalStorage(products);
      state.products = products;
    },
    setQuantity: (state, action) => {
      const product = state.products.find(
        (item) => item.id == action.payload.id
      );
      if (product) {
        product.quantity = action.payload.value;
      }
      saveToLocalStorage(state.products);
    },
    clearProducts: (state) => {
      state.products = [];
      localStorage.clear();
    },
  },
});

export const { addProduct, deleteProduct, setQuantity, clearProducts } = productSlice.actions;
export default productSlice.reducer;
