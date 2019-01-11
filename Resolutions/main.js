function ss () {
    console.log('hello')
    var download = document.getElementById("download");
    html2canvas(document.body, {
        onrendered: function (canvas) {
            download.setAttribute('href', canvas.toDataURL("image/png"));
            download.setAttribute('download', 'Test file.png');
            download.click();
        }
    })
}

/**
 * nexus -> 
 * skin : 530w 530h
 * ss : 214w 380h
 * d : 72t, 158l
 */

/**
 * nexus4 -> 
 * skin : 700w 740h
 * ss : 270w 474h
 * d : 130t, 214l
 */

/**
 * pixel-blue,black,silver -> 
 * skin : 749w
 * ss : 276w 494h
 * d : 116t, 234l
 */

