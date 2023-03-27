import axios from 'axios';


const productsApi = axios.create({
  baseURL: "http://localhost:5214",
});

export const getProducts = async () => {
  try {
    console.log("getProducts");
    const { data } = await productsApi.get('/api/products');
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return []; // or null, or an empty object, depending on what you want to do
  }
};

export const updateProduct = async (productId, productData) => {
  try {
    console.log("update " + productId);
    console.log(productData);
    const response = await productsApi.put(`/api/products/${productId}`, productData);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.response.data.message || 'Unable to update product');
  }
};
