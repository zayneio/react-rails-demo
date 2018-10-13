Rails.application.routes.draw do

  root 'pages#index'
  
  resources :todos
  resources :lists

  get 'contacts', to: "contacts#index"
  match '*path', to: 'pages#index', via: :all

end
