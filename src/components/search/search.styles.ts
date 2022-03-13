import styled from "styled-components";

export const SearchForm = styled.form`
  margin: 48px 0;
`;

export const SearchFormGroup = styled.div`
  position: relative;
`;

export const SearchInputLabel = styled.label`
  position: absolute;
  top: 0;
  left: 10px;
  transform: translateY(-50%);
  font-family: monospace;
  font-size: 10px;
  background-color: ${({ theme }) => theme.colors.bg};
  padding: 2px 8px;
`;

export const SearchInput = styled.input`
  line-height: 24px;
`;
