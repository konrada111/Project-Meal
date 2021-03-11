import styled from 'styled-components';

export const Input = styled.input`
  padding: 5px 8px;
  border: 1px solid grey;
  box-sizing: border-box;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  max-width: 200px;
  &:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  }
`;
