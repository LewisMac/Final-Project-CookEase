import React from "react";

const AddRecipe = (props) => (
  <div className="add-recipe">
    <div id="add-recipe">
      <div id="ingredients">
      <h5>ingredients</h5>
      </div>
      <div id="recipe">
      <h5>recipe</h5>
      </div>
      <div id="image">
      <h5>image</h5>
      </div>
    </div>
    <div id="user-input-box">
    {props.children}
    </div>
  </div>
)

export default AddRecipe