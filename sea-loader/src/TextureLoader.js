const loadBtn = document.getElementById('loadBtn');

const { remote } = require('electron');


// get available textures from GitHub

function getInfo(){
    var data = [
        {
            "id":"1",
            "Title":"1",
            "description":"lorem ipsum",
            "URL":"example.com/1"
        },
        {
            "id":"2",
            "Title":"2",
            "description":"lorem ipsum",
            "URL":"example.com/2"
        }
        ]
    var root = document.getElementById('container');

    for( var key in data ){
    element = '<div> Title: ' + data[key].Title +
        ', id: ' + data[key].id +
        ', description: '+ data[key].description+
        '</div>';
    root.innerHTML += element;
    }
}