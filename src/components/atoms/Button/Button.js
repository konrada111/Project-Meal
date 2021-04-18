import styled from 'styled-components';

export const Button = styled.button`
  margin: 15px 0;
  padding: 10px 25px;
  background-color: ${({ theme }) => theme.colors.buttonColor};
  color: white;
  border-radius: 20px;
  border: none;
  font-weight: bold;
  width: fit-content;
`;
