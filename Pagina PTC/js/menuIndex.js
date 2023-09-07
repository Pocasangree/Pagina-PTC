function generarMenuIndex()
{
    const menuIndex= `<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
        <a href="#" class="navbar-brand"> <span class="text-primary">Stellars</span>Wheels</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarS"
            aria-controls="navbarS" aria-expanded="false" aria-label="Toggle navigation"><span
                class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarS">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class=" nav-item">
                    <a href="index.html" class="nav-link">Inicio</a>
                </li>
                <li class=" nav-item">
                    <a href="paginas/Sobre Nosotros.html" class="nav-link">Sobre nosotros</a>
                </li>
                <li class=" nav-item">
                    <a href="paginas/Contactanos.html" class="nav-link">Contactanos</a>
                </li>
                <li class=" nav-item">
                    <a href="paginas/Licencia.html" class="nav-link">Licencia</a>
                </li>
                <li class=" nav-item">
                    <a href="paginas/TematicaPTC.html" class="nav-link">Tematica PTC</a>
                </li>
            </ul>
        </div>
    </div>
</nav>`;

return menuIndex;
}