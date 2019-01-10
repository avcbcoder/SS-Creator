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
