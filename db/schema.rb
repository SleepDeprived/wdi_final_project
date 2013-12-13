# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20131212223102) do

  create_table "locations", :force => true do |t|
    t.string   "name"
    t.float    "latitude"
    t.float    "longitude"
    t.text     "address"
    t.string   "address_detail"
    t.string   "city"
    t.string   "state"
    t.integer  "zipcode"
    t.integer  "rating"
    t.text     "description"
    t.string   "hours_of_operation"
    t.datetime "created_at",         :null => false
    t.datetime "updated_at",         :null => false
  end

  create_table "sittings", :force => true do |t|
    t.integer  "user_id"
    t.integer  "location_id"
    t.datetime "start_time"
    t.datetime "end_time"
    t.boolean  "commit_clock_on"
    t.integer  "commit_clock_duration"
    t.string   "session_end_type"
    t.datetime "created_at",            :null => false
    t.datetime "updated_at",            :null => false
  end

  create_table "users", :force => true do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "github_login"
    t.string   "uid"
    t.string   "provider"
    t.string   "email"
    t.string   "oauth_token"
    t.datetime "oauth_expires_at"
    t.datetime "created_at",       :null => false
    t.datetime "updated_at",       :null => false
  end

end
