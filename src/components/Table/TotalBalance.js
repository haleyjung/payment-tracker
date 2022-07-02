import React from 'react';
import PropTypes from 'prop-types';
import { roundTwoDecimals } from '../../utils/table.helpers';

export default function TotalBalance({ clientData }) {

  const getTotalBalance = (clientData) => {
    let total = 0;
    clientData.forEach((client) => {
      if (client.isChecked) {
        total += client.balance;
      }
    });
    return total;
  };

  const setTotal = (clientData) => {
    return getTotalBalance(clientData) > 0 ? (
      <strong>$ {roundTwoDecimals(getTotalBalance(clientData))}</strong>
    ) : (
      <strong>$ 0.00</strong>
    );
  };

  return (
    <div data-testid="total-balance" className="total-balance">
      <strong>Total</strong>
      {setTotal(clientData)}
    </div>
  );
}

TotalBalance.propTypes = {
  clientData: PropTypes.array.isRequired,
};
