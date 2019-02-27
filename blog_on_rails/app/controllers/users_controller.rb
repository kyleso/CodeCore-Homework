class UsersController < ApplicationController
  before_action :authenticated_user!, only: [:edit, :update, :pwedit, :pwupdate]
  before_action :find_user, only: [:edit, :update, :pwedit, :pwupdate]
  before_action :authorize_user!, only: [:edit, :update, :pwedit, :pwupdate]

  def new
    @user = User.new
  end

  def create
    @user = User.new user_params
    if @user.save
      session[:user_id] = @user.id
      flash[:alert] = "Signed Up Successfully!"
      redirect_to root_path
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @user.update user_params
      flash[:alert] = "Info Updated"
      redirect_to root_path
    else
      render :edit
    end
  end

  def pwedit
  end

  def pwupdate
    if current_user and current_user.authenticate(params[:current_password])
      if params[:new_password] != params[:current_password] && params[:new_password] == params[:new_password_confirmation]
        @user.password = params[:new_password]
        @user.save
        flash[:alert] = "Password Changed Successfully"
        redirect_to root_path
      else
        flash[:alert] = "You Entered Something Incorrectly"
        render :pwedit
      end
    else
      flash[:alert] = "Current Password is Incorrect"
      render :pwedit
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :name, :email, :password, :password_confirmation
    )
  end

  def find_user
    @user = User.find(params[:id])
  end

  def authorize_user!
    redirect_to root_path, alert: "Access Denied" unless can? :update, @user
  end
end
