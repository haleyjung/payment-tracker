import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TableHead from './TableHead';
import { mockClientData } from '../../dummyData/test';

const renderTableHead = (mockClientData) => {
  const table = document.createElement('table');
  const { container } = render(
    <TableHead clientData={mockClientData} setClientData={() => {}} />,
    {
      container: document.body.appendChild(table),
    },
  );
  return container;
}

describe('Table Head', () => {
  test('renders all the headers correctly', () => {
    renderTableHead(mockClientData);

    expect(screen.getByTestId('master-checkbox')).toBeInTheDocument();
    expect(screen.getByText('Creditor')).toBeInTheDocument();;
    expect(screen.getByText('First Name')).toBeInTheDocument();;
    expect(screen.getByText('Last Name')).toBeInTheDocument();;
    expect(screen.getByText('Min Pay %')).toBeInTheDocument();;
    expect(screen.getByText('Balance')).toBeInTheDocument();;
  });

  test('checkbox on the header can be checked or unchecked on click', () => {
    renderTableHead(mockClientData);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox.checked).toBeFalsy();
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBeTruthy();
  });
});