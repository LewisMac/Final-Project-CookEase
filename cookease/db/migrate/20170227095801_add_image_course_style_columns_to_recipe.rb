class AddImageCourseStyleColumnsToRecipe < ActiveRecord::Migration[5.0]
  def change
    add_column :recipes, :image, :string
    add_column :recipes, :style, :string
    add_column :recipes, :course, :string
  end
end
