import './App.css';
import GetMealPlan from './GetMealPlan';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MainTemplate from '../components/templates/MainTemplate/MainTemplate';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import HomePage from './HomePage';
import { GlobalStyle } from 'assets/styles/GlobalStyle';

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
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
}

export default App;
