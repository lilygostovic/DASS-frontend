import { render, screen } from '@testing-library/react';
import { LoadingView } from '../index';

describe('LoadingView component', () => {
  test('renders loading spinner', () => {
    const timeoutPassed = false;
    render(<LoadingView timeoutPassed={timeoutPassed} />);
    const loadingSpinner = screen.getByTestId('load-view');
    expect(loadingSpinner).toBeInTheDocument();

    const beatLoader = screen.getByTestId('beat-load');
    expect(beatLoader).toBeInTheDocument();

    const timeoutMessage = screen.queryByText('filterPage.timeout');
    expect(timeoutMessage).not.toBeInTheDocument();

  });

  test('renders loading spinner', () => {
    const timeoutPassed = true;
    render(<LoadingView timeoutPassed={timeoutPassed} />);
    const loadingSpinner = screen.getByTestId('load-view');
    expect(loadingSpinner).toBeInTheDocument();

    const beatLoader = screen.getByTestId('beat-load');
    expect(beatLoader).toBeInTheDocument();

    const timeoutMessage = screen.getByText('filterPage.timeout');
    expect(timeoutMessage).toBeInTheDocument();

  });


});
