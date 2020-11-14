
function fillps() {
    var gmlist = mydata.ps.list;
    gmlist.sort();
    var fulltext = '';
    for(x of gmlist){
        fulltext += '<div class="grid-item">' + x + '</div>'
    }
    document.getElementById("ps").innerHTML = fulltext;
}

function fillnes() {
    var gmlist = mydata.nes.list;
    gmlist.sort();
    var fulltext = '';
    for(x of gmlist){
        fulltext += '<div class="grid-item">' + x + '</div>'
    }
    document.getElementById("nes").innerHTML = fulltext;
}

function fillnes2() {
    var gmlist = mydata.nes.list;
    gmlist.sort();
    var fulltext = '';
    for(x of gmlist){
        fulltext += '<div class="grid-item">' + x + '</div>'
    }
    document.getElementById("nes2").innerHTML = fulltext;
}