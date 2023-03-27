import axios from 'axios';


const salesApi = axios.create({
  baseURL: "http://localhost:5214",
});

export const getSales = async () => {
  try {
    console.log("getSales");
    const { data } = await salesApi.get('/api/sales');
    console.log(data);
    const jsonData = (data.map(item => {
      return {
        ...item,
        saleDate: new Date(item.saleDate).toLocaleDateString()
      }
    }));
    return jsonData;
  } catch (error) {
    console.error('Error fetching sales:', error);
    return []; // or null, or an empty object, depending on what you want to do
  }
};

export const updateSales = async (salesId, salesData) => {
  try {
    console.log("update " + salesId);
    console.log(salesData);
    const response = await salesApi.put(`/api/sales/${salesId}`, salesData);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.response.data.message || 'Unable to update sales');
  }
};

export const postSales = async (salesData) => {
  try {
    console.log("post " + salesId);
    console.log(salesData);
    const response = await salesApi.post(`/api/sales`, salesData);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.response.data.message || 'Unable to post sales');
  }
};
