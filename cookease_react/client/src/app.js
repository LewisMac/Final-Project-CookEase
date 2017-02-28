import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home.jsx"
import Main from "./components/Main.jsx"
import Recipes from "./components/Recipes.jsx"
import AddRecipe from "./components/AddRecipe.jsx"

import {Router, Route, IndexRoute, hashHistory} from "react-router"

class App extends React.Component{

  render(){
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Main}>
          <IndexRoute component={Home} />
          <Route path="Recipes" component={Recipes} />
          <Route path="AddRecipe" component={AddRecipe} />
        </Route>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))