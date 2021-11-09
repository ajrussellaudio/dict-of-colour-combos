import { QueryClient, QueryClientProvider } from 'react-query';
import { CombinationList } from './components/CombinationList';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <CombinationList />
    </QueryClientProvider>
  );
}

export default App;
