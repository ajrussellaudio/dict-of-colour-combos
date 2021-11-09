import { useCombination } from '../../hooks/useCombination';
import { Combination } from './Combination';

export type WithQueryProps = {};

export function WithQuery() {
  const { data } = useCombination(1);

  return data ? <Combination {...data} /> : null;
}
