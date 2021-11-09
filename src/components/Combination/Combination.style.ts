import styled from 'styled-components';

export const Container = styled.article`
  font-family: 'Cormorant Garamond', serif;
  display: flex;
  width: 100%;
  max-width: 50rem;
  margin: 1rem auto;
`;

export const Id = styled.aside`
  border-right: 1px solid black;
  max-width: min-content;
  padding-inline: 1rem;
`;

export const Colours = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 1rem;
`;

export const ColourContainer = styled.div`
  width: 100%;
  max-width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.2rem;
  margin-bottom: 4rem;
`;

type ColourBoxProps = {
  colour: string;
};

export const ColourBox = styled.div<ColourBoxProps>`
  width: 100%;
  aspect-ratio: 6 / 5;
  background-color: ${props => props.colour};
`;

export const Kanji = styled.span`
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 1.5rem;
  margin-block: 1rem;
`;

export const Hiragana = styled.span`
  font-family: 'Noto Sans JP', sans-serif;
  margin-block: 0.6rem;
`;

export const English = styled.span`
  margin-block: 0.3rem;
`;
