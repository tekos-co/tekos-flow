#!/bin/bash

# git clone https://github.com/tekos-co/tekos-flow.git
apt-get install python2.7    
cd /home/ubuntu/tekos-flow
alias npm="/root/.nvm/versions/node/v12.4.0/bin/npm"
npm i
npm i -g pm2
echo "npm start" >> start.sh
export FLOW_LOGIN=admin
export FLOW_PASSWORD=admin

pm2 start /home/ubuntu/tekos-flow/start.sh --name tekos-flow
