#!/bin/bash
echo "installing ..."   

apt update

cd /home/ubuntu
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
source .bashrc 
nvm install 12.4.0
git clone git@bitbucket.org:tekos2/tekos-flow.git
apt-get install python2.7    


