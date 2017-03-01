import React from "react";
import {Link} from "react-router"

export default class AddRecipe extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    
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
      </div>
    )
  }
}
