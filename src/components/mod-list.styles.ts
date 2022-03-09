import styled from "styled-components";

const GUTTER = 24;

export const ModListWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ModUnorderedList = styled.ul`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-auto-rows: minmax(300px, auto);
  grid-column-gap: ${GUTTER}px;
  grid-row-gap: ${GUTTER}px;
`;
