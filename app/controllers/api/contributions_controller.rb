class Api::ContributionsController < ApplicationController

  def create
    debugger
    @contribution = Contribution.create(contribution_params)
    if contribution_params[:amount].to_i <= 0
      render json: "Please enter a valid amount.", status: 422
      debugger
    elsif @contribution.save
      render :show
    else
      render json: @contribution.errors.full_messages, status: 422
    end
  end

  def show
    @contrubution = Contribution.find(params[:id])
    render :show
  end

  def contribution_params
    params.permit(:user_id, :reward_id, :amount, :campaign_id, :date)
  end
end
