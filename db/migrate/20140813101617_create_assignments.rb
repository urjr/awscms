class CreateAssignments < ActiveRecord::Migration
  def change
    create_table :assignments do |t|
      t.string :title
      t.string :alt_title
      t.string :vimeo_url
      t.text :content
      t.string :due_date

      t.timestamps
    end
  end
end
