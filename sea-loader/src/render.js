const retryIC = document.getElementById('retryICbtn');
retryIC.onclick = OnlineReCheck;

const { remote } = require('electron');

async function OnlineReCheck(){
    const isOnline = require('is-online');
    (async () => {
        console.log(await isOnline());
    })();
}