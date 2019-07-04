#!/bin/bash
alias pm2="/root/.nvm/versions/node/v12.4.0/bin/pm2"
pm2 start /home/ubuntu/tekos-flow/start.sh --name tekos-flow
