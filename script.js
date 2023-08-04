btnGerar = document.querySelector('#gerarQR').addEventListener('click', gerarQRCode)

function gerarQRCode() {
    var info = document.querySelector('textarea').value;
    var error = document.querySelector('#errorCollection').value;
    var gChartAPI = `https://chart.googleapis.com/chart?cht=qr&chs=250x250&chld=${error}&chl=`;
    var source = gChartAPI + encodeURIComponent(info);
    document.querySelector('#QRImage').src = source;
    console.log(source);
}