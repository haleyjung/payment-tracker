import React from 'react';
import PropTypes from 'prop-types';
import { roundTwoDecimals, checkEachRow } from '../../utils/table.helpers';

export default function TableBody({ clientData, setClientData }) {

  const handleCheckEachRow = (e) => {
    const checkedRow = checkEachRow(e, clientData);
    setClientData(checkedRow);
  };

  return (
    <tbody data-testid="tbody">
      {clientData.map((client) => (
        <tr data-testid={client.id} key={Math.random()}>
          <th>
            <input
              type="checkbox"
              name="checkbox"
              value={client.id}
              checked={client.isChecked}
              onChange={handleCheckEachRow}
            />
          </th>
          <td>{client.creditorName}</td>
          <td>{client.firstName}</td>
          <td>{client.lastName}</td>
          <td>{roundTwoDecimals(client.minPaymentPercentage)}%</td>
          <td>{roundTwoDecimals(client.balance)}</td>
        </tr>
      ))}
    </tbody>
  );
}

TableBody.propTypes = {
  clientData: PropTypes.array.isRequired,
  setClientData: PropTypes.func.isRequired,
};
