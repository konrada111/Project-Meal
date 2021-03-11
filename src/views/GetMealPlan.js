import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormField from '../components/molecules/FormField/FormField';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Button } from '../components/atoms/Button/Button';
import MealList from 'components/organism/MealList/MealList';

const GetMealPlan = () => {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  const API_KEY = 'cc510540cbf940d1ace07d5368fcbb05';
  const API_URL = `https://api.spoonacular.com/mealplanner/generate?apiKey=${API_KEY}&timeFrame=day&targetCalories=${calories}`;

  const handleInputChange = (e) => {
    setCalories(e.target.value);
  };

  const handleGetMealData = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <ViewWrapper>
        <FormField label="Calories" id="calories" name="calories" type="number" onChange={handleInputChange} />
        <Button onClick={handleGetMealData}>Get Meal</Button>
      </ViewWrapper>
      {mealData && <MealList mealData={mealData} />}
    </>
  );
};

GetMealPlan.propTypes = {};

export default GetMealPlan;
