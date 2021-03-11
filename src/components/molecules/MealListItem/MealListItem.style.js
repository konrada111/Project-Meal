import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
  padding: 40px 50px;
  border-radius: 25px;
  box-shadow: 0 4px 8px 2px rgba(77, 77, 77, 0.15);
`;

export const Image = styled.img`
  max-width: 300px;
`;

export const RecipeLink = styled.a`
  text-decoration: none;
  color: white;
  background-color: green;
  width: fit-content;
  border-radius: 15px;
  margin-top: 20px;
  padding: 0.75rem 1.25rem;
`;
