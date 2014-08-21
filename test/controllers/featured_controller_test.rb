require 'test_helper'

class FeaturedControllerTest < ActionController::TestCase
  test "should get projects" do
    get :projects
    assert_response :success
  end

  test "should get index" do
    get :index
    assert_response :success
  end

end
