let menu = `<ul
class="nav nav-tabs"
id="navId"
role="tablist"
>
<li class="nav-item">
    <a
        href="index.html"
        class="nav-link active"
        data-bs-toggle="tab"
        aria-current="page"
        >Home</a
    >
</li>
<li class="nav-item dropdown">
    <a
        class="nav-link dropdown-toggle"
        data-bs-toggle="dropdown"
        href="#"
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
        >Estudiantes</a
    >
    <div class="dropdown-menu">
        <a class="dropdown-item" href="ListaEstudiantes.html">Lista</a>
        <a class="dropdown-item" href="CrearEstudiantes.html">Crear</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#tab4Id">Action</a>
    </div>
</li>
<li class="nav-item dropdown">
    <a
        class="nav-link dropdown-toggle"
        data-bs-toggle="dropdown"
        href="#"
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
        >Profesores</a
    >
    <div class="dropdown-menu">
        <a class="dropdown-item" href="ListaProfesores.html">Lista</a>
        <a class="dropdown-item" href="CrearProfesores.html">Crear</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#tab4Id">Action</a>
    </div>
</li>
<li class="nav-item dropdown">
    <a
        class="nav-link dropdown-toggle"
        data-bs-toggle="dropdown"
        href="#"
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
        >Grupos</a
    >
    <div class="dropdown-menu">
        <a class="dropdown-item" href="ListaGrupos.html">Lista</a>
        <a class="dropdown-item" href="CrearGrupos.html">Crear</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#tab4Id">Action</a>
    </div>
</li>
<li class="nav-item dropdown">
    <a
        class="nav-link dropdown-toggle"
        data-bs-toggle="dropdown"
        href="#"
        role="button"
        aria-haspopup="true"
        aria-expanded="false"
        >Cursos</a
    >
    <div class="dropdown-menu">
        <a class="dropdown-item" href="ListaCursos.html">Lista</a>
        <a class="dropdown-item" href="CrearCursos.html">Crear</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#tab4Id">Action</a>
    </div>
</li>
<li class="nav-item" role="presentation">
    <a href="#tab5Id" class="nav-link" data-bs-toggle="tab"
        >Another link</a
    >
</li>
<li class="nav-item" role="presentation">
    <a href="#" class="nav-link disabled" data-bs-toggle="tab"
        >Disabled</a
    >
</li>
</ul>`;

document.getElementById("contenedorMenu").outerHTML = menu;


// SECCION DE PIE DE PAGINA
let pie = `
<div class="container">
<footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p class="col-md-4 mb-0 text-muted">© 2024 Multimedios-01, UCR</p>

    <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
    </a>

    <ul class="nav col-md-4 justify-content-end">
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
    </ul>
</footer>
</div>`;

document.getElementById("footer").innerHTML = pie;