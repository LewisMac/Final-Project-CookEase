import React from "react"

export default class Recipe extends React.Component{

  constructor(props){
    super(props);
    this.separateIngredients = this.separateIngredients.bind(this)
    this.state = {
      ingredients: []
    }
  }

  separateIngredients(ingredientList){
    // console.log(this.props.selectedRecipe.ingredients.split(" "))
    var ingredientList = document.querySelector("#ingredientsdisplayList")
      // console.log(ingredientList)
    this.props.selectedRecipe.ingredients.split(" ").forEach(function(ingredient){
      let li = document.createElement("li")
      console.log(ingredient)
      li.appendChild(document.createTextNode(ingredient))
      ingredientList.appendChild(li)
    })
  }

  componentDidMount(){
    this.separateIngredients()
  }

  render(){
    // var ingredientList = document.querySelector("#ingredientsdisplayList")
    

    return(
      <div id="RecipeHolder">

        <div id="IngredientsHolder">
        <h3>Ingredients</h3>
        <ul id="ingredientsdisplayList">
        </ul>
        </div>

        <div id="ingredientsAndMethodHolder">
          <div id="ImageHolder">
          <h3>Image</h3>
          </div>

          <div id="MethodHolder">
          <h3>Method</h3>
          <p>{this.props.selectedRecipe.method}</p>
          </div>
        </div>

      
      </div>
      )
  }
}