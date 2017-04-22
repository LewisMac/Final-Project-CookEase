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
      name: null,
      usedIngredients: [],
      method: null,
      image: null,
      style: null,
      course: null,
    }
    this.handleSubmitButton = this.handleSubmitButton.bind(this)
    this.constructRecipeObject = this.constructRecipeObject.bind(this)
  }

  ingredientsToString(array){
    let stringArray = array.join(" ")
    console.log(stringArray)
  }

  constructRecipeObject(){

    if(this.state.name !== null 
      && this.state.usedIngredients !== [] 
      && this.state.method !== null 
      && this.state.image !== null 
      && this.state.style !== null 
      && this.state.course !== null ){
      var nameString = this.state.name;
      var ingredientsString = this.ingredientsToString(this.state.usedIngredients);
      var methodString = this.state.method;
      var imageString = this.state.image;
      var styleString = this.state.style;
      var courseString = this.state.method;

      console.log("everything worked")
    } else {
      console.log("not finished yet")
    }
    
    // this.ingredientsToString(this.state.usedIngredients)
    
    // var recipe = new Recipe({
    //   name: req.body.name,
    //   ingredients: ,
    //   method: req.body.method,
    //   image: req.body.image,
    //   style: req.body.style,
    //   course: req.body.course,
    // })
  }

  handleSubmitButton(){

    const url = "http://localhost:5000/api/recipes"
    this.makeRequest(url, newData)
    .catch(status => {
      console.error("something went wrong! request status:", status);
    });
  }

  makeRequest(url, newData){
    return new Promise(function(resolve, reject){
      var data = JSON.stringify(newData);
      var request = new XMLHttpRequest();
      request.open("POST", url);
      request.setRequestHeader("Content-type", "application/json");
      request.onload = function(){
        if(this.status !== 200){
          reject( this.status );
          return;
        }
      }
      request.send(data);
    });
  }

  render(){
    
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Main}>
          <IndexRoute component={Home} />
          <Route path="Recipes" component={Recipes} />
          <Route path="AddRecipe" component={AddRecipe} submitButton={this.constructRecipeObject}>
            <Route path="Ingredients" component={Ingredients} PassedDownState={this.state}/>
            <Route path="Method" component={Method} PassedDownState={this.state}/>
            <Route path="Image" component={Image} PassedDownState={this.state}/>
          </Route>
        </Route>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))