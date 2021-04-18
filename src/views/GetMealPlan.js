import React, { useState } from 'react';
import FormField from '../components/molecules/FormField/FormField';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Button } from '../components/atoms/Button/Button';
import MealList from 'components/organism/MealList/MealList';
import axios from 'axios';
import styled from 'styled-components';

const GetMealPlan = () => {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  const API_KEY = 'cc510540cbf940d1ace07d5368fcbb05';
  const API_URL = `https://api.spoonacular.com/mealplanner/generate?apiKey=${API_KEY}&timeFrame=day&targetCalories=${calories}`;

  const handleInputChange = (e) => {
    setCalories(e.target.value);
  };

  // const handleGetMealData = () => {
  //   fetch(API_URL)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setMealData(data);
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const handleGetMealData = () => {
    axios
      .get(API_URL)
      .then((response) => setMealData(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <Wrapper>
      <ViewWrapper>
        <FormField label="Calories" id="calories" name="calories" type="number" onChange={handleInputChange} placeholder="2000" />
        <Button onClick={handleGetMealData}>Get Meal</Button>
      </ViewWrapper>
      {mealData && <MealList mealData={mealData} />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 80vh;
  top: 10vh;
`;

GetMealPlan.propTypes = {};

export default GetMealPlan;
