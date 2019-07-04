#!/bin/bash

cd /home/ubuntu/tekos-flow
npm i
npm i -g pm2
echo "npm start" >> start.sh
echo "export FLOW_LOGIN=admin" >> /root/.bashrc
echo "export FLOW_PASSWORD=admin" >> /root/.bashrc
source /root/.bashrc
