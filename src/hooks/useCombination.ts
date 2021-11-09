import axios from 'axios';
import { useQuery } from 'react-query';

export function useCombination(id: number) {
  return useQuery<Combination>(['combination', id], async () => {
    const { data } = await axios.get(`/api/combinations/${id}`);
    return data;
  });
}
