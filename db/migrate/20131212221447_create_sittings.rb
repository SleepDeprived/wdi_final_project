class CreateSittings < ActiveRecord::Migration
  def change
    create_table :sittings do |t|
      t.integer :user_id
      t.integer :location_id
      t.datetime :start_time
      t.datetime :end_time
      t.boolean :commit_clock_on
      t.integer :commit_clock_duration
      t.string :session_end_type

      t.timestamps
    end
  end
end
