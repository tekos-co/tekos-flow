source /root/.bashrc
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

export FLOW_LOGIN=admin
export FLOW_PASSWORD=admin

cd /home/ubuntu/tekos-flow
pm2 delete -s tekos-flow || :
pm2 start -f start.sh --name tekos-flow
