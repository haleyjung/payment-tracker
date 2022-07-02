import { render, screen } from '@testing-library/react';
import App from './App';
import axios from 'axios';
import { mockClientData } from './dummyData/test';

jest.mock('axios');

afterEach(() => {
  axios.get.mockClear();
});

describe('App component', () => {
  test('fetches data successfully from an API', async () => {
    axios.get.mockImplementation((API) => {
      if (
        API ===
        'https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json'
      ) {
        return Promise.resolve({ data: mockClientData });
      }
    });
    render(<App />);
    const text = await screen.findByText(/CBNA/i);
    expect(text).toBeInTheDocument();
    expect(axios.get).toHaveBeenCalledTimes(1);
  });

  test('renders error message if fetching data from an API is unsuccessful', async () => {
    const errorMessage = 'Error';
    axios.get.mockImplementation(() => Promise.reject(new Error(errorMessage)));
    await expect(axios.get).rejects.toThrow(errorMessage);
  });

  test('renders a heading', () => {
    render(<App />);
    const heading = screen.getByRole('heading');
    const parentContainer = screen.getByTestId('app');

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(parentContainer).toContainElement(heading);
  });

  test('renders a table', () => {
    render(<App />);
    const parentContainer = screen.getByTestId('app');
    const debtPayoffTable = screen.getByTestId('debt-table');
    expect(parentContainer).toContainElement(debtPayoffTable);

    const thead = screen.getByTestId('thead');
    expect(debtPayoffTable).toContainElement(thead);

    const tbody = screen.getByTestId('tbody');
    expect(tbody).toContainElement(tbody);
  });

  test('renders two buttons', () => {
    render(<App />);

    const buttonsContainer = screen.getByTestId('buttons-container');
    expect(buttonsContainer).toBeInTheDocument();

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });

  test('renders total balance', () => {
    render(<App />);
    const balanceContainer = screen.getByTestId('total-balance');
    expect(balanceContainer).toBeInTheDocument();
    expect(screen.getByText('$', {exact: false})).toBeInTheDocument();
  });

  test('renders row count', () => {
    render(<App/>);
    const rowCountContainer = screen.getByTestId('row-count');
    expect(rowCountContainer).toBeInTheDocument();
  });
});
