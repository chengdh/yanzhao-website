# This file is auto-generated from the current state of the database. Instead of editing this file, 
# please use the migrations feature of Active Record to incrementally modify your database, and
# then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your database schema. If you need
# to create the application database on another system, you should be using db:schema:load, not running
# all the migrations from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20091003095744) do

  create_table "assets", :force => true do |t|
    t.column "caption", :string
    t.column "title", :string
    t.column "asset_file_name", :string
    t.column "asset_content_type", :string
    t.column "asset_file_size", :integer
    t.column "created_by_id", :integer
    t.column "updated_by_id", :integer
    t.column "created_at", :datetime
    t.column "updated_at", :datetime
  end

  create_table "config", :force => true do |t|
    t.column "key", :string, :limit => 40, :default => "", :null => false
    t.column "value", :string, :default => ""
  end

  add_index "config", ["key"], :name => "key", :unique => true

  create_table "extension_meta", :force => true do |t|
    t.column "name", :string
    t.column "schema_version", :integer, :default => 0
    t.column "enabled", :boolean, :default => true
  end

  create_table "google_maps", :force => true do |t|
    t.column "name", :string, :null => false
    t.column "description", :string
    t.column "center", :point, :null => false
    t.column "zoom", :integer
    t.column "created_at", :datetime
    t.column "updated_at", :datetime
    t.column "created_by_id", :integer
    t.column "updated_by_id", :integer
    t.column "style", :integer
  end

  create_table "layouts", :force => true do |t|
    t.column "name", :string, :limit => 100
    t.column "content", :text
    t.column "created_at", :datetime
    t.column "updated_at", :datetime
    t.column "created_by_id", :integer
    t.column "updated_by_id", :integer
    t.column "content_type", :string, :limit => 40
    t.column "lock_version", :integer, :default => 0
  end

  create_table "markers", :force => true do |t|
    t.column "google_map_id", :integer, :null => false
    t.column "name", :string, :null => false
    t.column "title", :string, :null => false
    t.column "content", :text
    t.column "position", :point, :null => false
    t.column "filter_id", :string, :limit => 25
    t.column "created_at", :datetime
    t.column "updated_at", :datetime
    t.column "created_by_id", :integer
    t.column "updated_by_id", :integer
    t.column "zoom", :integer
  end

  create_table "page_attachments", :force => true do |t|
    t.column "asset_id", :integer
    t.column "page_id", :integer
    t.column "position", :integer
  end

  create_table "page_parts", :force => true do |t|
    t.column "name", :string, :limit => 100
    t.column "filter_id", :string, :limit => 25
    t.column "content", :text
    t.column "page_id", :integer
  end

  add_index "page_parts", ["page_id", "name"], :name => "parts_by_page"

  create_table "pages", :force => true do |t|
    t.column "title", :string
    t.column "slug", :string, :limit => 100
    t.column "breadcrumb", :string, :limit => 160
    t.column "class_name", :string, :limit => 25
    t.column "status_id", :integer, :default => 1, :null => false
    t.column "parent_id", :integer
    t.column "layout_id", :integer
    t.column "created_at", :datetime
    t.column "updated_at", :datetime
    t.column "published_at", :datetime
    t.column "created_by_id", :integer
    t.column "updated_by_id", :integer
    t.column "virtual", :boolean, :default => false, :null => false
    t.column "lock_version", :integer, :default => 0
    t.column "description", :string
    t.column "keywords", :string
  end

  add_index "pages", ["class_name"], :name => "pages_class_name"
  add_index "pages", ["parent_id"], :name => "pages_parent_id"
  add_index "pages", ["slug", "parent_id"], :name => "pages_child_slug"
  add_index "pages", ["virtual", "status_id"], :name => "pages_published"

  create_table "sessions", :force => true do |t|
    t.column "session_id", :string
    t.column "data", :text
    t.column "updated_at", :datetime
  end

  add_index "sessions", ["session_id"], :name => "index_sessions_on_session_id"
  add_index "sessions", ["updated_at"], :name => "index_sessions_on_updated_at"

  create_table "snippets", :force => true do |t|
    t.column "name", :string, :limit => 100, :default => "", :null => false
    t.column "filter_id", :string, :limit => 25
    t.column "content", :text
    t.column "created_at", :datetime
    t.column "updated_at", :datetime
    t.column "created_by_id", :integer
    t.column "updated_by_id", :integer
    t.column "lock_version", :integer, :default => 0
  end

  add_index "snippets", ["name"], :name => "name", :unique => true

  create_table "users", :force => true do |t|
    t.column "name", :string, :limit => 100
    t.column "email", :string
    t.column "login", :string, :limit => 40, :default => "", :null => false
    t.column "password", :string, :limit => 40
    t.column "created_at", :datetime
    t.column "updated_at", :datetime
    t.column "created_by_id", :integer
    t.column "updated_by_id", :integer
    t.column "admin", :boolean, :default => false, :null => false
    t.column "designer", :boolean, :default => false, :null => false
    t.column "notes", :text
    t.column "lock_version", :integer, :default => 0
    t.column "salt", :string
    t.column "session_token", :string
    t.column "locale", :string
  end

  add_index "users", ["login"], :name => "login", :unique => true

end
