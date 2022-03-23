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

    for( var item of data ){
    element = '<div> Title: ' + item.Title +
        ', id: ' + item.id +
        ', description: '+ item.description+
        '</div>';
    root.innerHTML += element;
    }
}