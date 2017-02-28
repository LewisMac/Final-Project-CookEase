class IngredientsController < ApplicationController
  def index
    ingredients = Ingredient.all();
    render({ json: ingredients })
  end

  def create
    ingredient = Ingredient.create( ingredient_params )
    render({ json: ingredient })
  end

  def ingredient_params
    params.require(:ingredient).permit([:name])
  end

end