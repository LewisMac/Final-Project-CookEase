Rails.application.routes.draw do
  devise_for :users
  scope({path: "api"}){
    resources :recipes
    resources :ingredients
    resources :favourite_recipes
  }
end
