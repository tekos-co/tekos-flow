source /root/.bashrc
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# git clone https://github.com/tekos-co/tekos-flow.git
apt-get install python2.7    
cd /home/ubuntu/tekos-flow

npm i
npm i -g pm2
echo "npm start" >> start.sh


