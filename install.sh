#!/bin/bash

apt update

cd /home/ubuntu
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

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
