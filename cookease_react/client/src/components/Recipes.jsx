import React from "react"

export default class Recipes extends React.Component{

  constructor(props){
    super(props);
    this.state = {recipes: []}
  }

  componentDidMount(){
    // console.log("hi")
    const url = "http://localhost:5000/api/recipes"
    this.makeRequest(url)
    .then(data => {
      // console.log("here now")
      this.setState({recipes: data})
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
        // console.log("hey there",this.status)
      }
      request.send();
    });
  }

  render(){
    var recipe_names = this.state.recipes.map(function(recipe, index){
      return <h5 className="recipe-name" value={index} key={index}>{recipe.name}</h5>
    })
    return(
      <div className="recipeHolder">
      {recipe_names}
      </div>
      )
  }

}