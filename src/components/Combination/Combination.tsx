import { useCombination } from '../../hooks/useCombination';

export type CombinationProps = {};

export function Combination() {
  const { data } = useCombination(1);
  return data ? (
    <div className="App">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  ) : null;
}
