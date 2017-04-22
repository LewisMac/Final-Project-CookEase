import React from "react"

export default class Method extends React.Component{

  constructor(props){
    super(props)
    this.handleSubmitMethodButton = this.handleSubmitMethodButton.bind(this)
  }

  handleSubmitMethodButton(){
    // console.log("Method",this.props.route)
    let methodText = document.querySelector("#method-box").value
    // console.log(document.querySelector("#method-box").value)

    this.props.route.PassedDownState.method = methodText;
  }

  render(){
    return(
    <div id="method-input-box">
    <textarea id="method-box" placeholder="Add Method">
    </textarea>
    <button onClick={this.handleSubmitMethodButton}>Submit Method</button>
    </div>
    )
  }
}