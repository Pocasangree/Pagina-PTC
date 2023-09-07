document.addEventListener('DOMContentLoaded',  function(){
    const contenedorFooter=document.getElementById("contenedorFooter");
    const menuHTML = generarFooterPages();

    contenedorFooter.innerHTML = menuHTML
})