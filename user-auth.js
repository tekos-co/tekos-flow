const appName = process.env.CHAT_APP_NAME;
const ownerEmail = process.env.RED_OWNER_EMAIL;
const axios = require('axios');
axios.defaults.baseURL = process.env.API_SERVER || "https://api.tekos.co";

let listUsers = [{username: 'admin',permissions: '*'},{username: ownerEmail, permissions: '*'}]
function userInList(list, username){
  let indexUser = list.findIndex(u => u.username == username);
  return (indexUser !== -1) ? indexUser : false;
}
module.exports = function(){
  return {
    type: 'credentials',
    users: function(username) {
       return new Promise(function(resolve) {
            resolve(listUsers[1])
       });
    },
    authenticate: function(username,password) {
       return new Promise(function(resolve) {
           
           if(username==='admin' && password===process.env.RED_ADMIN_PASSWORD){
            resolve({username: 'admin',permissions: '*'})
            return;
           }  
           axios.post('/login',{email: username, password: password}).then(res => {
            if(res.data.success){
              if(userInList(listUsers,username) === false){
                   resolve(null);
                   return;
              }
              let user = {username: username, permissions: '*'}
              resolve(user)
            
            }else{
              resolve(null)
            }
           }).catch(err =>{
              // console.log(err)  
              resolve(null)
           })
          
       });
    }
  }
}
