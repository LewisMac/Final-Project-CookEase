import React from "react"

export default class Recipe extends React.Component{

  constructor(props){
    super(props);
    console.log(this)
    this.separateIngredients = this.separateIngredients.bind(this)
    this.state = {
      ingredients: []
    }
  }

  handleMenuBackClick(event){
    // console.log(this)
    this.props.backButton();
  }

  separateIngredients(ingredientList){
    // console.log(this.props.selectedRecipe.ingredients.split(" "))
    var ingredientList = document.querySelector("#ingredientsdisplayList")
      // console.log(ingredientList)
    this.props.selectedRecipe.ingredients.split(" ").forEach(function(ingredient){
      let li = document.createElement("li")
      // console.log(ingredient)
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

        <div id='IngredientsAndMenuHolder'>
          <div id='MenuHolder'>
            <h2 onClick={this.handleMenuBackClick.bind(this)}>Back</h2>
          </div>
          <div id="IngredientsHolder">
            <h3>Ingredients</h3>
            <ul id="ingredientsdisplayList">
            </ul>
          </div>
        </div>

        <div id="ImageAndMethodHolder">
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
