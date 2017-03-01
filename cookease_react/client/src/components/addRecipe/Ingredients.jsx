import React from "react"

export default class Ingredients extends React.Component{

  constructor(props){
    super(props);
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

  render(){
    return(
      <div id="user-input-box">
      <div id="user-input-form">
      <form className="ingredientSelection">
      <input type="text" onKeyUp={this.handleSearchQuery} className="input-box" placeholder="Ingredient">
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
      <input type="number" className="input-box" placeholder="Quantity">
      </input>
      </form>
      </div>
      <ul className="ingredientInformation" id="ingredientSearchPara">
      </ul>
      <p className="ingredientInformation">
      hi to you too
      </p>
      </div>
      )
  }
}