

function date(){
    var dat = new Date();
    var d = dat.getDate();
    var m = dat.getMonth()+1;
    var y = dat.getFullYear();
    document.getElementById('d').innerHTML = d;
    document.getElementById('m').innerHTML = m;
    document.getElementById('y').innerHTML = y;
}