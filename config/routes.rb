Rails.application.routes.draw do
  resources :viewing_forms
  root 'home#index'
  get '/index' => 'home#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
