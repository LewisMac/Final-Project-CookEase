class Recipe < ApplicationRecord

  has_many :favourite_recipes
  has_many :favourited, through: :favourite_recipes, source: :user

end
