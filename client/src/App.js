import React from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import NavBar from './components/NavBar/NavBar';
import {Route} from 'react-router-dom';
import './App.css';
import CreateRecipe from './components/CreateRecipe/CreateRecipe';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
import Paginate from './components/Home/Paginate';

function App() {
  return (
    <div>
    <React.Fragment>
     <Route exact path="/" component={LandingPage}/>
     <Route path="/home" component={Paginate}/>
     <Route path="/createRecipe" component={CreateRecipe}/>
     <Route path="/recipeDetails/:id" component={RecipeDetails}/>
    </React.Fragment>
    </div>
  );
}

export default App;
