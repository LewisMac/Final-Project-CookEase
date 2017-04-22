import React from "react";
import {Link} from "react-router"

export default class AddRecipe extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    console.log("addRecipe",this.props.route)
    return(
      <div className="add-recipe">
      <div id="add-recipe">
      <div id="ingredients">
      <Link to="/addRecipe/ingredients">Ingredients</Link>
      </div>
      <div id="method">
      <Link to="/addRecipe/method">Method</Link>
      </div>
      <div id="image">
      <Link to="/addRecipe/image">Image</Link>
      </div>
      </div>
      <div id="user-input-holder">
      {this.props.children}
      </div>
      <div id="submit">
      <button id="SubmitButton" onClick={this.props.route.submitButton}>Submit Recipe</button>
      </div>
      </div>
      )
  }
}
