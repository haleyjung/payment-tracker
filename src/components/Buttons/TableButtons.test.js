import { render, screen, fireEvent } from '@testing-library/react';
import TableButtons from './TableButtons';
import { mockClientData } from '../../dummyData/test';

describe('Table Buttons', () => {
  test('renders two Remove Debt and Add Debt buttons', () => {
    render(
      <TableButtons clientData={mockClientData} setClientData={() => {}} />,
    );

    expect(screen.getByTestId('buttons-container')).toBeInTheDocument();

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);

    const removeButton = screen.getByRole('button', {
      name: /remove/i,
    });
    expect(removeButton).toHaveTextContent('Remove Debt');

    const addButton = screen.getByRole('button', {
      name: /add/i,
    });
    expect(addButton).toHaveTextContent('Add Debt');
  });

  test('a user can click the Remove Debt button', () => {
    render(
      <TableButtons clientData={mockClientData} setClientData={() => {}} />,
    );
    const removeButton = screen.getByText('Remove Debt');
    fireEvent.click(removeButton);
  });

  test('a user can click the Add Debt button', () => {
    render(
      <TableButtons clientData={mockClientData} setClientData={() => {}} />,
    );
    const addButton = screen.getByText('Add Debt');
    fireEvent.click(addButton);
  });
});
