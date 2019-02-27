Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users, only: [:new, :create, :edit, :update]

  resources :users do
    member do
      get "pwedit"
      patch "pwupdate"
    end
  end

  resource :session, only: [:new, :create, :destroy]

  resources :posts do
    resources :comments, only: [:create, :destroy]
  end

  get("/", to: "posts#index", as: :root)
  # get("/posts", to: "posts#index")

  # get("/posts/new", to: "posts#new", as: :new_post)
  # post("/posts", to: "posts#create")

  # get("/posts/:id", to: "posts#show", as: :post)
  # get("/posts/:id/edit", to: "posts#edit", as: :edit_post)
  # patch("/posts/:id", to: "posts#update")
  # delete("/posts/:id", to: "posts#destroy")

end
