import React from "react"
import Recipe from "./Recipe.jsx"

export default class Recipes extends React.Component{

  constructor(props){
    super(props);
    this.state = {recipes: [], selectedRecipe: null}
    this.handleRecipeClick = this.handleRecipeClick.bind(this)
    this.handleBackButton = this.handleBackButton.bind(this)
  }

  componentDidMount(){
    const url = "http://localhost:5000/api/recipes"
    this.makeRequest(url)
    .then(data => {this.setState({recipes: data})
  })
    .catch(status => {
      console.error("something went wrong! request status:", status);
    });
  }

  makeRequest(url){
    return new Promise(function(resolve, reject){
      var request = new XMLHttpRequest();
      request.open("GET", url);
      request.onload = function(){
        if(this.status !== 200){
          reject( this.status );
          return;
        }

        var jsonString = this.responseText;
        var data = JSON.parse(jsonString);
        resolve(data);
      }
      request.send();
    });
  }

  handleBackButton(){
    this.setState({selectedRecipe: null})
  }

  handleRecipeClick(event){
    console.log(event.target.id)
    const url = `http://localhost:5000/api/recipes/${event.target.id}`
    this.makeRequest(url)
    .then(data => {this.setState({selectedRecipe: data})
  })
    .catch(status => {
      console.error("something went wrong! request status:", status);
    });
  }

  render(){
    var recipe_names = this.state.recipes.map(function(recipe, index){
      return <h5 className="recipe-name" id={recipe.id} key={recipe.id} onClick={this.handleRecipeClick}>{recipe.name}</h5>
    }.bind(this))
    if(this.state.selectedRecipe === null){
      return(
        <div className="recipeHolder">
        {recipe_names}
        </div>
        )
    } else {
      return(
        <Recipe selectedRecipe={this.state.selectedRecipe} backButton={this.handleBackButton}/>
      )
    }
  }

}
