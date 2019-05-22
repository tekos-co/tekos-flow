var http = require('http');
var express = require("express");
var RED = require("node-red");
const bodyParser = require('body-parser')
const axios = require('axios');
// Create an Express app
var app = express();
app.use(bodyParser.json({limit: '20mb'}))
// Add a simple route for static content served from 'public'
// app.use("/",express.static("public"));

// Create a server
var server = http.createServer(app);

// Create the settings object - see default settings.js file for other options
var settings = {
    // httpAdminRoot: "/"+process.env.USER_TOKEN+"/red",
    httpAdminRoot: "/",
    httpNodeRoot: "/",
    userDir: process.env.DATA_FOLDER || "./data",
    flowFile: 'flows_tekos-prod.json',
    editorTheme: {
        page: {
            title: "Tekos Flow",
            favicon: "/data/assets/tekos_logo.png",
            css: "/data/assets/tekos.css"
        },
        header: {
            title: " ",
            image: "/data/assets/logo_chat.png", // or null to remove image
        },
        
        login: {
            image: "/data/assets/tekos_logo.png" // a 256x256 image
        },
         menu: { 
            "menu-item-node-red-version": false,
            "menu-item-user-settings": true,
            "menu-item-keyboard-shortcuts": true,
            "menu-item-edit-palette": true,
            "menu-item-keyboard-shortcuts": false,
            "menu-item-help": {
                label: "Tekos Website",
                url: "http://tekos.co"
            }
        },
    },


    httpNodeCors: { origin: "*", methods: ['GET','PUT','POST','DELETE','OPTIONS'] },
    paletteCategories: ["Dialogue","Action","Push_Notification","Appearance","Natural_Language_Processing","Channels","Text_To_Speech","Payment","input","function","output","Analytics","APIs","Data","Developer_Tools","Hanna_App","Hanna_Auth","Hanna_Platforms"]



};


// settings.adminAuth = require('./user-auth')();

if(process.env.RED_USERNAME){

        settings.adminAuth= {
            type: "credentials",
            users: [{
                    username: process.env.RED_USERNAME,
                    password: require('bcryptjs').hashSync(process.env.RED_PASSWORD, 8),
                    permissions: "*"
                }/*,
                {
                    username: 'admin',
                    password: '$2b$08$fhUdVPOJH3ntAZIDqfj7vuoYJ4EEpv/wBicKodGHOEzlHt84BnwHm',
                    permissions: '*'
                }*/
            ]
        }
}

// Initialise the runtime with a server and settings
RED.init(server,settings);

// Serve the editor UI from /red
app.use(settings.httpAdminRoot,RED.httpAdmin);

// Serve the http nodes UI from /api
app.use(settings.httpNodeRoot,RED.httpNode);

server.listen(process.env.PORT || 8000);

// Start the runtime
RED.start();


app.get('/userapp/:ip', (req,res)=>{
    // get location
    axios.get('http://ip-api.com/json/'+req.params.ip).then(resp => {
        
        res.json({appName: process.env.CHAT_APP_NAME,user_id: process.env.USER_ID, email: process.env.RED_OWNER_EMAIL, location: resp.data})
    })
})
