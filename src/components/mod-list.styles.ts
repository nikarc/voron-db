import styled from "styled-components";

export const ModListWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ModUnorderedList = styled.ul`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, minmax(0, 1fr));
`;
