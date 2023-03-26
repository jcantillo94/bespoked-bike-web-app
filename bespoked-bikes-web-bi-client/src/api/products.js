import axios from 'axios';


export function getProducts() {
    return axios.
    get('http://localhost:5214/api/products')
    .then(response => {
    //   setData(response.data);
      console.log(response.data.rows);
      console.log(response.data);
      setRows(response.data.rows);
      setLoading(false);
      setData(response.data)

    }).catch(error => {
        console.log(error);
        setLoading(false);
      });
}
