import React from 'react';
import PropTypes from 'prop-types';

export default function RowCount({ clientData }) {

  const countSelectedRow = (clientData) => {
    let count = 0;
    clientData.forEach((client) => {
      if (client.isChecked) {
        count += 1;
      }
    });
    return count;
  };

  return (
    <div data-testid="row-count" className="row-count">
      <div>
        <strong>Total Row Count:</strong>
        {clientData.length === 0 ? (
          <strong data-testid="total-row-count"> 0</strong>
        ) : (
          <strong data-testid="total-row-count"> {clientData.length}</strong>
        )}
      </div>
      <div>
        <strong>Check Row Count:</strong>
        <strong data-testid="check-row-count">
          {' '}
          {countSelectedRow(clientData)}
        </strong>
      </div>
    </div>
  );
}

RowCount.propTypes = {
  clientData: PropTypes.array.isRequired,
};
