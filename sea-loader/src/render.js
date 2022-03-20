const loadBtn = document.getElementById('loadBtn');
loadBtn.onclick = loadPre;

const { remote } = require('electron');

// needed vars
let isDir = 0;
let isOnlineVar = 0;

// do this when loadBtn is pressed
function loadPre(){
    checkdir()
    if(isDir == 0){dirMake()}
    OnlineCheck()
    location.replace("loadTextures.html");
}

//---------------------------------------
// functions that loadPre() uses

// is user online?
async function OnlineCheck(){
    const isOnline = require('is-online');
    (async () => {
        if(await isOnline() == true){
        isOnlineVar = 1;
        } else {isOnlineVar = 0;}
        console.log(isOnlineVar);
    })();
}


// checkdir
function checkdir(){
const fs = require('fs');
var path = require('path');
var userName = process.env['USERPROFILE'].split(path.sep)[2];

const dir = 'C:/Users/'+userName+'/AppData/LocalLow/Oskar Stalberg/Townscaper/Textures';

if (fs.existsSync(dir)) {
    console.log('Directory exists!');
    isDir = 1;
} else {
    console.log('Directory not found.');
    isDir = 0
}
}

// dirMake
function dirMake(){
    var userName = process.env['USERPROFILE'].split(path.sep)[2];
    console.log(userName);

    const fs = require('fs');

    // directory path
    const dir = 'C:/Users/'+userName+'/AppData/LocalLow/Oskar Stalberg/Townscaper/Textures';

    // create new directory
    fs.mkdir(dir, (err) => {
        if (err) {
            throw err;
        }
        console.log("Directory is created.");
    });
}