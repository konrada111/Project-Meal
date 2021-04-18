import './App.css';
import GetMealPlan from './GetMealPlan';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainTemplate from '../components/templates/MainTemplate/MainTemplate';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import HomePage from './HomePage';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import Recipes from './Recipes';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Switch>
            <Route path="/meal-plan">
              <GetMealPlan />
            </Route>
            <Route path="/recipes">
              <Recipes />
            </Route>
            <Route path="/" exact>
              <HomePage />
            </Route>
          </Switch>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
}

export default App;
