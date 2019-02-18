class PostsController < ApplicationController

  def index 
    @posts = Post.all 
  end

  def show
  end

  def new
    @title = params[:title]
    @body = params[:body]
  end

end
