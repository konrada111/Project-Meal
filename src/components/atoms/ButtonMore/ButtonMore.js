import styled from 'styled-components';

export const ButtonMore = styled.button`
  margin-top: 20px;
  padding: 20px 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 182px;
  height: 55px;
  font-size: 22px;
  background-color: ${({ theme }) => theme.colors.orange};
  color: white;
  border-radius: 25px;
  border: none;
  grid-row-start: 4;
  grid-column-start: 2;
`;
