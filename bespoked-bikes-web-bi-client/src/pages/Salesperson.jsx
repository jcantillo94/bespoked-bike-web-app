import React, { useState, useEffect} from 'react';
import axios from 'axios';
import ReactDataGrid from 'react-data-grid';
import SalespersonsTable from '../components/SalespersonsTable';
import { useQuery } from '@tanstack/react-query';
import { getSalespersons } from '../api/salesperson';



function Salesperson() {

  const { isLoading, isError, error, data: data = [] } = useQuery(['salesperson'], getSalespersons);

    console.log("isLoading " + isLoading);
    console.log("isError " + isError);
    console.log("error " + error);
    console.log("data " + data);

  return (
    <div>
    <SalespersonsTable data={data}/>
    </div>
  );
  }

export default Salesperson;