dim objShell 
instantrails="D:\instantrails\InstantRails.exe"
mongrel="D:\instantrails\ruby\bin\mongrel_rails start -n cookbook -c D:\instantrails\rails_apps\cookbook -p
3001 –e development"
set objShell=wscript.createObject("wscript.shell")
iInstantrails=objShell.Run(instantrails)
iMongrel=objShell.Run(mongrel)
set objShell=nothing
