class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

    if @user
        
      login!(@user)
      render :show
    else
      render json: {base: ["Invalid email/password"]}, status: 422
    end
  end

  def destroy
    @user = current_user
    logout!
    render :show
  end

end
