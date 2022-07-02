import React from 'react';
import PropTypes from 'prop-types';
import { dummyClientData } from '../../dummyData/clients';

export default function TableButtons({ clientData, setClientData }) {
  const addRow = () => {
    const removeDuplicateIds = dummyClientData.filter(
      (newData) =>
        clientData.map((existing) => existing.id).indexOf(newData.id) === -1,
    );
    setClientData([...clientData, removeDuplicateIds[0]]);
  };

  const removeRow = () => {
    const lastRow = clientData[clientData.length - 1];
    lastRow.isChecked = false;
    setClientData(clientData.slice(0, clientData.length - 1));
  };

  return (
    <div data-testid="buttons-container" className="buttons-container">
      <button name="remove" onClick={removeRow}>
        Remove Debt
      </button>
      <button name="add" onClick={addRow}>
        Add Debt
      </button>
    </div>
  );
}

TableButtons.propTypes = {
  clientData: PropTypes.array.isRequired,
  setClientData: PropTypes.func.isRequired,
};
