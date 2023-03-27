import React, { useState, useEffect} from 'react';
import axios from 'axios';
import ReactDataGrid from 'react-data-grid';
import CustomersTable from '../components/CustomersTable';
import { useQuery } from '@tanstack/react-query';
import { getCustomers } from '../api/customers';



function Customer() {

  const { isLoading, isError, error, data: data = [] } = useQuery(['customer'], getCustomers);

    console.log("isLoading " + isLoading);
    console.log("isError " + isError);
    console.log("error " + error);
    console.log("data " + data);

  return (
    <div>
    <CustomersTable data={data}/>
    </div>
  );
  }

export default Customer;