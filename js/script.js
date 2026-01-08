window.addEventListener("DOMContentLoaded",function() {

    let iframeMusica = document.getElementById("iframeMusica");
    let selectMusica = document.getElementById("selectMusica");
    let spanTitulo = document.getElementById("spanTitulo");

    function resizeIframe() {
        iframeMusica.style.height = parseInt(iframeMusica.clientWidth * 9 / 16) + "px";
    }
    window.addEventListener('resize', function () {
        resizeIframe();
    });
    resizeIframe();
    
    // seleção da música
    selectMusica.addEventListener("change", function(e) {

        let url = 'https://www.youtube.com/embed/' + this.value + '?controls=0';
        iframeMusica.src = url;

        spanTitulo.innerHTML = e.target[this.selectedIndex].innerText;

        document.getElementById("btnCloseOffCanvas").click();
    });
});
