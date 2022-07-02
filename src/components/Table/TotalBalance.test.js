import { render, screen } from '@testing-library/react';
import TotalBalance from './TotalBalance';
import { mockClientData } from '../../dummyData/test';

describe('Total Balance', () => {
  test('renders with zero total balance when a row is not checked', () => {
    render(<TotalBalance clientData={[]} />);
    expect(screen.getByTestId('total-balance')).toBeInTheDocument();
    expect(screen.getByText(/^Total$/i)).toBeInTheDocument();
    expect(screen.getByText('$ 0.00')).toBeInTheDocument();
  });

  test('renders total balance with two decimal places when one or more rows are checked', () => {
    render(<TotalBalance clientData={mockClientData} />);
    expect(screen.getByText('$ 4126.00')).toBeInTheDocument();
  });
});
