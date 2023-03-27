import React, { useState, useEffect} from 'react';
import axios from 'axios';
import ReactDataGrid from 'react-data-grid';
import SalesTable from '../components/SalesTable';
import { useQuery } from '@tanstack/react-query';
import { getSales } from '../api/sales';




function Sales() {

  const { isLoading, isError, error, data: data = [] } = useQuery(['sales'], getSales);

    console.log("isLoading " + isLoading);
    console.log("isError " + isError);
    console.log("error " + error);
    console.log("data " + data);

  return (
    <div>
    <SalesTable data={data}/>
    </div>
  );
  }

export default Sales;