class PostsController < ApplicationController

  def index 
  end

  def show
  end

  def new
    @title = params[:title]
    @body = params[:body]
  end

end
