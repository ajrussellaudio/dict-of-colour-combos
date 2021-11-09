import { useCombinations } from '../../hooks/useCombinations';
import { Combination } from '../Combination';

export type CombinationListProps = {};

export function CombinationList() {
  const { data = [] } = useCombinations();

  return (
    <>
      {data.map(combination => {
        return <Combination key={combination.id} {...combination} />;
      })}
    </>
  );
}
