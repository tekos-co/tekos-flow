#!/bin/bash

cd /home/ubuntu/tekos-flow
npm i
npm i -g pm2
echo "npm start" >> start.sh
echo "export FLOW_LOGIN=admin\nexport FLOW_PASSWORD=admin" >> .bashrc
source .bashrc
