import React from "react"

export default class Image extends React.Component{
  render(){
    return(
    <div id="image-input-box">
    <input type="file" id="image-box" name="pic" accept="image/*">
    </input>
    </div>
    )
  }
}