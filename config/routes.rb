Unrefined::Application.routes.draw do
  resources :postings


  authenticated :user do
    root :to => 'home#index'
  end
  root :to => "home#index"
  devise_for :users
  resources :users

  match '/testing', :to => "home#vocal"
  match '/about', :to => "home#about"
  match '/blog', :to => "home#blog"
  match '/contact', :to => "home#contact"

end
