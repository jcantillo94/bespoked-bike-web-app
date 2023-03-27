import axios from 'axios';


const customersApi = axios.create({
  baseURL: "http://localhost:5214",
});

export const getCustomers = async () => {
  try {
    console.log("getCustomers");
    const { data } = await customersApi.get('/api/customers');
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return []; // or null, or an empty object, depending on what you want to do
  }
};

export const updateCustomers = async (customerId, customerData) => {
  try {
    console.log("update " + customers);
    console.log(customerData);
    const response = await customersApi.put(`/api/customers/${customerId}`, customerData);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.response.data.message || 'Unable to update customer');
  }
};
