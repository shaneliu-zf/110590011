function reset(){
    setWidth("300");
    setColor("#FFFFDF");
    setBorder("1");
}
function setColor(color){
    var a = document.getElementsByTagName('td');
    for (var i=0;i<a.length;i++){
        a[i].bgColor = color;
    }
}
function setBorder(w){
    var a = document.getElementsByTagName('td');
    for (var i=0;i<a.length;i++){
        a[i].style.borderWidth = w+'px';
    }
    a = document.getElementsByTagName('th');
    for (var i=0;i<a.length;i++){
        a[i].style.borderWidth = w+'px';
    }
}
function setWidth(h){
    document.getElementById('table').width = h+"px";
}
