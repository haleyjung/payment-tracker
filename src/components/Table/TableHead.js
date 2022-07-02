import React from 'react';
import PropTypes from 'prop-types';

export default function TableHead({ clientData, setClientData }) {
  return (
    <thead data-testid="thead">
      <tr>
        <th>
          <input type="checkbox" name="checkbox" value="checkedall" />
        </th>
        <th>Creditor</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th className="min-pay">Min Pay %</th>
        <th>Balance</th>
      </tr>
    </thead>
  );
}

TableHead.propTypes = {
  clientData: PropTypes.array.isRequired,
  setClientData: PropTypes.func.isRequired,
};
