import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import GetData from './Components/NutritionAnalysis/GetData';
import NutritionForm from './Components/NutritionAnalysis/NutritionForm';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={NutritionForm}></Route>        
          <Route exact path="/getData" component={GetData}></Route>        
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
