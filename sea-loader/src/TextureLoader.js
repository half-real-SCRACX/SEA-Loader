const loadBtn = document.getElementById('loadBtn');

const { remote } = require('electron');


// get available textures from GitHub and list them on screen

function getInfo(){
    var data = [
        {
            "id":"01",
            "Title":"1",
            "description":"lorem ipsum",
            "URL":"example.com/1"
        },
        {
            "id":"02",
            "Title":"2",
            "description":"lorem ipsum",
            "URL":"example.com/2"
        }
        ]
    var root = document.getElementById('container');

    for( var item of data ){
    element = '<div> Title: ' + item.Title +
        ', id: ' + item.id +
        ', description: '+ item.description+
        '<button onclick="downloadRequested(' + item.id + ')">' + item.Title + '</>'
        '</div>';
    root.innerHTML += element;
    }
}