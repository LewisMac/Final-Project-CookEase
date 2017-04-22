import React from "react"

export default class Ingredients extends React.Component{

  constructor(props){
    super(props);
    console.log("ingredients", this.props)
    this.handleSearchQuery = this.handleSearchQuery.bind(this)
    this.state = {
      ingredients: []
    }
  }

  componentDidMount(){
    const url = "http://localhost:5000/api/ingredients"
    this.makeRequest(url)
    .then(data => {
      this.setState({ingredients: data})
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

  handleSearchQuery(event){
    this.searchIngredientsArray(event.target.value)
  }

  searchIngredientsArray(query){
    let ingredientSelect = document.querySelector("#ingredientSearchPara")
    ingredientSelect.innerHTML = null;
    let searchQuery = this.state.ingredients.filter(function(ingredient){
      return ingredient.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
    })
    searchQuery.forEach(function(ingredient){
      let li = document.createElement("li")
      li.appendChild(document.createTextNode(ingredient.name))
      ingredientSelect.appendChild(li)
    })
  }

  handleAddIngredient(){
    let ingredientQuantity = []
    let ingredient = document.querySelector("#ingredientInputBox").value;
    let quantity = document.querySelector("#quantityInputBox").value;
    ingredientQuantity.push(ingredient)
    ingredientQuantity.push(quantity)
    const ingredientQuantityString = ingredientQuantity.join();
    this.props.route.PassedDownState.method.push(ingredientQuantityString)
  }

  render(){
    return(
      <div id="user-input-box">
      <div id="user-input-form">
      <form className="ingredientSelection">
      <input type="text" onKeyUp={this.handleSearchQuery} className="input-box" id="ingredientInputBox" placeholder="Ingredient">
      </input>
      <select>
      <option> Units
      </option>
      <option> Grams
      </option>
      <option> Pounds
      </option>
      <option> Litres
      </option>
      <option> Kilograms
      </option>
      </select>
      <input type="number" id="quantityInputBox" className="input-box" placeholder="Quantity">
      </input>
      <button onClick={this.handleAddIngredient}> add ingredient </button>
      </form>
      </div>
      <ul className="ingredientInformation" id="ingredientSearchPara">
      </ul>
      <p className="ingredientInformation">
      here
      </p>
      </div>
      )
  }
}