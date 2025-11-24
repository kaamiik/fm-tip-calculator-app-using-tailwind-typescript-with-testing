import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import * as utils from './utils/utils';

describe('Tip Calculator App', () => {
  beforeEach(() => {
    vi.resetAllMocks();
    vi.spyOn(utils, 'getResults').mockReturnValue({
      tipPerPerson: '12.34',
      totalPerPerson: '56.78',
    });
  });

  it('calculates tip and total per person when all inputs are valid', async () => {
    render(<App />);

    await userEvent.type(screen.getByLabelText('bill'), '100');
    await userEvent.click(screen.getByLabelText('10%'));
    await userEvent.type(screen.getByLabelText('Number of People'), '4');
    await userEvent.click(screen.getByText('Calculate'));

    expect(utils.getResults).toHaveBeenCalledWith(100, 4, '10');
    expect(screen.getByText('$12.34')).toBeInTheDocument();
    expect(screen.getByText('$56.78')).toBeInTheDocument();
  });

  it('shows an error if the bill is empty and prevents calculation', async () => {
    render(<App />);

    await userEvent.click(screen.getByLabelText('10%'));
    await userEvent.type(screen.getByLabelText('Number of People'), '4');
    await userEvent.click(screen.getByText('Calculate'));

    expect(utils.getResults).not.toHaveBeenCalled();
    expect(screen.getByText("Can't be zero or less")).toBeInTheDocument();
  });

  it('shows an error if custom tip is over 100% and prevents calculation', async () => {
    render(<App />);

    await userEvent.type(screen.getByLabelText('bill'), '100');
    await userEvent.type(screen.getByPlaceholderText('Custom'), '102');
    await userEvent.type(screen.getByLabelText('Number of People'), '4');
    await userEvent.click(screen.getByText('Calculate'));

    expect(utils.getResults).not.toHaveBeenCalled();
    expect(screen.getByText('Cannot exceed 100%')).toBeInTheDocument();
  });
});
