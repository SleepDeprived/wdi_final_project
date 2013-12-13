class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :github_username
      t.string :uid
      t.string :provider
      t.string :name
      t.string :email
      t.text :github_image
      t.string :oauth_token
      t.datetime :oauth_expires_at

      t.timestamps
    end
  end
end
