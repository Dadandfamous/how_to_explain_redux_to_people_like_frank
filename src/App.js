import React from 'react';
import './App.css';
import PizzaListContainer from './components/PizzaListContainer';
import PizzaDetailsContainer from './components/PizzaDetailsContainer';
import AddPizzaFormContainer from './components/AddPizzaFormContainer';

function App() {
  return (
    <div className="App">
    
      <PizzaListContainer />
      <PizzaDetailsContainer />
      <AddPizzaFormContainer /> 
    </div>
  );
}

export default App;
