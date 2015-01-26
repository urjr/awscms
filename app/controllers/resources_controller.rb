class ResourcesController < ApplicationController
  before_action :find_assignment

  def index
  end

  def new
  	@resource = @assignment.resources.new
  end

  def create
  	@resource = @assignment.resources.new(resource_params)
  	if @resource.save
  		flash[:success] = "Added resource!"
  		redirect_to assignment_resources_path
  	else
  		flash[:error] = "There was a problem with your request"
  		render action: :new
  	end
  end

  def edit
  	@resource = @assignment.resources.find(params[:id])
  end

  def update
  	@resource = @assignment.resources.find(params[:id])
  	if @resource.update_attributes(resource_params)
  		flash[:success] = "Saved resource!"
  		redirect_to assignment_resources_path
  	else
  		flash[:error] = "An error occured"
  		render action: :edit
  	end
  end

  def destroy
   	@resource = @assignment.resources.find(params[:id])
   	if @resource.destroy
   		flash[:success] = "resource was deleted"
   	else
   		flash[:error] = "there was a mistake"
   	end
   		redirect_to assignment_resources_path
  end

  def url_options
  	{ assignment_id: params[:assignment_id] }.merge(super)
  end

  private

  def find_assignment
  	@assignment = Assignment.find(params[:assignment_id])
  end
  def resource_params
  	params[:resource].permit(:name, :link)
  end

end