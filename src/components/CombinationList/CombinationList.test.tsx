import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CombinationList, CombinationListProps } from './CombinationList';
import mockCombinations from '../../mocks/mockCombinations.json';

const wrapper: React.FC = ({ children }) => {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

const defaultProps: CombinationListProps = {};

const renderComponent = (props: Partial<CombinationListProps> = {}) =>
  render(<CombinationList {...defaultProps} {...props} />, { wrapper });

describe('CombinationList', () => {
  it('renders correctly', async () => {
    renderComponent();
    expect(await screen.findAllByRole('article')).toHaveLength(mockCombinations.length);
  });
});
