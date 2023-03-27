import axios from 'axios';


const salespersonApi = axios.create({
  baseURL: "http://localhost:5214",
});

export const getSalespersons = async () => {
  try {
    console.log("getSalesperson");
    const { data } = await salespersonApi.get('/api/salespersons');
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return []; // or null, or an empty object, depending on what you want to do
  }
};

export const updateSalesperson = async (salespersonId, salespersonData) => {
  try {
    console.log("update " + salespersonId);
    console.log(salespersonData);
    const response = await salespersonApi.put(`/api/salespersons/${salespersonId}`, salespersonData);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.response.data.message || 'Unable to update salesperson');
  }
};
