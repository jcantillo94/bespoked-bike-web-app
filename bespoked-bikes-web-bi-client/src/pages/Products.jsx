import React, { useState, useEffect} from 'react';
import axios from 'axios';
import ReactDataGrid from 'react-data-grid';
import ProductsTable from '../components/ProductsTable'
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/products'



function Products() {

    // const [data, setData] = useState([]);
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(false);
    const [gridState, setGridState] = useState(rows);

    const { 
      status,
      error,
      data: data,
    } = useQuery({
      queryKey: ["products"],
      queryFn: getProducts,
    })


    // useEffect(() => {
    //   setLoading(true);
    //   axios.get('http://localhost:5214/api/products')
    //     .then(response => {
    //     //   setData(response.data);
    //       console.log(response.data.rows);
    //       console.log(response.data);
    //       setRows(response.data.rows);
    //       setLoading(false);
    //       setData(response.data)

    //     }).catch(error => {
    //         console.log(error);
    //         setLoading(false);
    //       });
    // }, []);

    const columns = [
        { field: 'ProductId', headerName: 'ID', width: 70 },
        { field: 'ProductName', headerName: 'First name', width: 130 },
        { field: 'Manufacturer', headerName: 'Last name', width: 130 },
        { field: 'Style', headerName: 'Style', type: 'number', width: 90 },
        { field: 'PurchasePrice', headerName: 'Purchase Price', width: 200 },
        { field: 'SalePrice', headerName: 'Sale Price', width: 130 },
        { field: 'Qty', headerName: 'Quantity', type: 'number', width: 90 },
        { field: 'Onhand', headerName: 'On-hand', width: 200 },
        { field: 'CommissionPct', headerName: 'Commission %', width: 200 },
      ];

    
  return (
    <div>
      {/* Add your content here */}
      {/* <ul>
        {data.map((item) => (
          <li key={item.ProductId}>{item.ProductName}</li>
        ))}
      </ul> */}
      {/* <ReactDataGrid
      columns={columns}
      rowGetter={i => gridState[i]}
      rowsCount={data.length}
    /> */}
    <ProductsTable data={data}/>
    </div>
  );
}

export default Products;