import { render, screen } from '@testing-library/react';
import RowCount from './RowCount';
import { mockClientData } from '../../dummyData/test';

describe('Total Row Count and Check Row Count', () => {
  test('renders two counters', () => {
    render(<RowCount clientData={[]} />);
    expect(screen.getByText('Total Row Count:')).toBeInTheDocument();
    expect(screen.getByTestId('total-row-count')).toHaveTextContent(0);
    expect(screen.getByText('Check Row Count:')).toBeInTheDocument();
    expect(screen.getByTestId('check-row-count')).toHaveTextContent(0);
  });

  test('displays the correct total and checked row counts', () => {
    render(<RowCount clientData={mockClientData} />);
    expect(screen.getByTestId('total-row-count')).toHaveTextContent(3);
    expect(screen.getByTestId('check-row-count')).toHaveTextContent(2);
  });
});
