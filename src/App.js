import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TableHead from './components/Table/TableHead';
import TableBody from './components/Table/TableBody';
import TableButtons from './components/Buttons/TableButtons';
import TotalBalance from './components/Table/TotalBalance';
import RowCount from './components/Table/RowCount';
import './App.css';

export default function App() {

  const [clientData, setClientData] = useState([
    {
      id: 0,
      creditorName: '',
      firstName: '',
      lastName: '',
      minPaymentPercentage: 0,
      balance: 0,
      isChecked: false,
    },
  ]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        'https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json',
      );
      const initialData = [];
      data.forEach((client) => {
        initialData.push({
          id: client.id,
          creditorName: client.creditorName,
          firstName: client.firstName,
          lastName: client.lastName,
          minPaymentPercentage: client.minPaymentPercentage,
          balance: client.balance,
          isChecked: false,
        });
      });
      setClientData(initialData);
    } catch (error) {
      return { data: 'There was an error!' };
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app" data-testid="app">
      <h1>
        Strafts Coding Challenge
        <span role="img" aria-label="Fire">
          {' '}
          🔥{' '}
        </span>
      </h1>
      <div>
        <table data-testid="debt-table">
          <TableHead clientData={clientData} setClientData={setClientData} />
          <TableBody clientData={clientData} setClientData={setClientData} />
        </table>
        <TableButtons clientData={clientData} setClientData={setClientData} />
        <TotalBalance clientData={clientData} />
        <RowCount clientData={clientData} />
      </div>
    </div>
  );
}
