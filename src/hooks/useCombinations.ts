import axios from 'axios';
import { useQuery } from 'react-query';

export function useCombinations() {
  return useQuery<Combination[]>('combinations', async () => {
    const { data } = await axios.get(`/api/combinations`);
    return data;
  });
}
