import { QueryClient, QueryClientProvider } from 'react-query';
import { Combination } from './components/Combination';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Combination />
    </QueryClientProvider>
  );
}

export default App;
