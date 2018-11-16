Rails.application.routes.draw do
  root 'pages#index'
  post '/contact', to: 'pages#contact'
  match '*path', to: 'pages#index', via: :all
end
