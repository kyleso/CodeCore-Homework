class PostsController < ApplicationController

  def new
    @post = Post.new
  end

  def create
    @post = Post.new post_params
    if @post.save
      redirect_to post_path(@post.id)
    else
      render :new
    end
  end

  def index 
    @posts = Post.all.order(created_at: :desc) 
  end

  def show
    @post = Post.find(params[:id])
  end

  def edit
    @post = Post.find(params[:id])
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy 
    redirect_to posts_path
  end

  private_methods
  
  def post_params
    params.require(:post).permit(:title, :body)
  end

end
