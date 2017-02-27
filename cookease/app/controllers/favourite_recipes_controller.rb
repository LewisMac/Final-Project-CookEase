class FavouriteRecipesController < ApplicationController

  before_action :authenticate_user!

  def index
    @favourite_recipes = current_user.favourites.as_json
    render({ json: @favourite_recipes })
  end

end