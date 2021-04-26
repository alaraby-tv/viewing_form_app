Rails.application.routes.draw do
  namespace :admin do
    resources :users
    resources :parts
    resources :viewing_forms

    root to: "users#index"
  end
  resources :parts
  resources :viewing_forms
  root 'home#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
