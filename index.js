var http = require('http');
var express = require("express");
var RED = require("node-red");
const bodyParser = require('body-parser')
const axios = require('axios');
const path = require('path')
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
    userDir: "./data",
    flowFile: 'flows.json',
    editorTheme: {
        page: {
            title: "Tekos Flow",
            favicon: __dirname+"/data/assets/tekos_logo.png",
            css: __dirname+"/data/assets/tekos.css"
        },
        header: {
            title: " ",
            image: __dirname+"/data/assets/logo_chat.png", // or null to remove image
        },
        
        login: {
            image: __dirname+"/data/assets/tekos_logo.png" // a 256x256 image
        },
         menu: { 
            "menu-item-node-red-version": false,
            "menu-item-user-settings": false,
            "menu-item-keyboard-shortcuts": false,
            "menu-item-edit-palette": false,
            "menu-item-keyboard-shortcuts": false,
            "menu-item-help": {
                label: "Tekos Website",
                url: "http://tekos.co"
            }
        },
    },


    httpNodeCors: { origin: "*", methods: ['GET','PUT','POST','DELETE','OPTIONS'] },
    paletteCategories: ["Dialogue","Action","Push_Notification","Appearance","Natural_Language_Processing","Channels","Text_To_Speech","Payment","input","function","output","Analytics","APIs","Data","Developer_Tools","Hanna_App","Hanna_Auth","Hanna_Platforms"],
    contextStorage: {
       default: {
           module:"localfilesystem",
           config: {
               dir: './data'

           }
       }
    }


};


//settings.adminAuth = require('./user-auth')();

if(process.env.FLOW_LOGIN){

        settings.adminAuth= {
            type: "credentials",
            users: [{
                    username: process.env.FLOW_LOGIN,
                    password: require('bcryptjs').hashSync(process.env.FLOW_PASSWORD, 8),
                    permissions: "*"
                }
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


