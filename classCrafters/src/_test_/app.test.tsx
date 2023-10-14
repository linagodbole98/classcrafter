import { render } from '@testing-library/react';
import App from 'src/App';

// Mock the 'src/routes/index' module
jest.mock('src/routes/index', () => {
  return () => <div data-testid="mocked-routers">Mocked Routers</div>;
});

test('renders the App component with the mocked Routers component', () => {
  const { getByText, getByTestId } = render(<App />);
  
  const appElement = getByText('Mocked Routers');
  const routersElement = getByTestId('mocked-routers');
  
  expect(appElement).toBeInTheDocument();
  expect(routersElement).toBeInTheDocument();
});