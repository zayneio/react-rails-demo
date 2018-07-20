Rails.application.routes.draw do
  devise_for :users
  root 'pages#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope :auth do
    get 'is_signed_in', to: 'auth#is_signed_in?'
  end

  match '*path', to: 'pages#index', via: :all
end
