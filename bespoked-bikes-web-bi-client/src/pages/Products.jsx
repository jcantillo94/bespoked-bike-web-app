import React, { useState, useEffect} from 'react';
import axios from 'axios';
import ReactDataGrid from 'react-data-grid';
import ProductsTable from '../components/ProductsTable'
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/products';



function Products() {

  const { isLoading, isError, error, data: data = [] } = useQuery(['products'], getProducts);

    console.log("isLoading " + isLoading);
    console.log("isError " + isError);
    console.log("error " + error);
    console.log("data " + data);
    // console.log("products " + products);

  return (
    <div>
    <ProductsTable data={data}/>
    </div>
  );
  }

export default Products;