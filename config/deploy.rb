#add bundler support
require 'bundler/capistrano'
set :application, "yanzhao_website"
#set :repository,  "git://github.com/chengdh/il_yanzhao.git"
set :repository, "."
set :local_repository, "file:///media//WORK/yanzhao_website/.git"
#set :local_repository, "file://f:/il_yanzhao/.git"
set :deploy_via, :copy
set :copy_cache, true
#
#set :repository,  "file:///media//WORK/il_yanzhao/.git"

set :scm, :git
set :branch,:master
# Or: `accurev`, `bzr`, `cvs`, `darcs`, `git`, `mercurial`, `perforce`, `subversion` or `none`

#role :web, "your web-server here"                          # Your HTTP server, Apache/etc
#role :app, "your app-server here"                          # This may be the same as your `Web` server
#role :db,  "your primary db-server here", :primary => true # This is where Rails migrations will run
#role :db,  "your slave db-server here"
server "www.yanzhaowuliu.com",:app,:web,:db,:primary => true

set :user,"root"
set :use_sudo,false
default_run_options[:pty]=true

#set rvm support
set :default_environment, {
  'PATH' => "/usr/local/rvm/gems/ree-1.8.7-2011.03/bin:/usr/local/rvm/bin:$PATH",
  'RUBY_VERSION' => 'ree 1.8.7',
  'GEM_HOME'     => '/usr/local/rvm/gems/ree-1.8.7-2011.01@rails2_gemset',
  'GEM_PATH'     => '/usr/local/rvm/gems/ree-1.8.7-2011.03:/usr/local/rvm/gems/ree-1.8.7-2011.01@rails2_gemset',
  'BUNDLE_PATH'     => '/usr/local/rvm/gems/ree-1.8.7-2011.03'
}
# If you are using Passenger mod_rails uncomment this:
# if you're still using the script/reapear helper you will need
# these http://github.com/rails/irs_process_scripts

namespace :deploy do
  task :start do ; end
  task :stop do ; end
  task :restart, :roles => :app, :except => { :no_release => true } do
    run "#{try_sudo} touch #{File.join(current_path,'tmp','restart.txt')}"
  end
  desc "安装extensions"
  task :install_extensions,:role => :web do
    run "cd #{deploy_to}/current && git submodule init"
  end
  after "deploy:symlink", "deploy:install_extensions"
end
