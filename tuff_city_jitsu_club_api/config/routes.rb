Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # Because we are using the API ontrollers, we use namespace to interface them for routes
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resource :session, only: [:create, :destroy]
      # -> api/v1/users
      resources :users, shallow: true, only: [:create, :new, :show, :index] do
        # -> api/v1/users/current
        get :current, on: :collection 
        # -> /api/v1/user/:id/current
      end
    end
  end
end