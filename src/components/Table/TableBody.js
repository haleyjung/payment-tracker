import React from 'react';
import PropTypes from 'prop-types';

export default function TableBody({ clientData, setClientData }) {
  return (
    <tbody data-testid="tbody">
      {clientData.map((client) => (
        <tr data-testid={client.id} key={Math.random()}>
          <th>
            <input
              data-testid="checkbox"
              type="checkbox"
              name="checkbox"
              value={client.id}
              checked={client.isChecked}
              onChange={() => {}}
            />
          </th>
          <td>{client.creditorName}</td>
          <td>{client.firstName}</td>
          <td>{client.lastName}</td>
          <td>{client.minPaymentPercentage}%</td>
          <td>{client.balance}</td>
        </tr>
      ))}
    </tbody>
  );
}

TableBody.propTypes = {
  clientData: PropTypes.array.isRequired,
  setClientData: PropTypes.func.isRequired,
};
