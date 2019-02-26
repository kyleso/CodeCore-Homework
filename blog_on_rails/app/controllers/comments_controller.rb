class CommentsController < ApplicationController
  before_action :authenticated_user!
  
  def create
    @post = Post.find params[:post_id]
    @new_comment = Comment.new comment_params
    @new_comment.post = @post
    @new_comment.user = current_user
    if @new_comment.save
      redirect_to post_url(@post.id)
    else
      @comments = @post.comments.order(created_at: :desc)
      render "posts/show"
    end
  end

  def destroy
    @comment = Comment.find params[:id]
    @comment.destroy
    redirect_to post_url(@comment.post)
  end

  private
  def comment_params
    params.require(:comment).permit(:body)
  end
end
