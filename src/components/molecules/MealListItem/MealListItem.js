import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, RecipeLink, Image, Title } from './MealListItem.style';

const MealListItem = ({ meal: { title, servings, sourceUrl, id } }) => {
  const [imageUrl, setImageUrl] = useState('');

  const API_KEY = 'cc510540cbf940d1ace07d5368fcbb05';
  const API_URL = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`;

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Image src={imageUrl} />
      <RecipeLink target="_blank" href={sourceUrl}>
        Go to Recipe
      </RecipeLink>
    </Wrapper>
  );
};

MealListItem.propTypes = {};

export default MealListItem;
