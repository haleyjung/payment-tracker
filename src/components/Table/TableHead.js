import PropTypes from 'prop-types';
import { checkAllRows } from '../../utils/table.helpers';

export default function TableHead({ clientData, setClientData }) {
  const handleCheckAllRows = (e) => {
    const checkedRows = checkAllRows(e, clientData);
    setClientData(checkedRows);
  };

  return (
    <thead data-testid="thead">
      <tr>
        <th>
          <input
            data-testid="master-checkbox"
            type="checkbox"
            name="checkbox"
            value="checked-all"
            onChange={handleCheckAllRows}
          />
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
