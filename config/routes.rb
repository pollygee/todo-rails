Rails.application.routes.draw do
  devise_for :users

  resources :lists do
    resource :tasks
  end

  root to: 'lists#index'
end
