import styled from 'styled-components';

export const Input = styled.input`
  padding: 5px 25px;
  width: 400px;
  height: 50px;
  text-align: center;
  font-size: 25px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  box-sizing: border-box;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 10px;
  &:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  }
`;
