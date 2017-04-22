class RecipesController < ApplicationController

  def index
    recipes = Recipe.all();
    render({ json: recipes })
  end

  def show
    recipe = Recipe.find(params[:id])
    render({ json: recipe})
  end

  def create
    recipe = Recipe.create( recipe_params )
    render json: recipe
  end

  def recipe_params
    params.require(:recipe).permit([:name, :ingredients, :method, :image, :style, :course])
  end

end