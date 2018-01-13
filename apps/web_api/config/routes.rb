get '/auth/failure', to: 'sessions#failure'
get '/auth/signout', to: 'sessions#destroy'

get '/auth/:provider/callback', to: 'sessions#create'

resources :stories, only: [:index, :create, :destroy]
resource :profile, only: [:show, :update]