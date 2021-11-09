import { render, screen } from '@testing-library/react';
import { Combination, CombinationProps } from './Combination';
import mockCombination from '../../mocks/mockCombination.json';

const defaultProps: CombinationProps = mockCombination;

const renderComponent = (props: Partial<CombinationProps> = {}) => render(<Combination {...defaultProps} {...props} />);

describe('Combination', () => {
  it('displays the ID', () => {
    renderComponent({ id: 1 });
    expect(screen.getByText('001')).toBeInTheDocument();
  });

  it('displays the colours', () => {
    renderComponent();
    expect(screen.getAllByTestId('colour-box')).toHaveLength(mockCombination.colours.length);
    expect(screen.getAllByTestId('colour-box')[0]).toHaveStyle('background-color: #de4500');
    expect(screen.getAllByTestId('colour-box')[1]).toHaveStyle('background-color: #29bdad');
  });

  it('displays the names in Japanese and English', () => {
    renderComponent();
    mockCombination.colours.forEach(colour => {
      expect(screen.getByText(new RegExp(colour.name.ja.kanji))).toBeInTheDocument();
      expect(screen.getByText(new RegExp(colour.name.ja.hiragana))).toBeInTheDocument();
      expect(screen.getByText(new RegExp(colour.name.en))).toBeInTheDocument();
    });
  });
});
