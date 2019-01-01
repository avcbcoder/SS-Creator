function transform() {
    return `scale(${scale}) rotate(${angle}deg)`
}

var angle=-15, gapEle=60, gapCon=30,scale=1.20;

window.onload = function () {
    var a = document.getElementById("A");
    var b = document.getElementById("B");
    var c = document.getElementById("C");
    var d = document.getElementById("D");
    var e = document.getElementById("E");
    var f = document.getElementById("F");
    var top = document.getElementById("TOP");
    var bottom = document.getElementById("BOTTOM");
    top.style.transform = transform()
    bottom.style.transform = transform()

    b.style.marginLeft=`${gapEle}px`;
    c.style.marginLeft=`${gapEle}px`;
    
    e.style.marginRight=`${gapEle}px`;
    f.style.marginRight=`${gapEle}px`;
}