import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import TableBody from './TableBody';

const mockClientData = [
  {
    "id": 1,
    "creditorName": "CBNA",
    "firstName": "Suman",
    "lastName": "Tester79",
    "minPaymentPercentage": 2.00,
    "balance": 1363.00,
    "isChecked": true,
  },
  {
    "id": 2,
    "creditorName": "AMEX",
    "firstName": "Suman",
    "lastName": "Tester79",
    "minPaymentPercentage": 2.00,
    "balance": 2763.00,
    "isChecked": true,
  },
  {
    "id": 3,
    "creditorName": "AMEX",
    "firstName": "Suman",
    "lastName": "Tester79",
    "minPaymentPercentage": 2.00,
    "balance": 429.00,
    "isChecked": false,
  },
];

const renderTableBody = (mockClientData) => {
  const table = document.createElement('table');
  const { container } = render(
    <TableBody clientData={mockClientData} setClientData={() => {}} />,
    {
      container: document.body.appendChild(table),
    },
  );
  return container;
};

describe('Table Body', () => {
  test('renders each row of a table with a checkbox and correct client data', () => {
    const TableBody = renderTableBody(mockClientData);
    expect(TableBody).toBeTruthy();

    mockClientData.forEach((client) => {
      const row = screen.getByTestId(client.id);
      const utils = within(row);
      expect(utils.getByRole('checkbox')).toBeInTheDocument();
      expect(utils.getByText(client.creditorName)).toBeInTheDocument();
      expect(utils.getByText(client.firstName)).toBeInTheDocument();
      expect(utils.getByText(client.lastName)).toBeInTheDocument();
      expect(
        utils.getByText(client.minPaymentPercentage + '.00%'),
      ).toBeInTheDocument();
      expect(utils.getByText(client.balance + '.00')).toBeInTheDocument();
    });
  });

  test('toggles the checked state of a checkbox on click', () => {
    renderTableBody(mockClientData);

    const unCheckedCheckbox = screen.getAllByRole('checkbox')[2];
    expect(unCheckedCheckbox.checked).toBeFalsy();
    fireEvent.click(unCheckedCheckbox, { target: { checked: false } });
    expect(unCheckedCheckbox).toBeTruthy();
  });
});
