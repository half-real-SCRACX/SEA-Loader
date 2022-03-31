const loadBtn = document.getElementById('loadBtn');
const { remote , ipcRenderer } = require('electron');


// get available textures from GitHub and list them on screen
function getInfo(){
    var data = [ // Pull the available textures. Only for testing. In the future, this will be pulled from a GitHub repo.
        {
            "id":"01",
            "Title":"Test texture 1",
            "description":"Actual texture",
            "URL":"https://gitcdn.link/cdn/half-real-SCRACX/Textures-for-Townscaper/main/Textures/01/"
        },
        {
            "id":"02",
            "Title":"Test texture 2",
            "description":"Actual texture. Same as One.",
            "URL":"https://gitcdn.link/cdn/half-real-SCRACX/Textures-for-Townscaper/main/Textures/01/"
        }
        ]
    var root = document.getElementById('container'); // inject the elements in the container div, with buttons with the current arguments
    for( var item of data ){
    element = '<div>Title: ' + item.Title +
        ', id: ' + item.id +
        ', description: '+ item.description+
        '<button onclick="downloadRequestedTexture('+ item.URL + ');">' + item.Title + '</>'
        '</div>';
    root.innerHTML += element;
    }
}

// download the texture
function downloadRequestedTexture(fileToDownload){
// find needed path
var userName = process.env['USERPROFILE'].split(path.sep)[2];
const fs = require('fs');
const textureFolder = 'C:/Users/'+userName+'/AppData/LocalLow/Oskar Stalberg/Townscaper/Textures';

// actually download the file
var exactURL1 = 'https://raw.githubusercontent.com/half-real-SCRACX/Textures-for-Townscaper/main/Textures/' + fileToDownload + '/TownMaterial.png';
var exactURL2 = 'https://raw.githubusercontent.com/half-real-SCRACX/Textures-for-Townscaper/main/Textures/' + fileToDownload + '/TownPalette.png';
var exactURL3 = 'https://raw.githubusercontent.com/half-real-SCRACX/Textures-for-Townscaper/main/Textures/' + fileToDownload + '/TownColor.png';
}

ipcRenderer.send("download", {
    url: 'https://raw.githubusercontent.com/half-real-SCRACX/Textures-for-Townscaper/main/Textures/01/' + 'TownColor.png',
    properties: {directory: 'C:/Users/' + userName + '/AppData/LocalLow/Oskar Stalberg/Townscaper/Textures'}
});
ipcRenderer.send("download", {
    url: 'https://raw.githubusercontent.com/half-real-SCRACX/Textures-for-Townscaper/main/Textures/01/' + 'TownPalette.png',
    properties: {directory: 'C:/Users/' + userName + '/AppData/LocalLow/Oskar Stalberg/Townscaper/Textures'}
});
ipcRenderer.send("download", {
    url: 'https://raw.githubusercontent.com/half-real-SCRACX/Textures-for-Townscaper/main/Textures/01/' + 'TownColor.png',
    properties: {directory: 'C:/Users/' + userName + '/AppData/LocalLow/Oskar Stalberg/Townscaper/Textures'}
});