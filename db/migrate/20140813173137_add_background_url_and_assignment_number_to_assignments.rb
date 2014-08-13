class AddBackgroundUrlAndAssignmentNumberToAssignments < ActiveRecord::Migration
  def change
  	add_column :assignments, :background_url, :string
  	add_column :assignments, :assignment_no, :string
  end
end
