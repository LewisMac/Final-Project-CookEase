import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home.jsx"
import Main from "./components/Main.jsx"
import Recipes from "./components/Recipes.jsx"
import AddRecipe from "./components/AddRecipe.jsx"
import Ingredients from "./components/addRecipe/Ingredients.jsx"
import Method from "./components/addRecipe/Method.jsx"
import Image from "./components/addRecipe/Image.jsx"

import {Router, Route, IndexRoute, hashHistory} from "react-router"

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      usedIngredients: [],
      method: null,
      image: null
    }
  }

  render(){
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Main}>
          <IndexRoute component={Home} />
          <Route path="Recipes" component={Recipes} />
          <Route path="AddRecipe" component={AddRecipe}>
            <Route path="Ingredients" component={Ingredients} PassedDownThing={this.state}/>
            <Route path="Method" component={Method} PassedDownThing={this.state}/>
            <Route path="Image" component={Image} PassedDownThing={this.state}/>
          </Route>
        </Route>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))