var Recipe = function(options){
  this.name = options.name;
  this.ingredients = options.ingredients;
  this.method = options.method;
  this.image = options.image;
  this.style = options.style;
  this.course = options.course;
}

Recipe.prototype = {

}

module.exports = Recipe;

// var recipe = new Recipe({
//   name: req.body.name,
//   ingredients: req.body.ingredients,
//   method: req.body.method,
//   image: req.body.image,
//   style: req.body.style,
//   course: req.body.course,
// })