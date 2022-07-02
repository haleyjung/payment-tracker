import { render, screen, fireEvent, within } from '@testing-library/react';
import TableBody from './TableBody';
import { mockClientData } from '../dummyData/testData';

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
