import { cmykToHex } from '../../util/cmykToHex';
import { ColourBox, ColourContainer, Colours, Container, English, Hiragana, Id, Kanji } from './Combination.style';

export type CombinationProps = Combination;

export function Combination({ id, colours }: CombinationProps) {
  return (
    <Container>
      <Id>{id.toString().padStart(3, '0')}</Id>
      <Colours>
        {colours.map(({ cmyk, name }) => {
          const colour = cmykToHex(cmyk);
          return (
            <ColourContainer key={name.en}>
              <ColourBox data-testid="colour-box" colour={colour} />
              <Kanji>{name.ja.kanji}</Kanji>
              <Hiragana>《{name.ja.hiragana}》</Hiragana>
              <English>{name.en}</English>
            </ColourContainer>
          );
        })}
      </Colours>
    </Container>
  );
}
