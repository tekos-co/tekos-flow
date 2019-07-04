#!/bin/bash

apt update

cd /home/ubuntu
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
source /root/.bashrc 
nvm install 12.4.0
rm -rf tekos-flow
git clone https://github.com/tekos-co/tekos-flow.git
apt-get install python2.7    


cd /home/ubuntu/tekos-flow
npm i
npm i -g pm2
echo "npm start" >> start.sh
echo "export FLOW_LOGIN=admin" >> /root/.bashrc
echo "export FLOW_PASSWORD=admin" >> /root/.bashrc
source /root/.bashrc
pm2 start /home/ubuntu/tekos-flow/start.sh --name tekos-flow
