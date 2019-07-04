#!/bin/bash

npm i -g pm2
pm2 start /home/ubuntu/tekos-flow/start.sh --name tekos-flow
