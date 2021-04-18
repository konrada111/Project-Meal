import React from 'react';
import MealListItem from 'components/molecules/MealListItem/MealListItem';
import PropTypes from 'prop-types';
import { Wrapper, List, Item } from './MealList.style';

const MealList = ({ mealData: { meals, nutrients } }) => {
  return (
    <>
      <List>
        <Item>Calories: {nutrients.calories}</Item>
        <Item>Protein: {nutrients.protein}</Item>
        <Item>Carbohydrates: {nutrients.carbohydrates}</Item>
        <Item>Fat: {nutrients.fat}</Item>
      </List>
      <Wrapper>
        {meals.map((meal) => (
          <MealListItem key={meal.id} id={meal.id} meal={meal} nutrients={nutrients} />
        ))}
      </Wrapper>
    </>
  );
};

MealList.propTypes = {};

export default MealList;
