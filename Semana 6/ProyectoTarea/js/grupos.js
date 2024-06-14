// PROPIEDADES INICIO
let datosT = document.querySelector('#datosTabla');

let mensajesSistema = document.querySelector('#mensajesSistema');

// FORMULARIO AGREGAR
let formulario = document.getElementById('formulario');
let formularioEditar = document.getElementById('formularioEditar');

let nombrePagina = document.title;
let nombreModuloListar = "Grupos";
let nombreModuloCrear = "Crear Grupos";



// PROPIEDADES API
let url = "https://paginas-web-cr.com/Api/apis/";
let listar = "ListaGrupo.php";
let insertar = "InsertarGrupo.php";
let actualizar = "ActualizarGrupo.php";
let borrar = "BorrarGrupo.php";
let modalEditar;
let modalEliminar;



let spinner = `
                <button class="btn btn-primary" type="button" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
                </button>
                `;
// PROPIEDADES FIN

// EVENTOS INICIO

// LISTO INSERTAR
if (nombrePagina == nombreModuloCrear) {
    // esta observando el elemento submit
    formulario.addEventListener('submit',
    function (evento) {
        evento.preventDefault(); // detiene la recarga por defecto

        let datos = new FormData(formulario); // captura datos
        let datosEnviar = {
            nombre: datos.get('nombreGrupo')
        }
        fetch(url + insertar, 
            {
                method: 'POST',
                body: JSON.stringify(datosEnviar)
            }
        )
        .then(respuesta=>respuesta.json())
        .then( (datosRespuesta) => {
            mensajeInsertar(datosRespuesta);
        })
        .catch(console.log)
    })
}

//LISTO EDITAR
if (nombrePagina == nombreModuloListar) {
    formularioEditar.addEventListener('submit',
        function (evento) {
            evento.preventDefault();
            let datos = new FormData(formularioEditar);
            let datosEnviar = {
                id: datos.get('id'),
                nombre: datos.get('name')
            }
            fetch(url + actualizar,
                {
                    method: 'POST',
                    body: JSON.stringify(datosEnviar)
                }
            )
            .then(respuesta=>respuesta.json())
            .then( (datosRespuesta) => {
                mensajeActualizar(datosRespuesta);
                modalEditar.hide();
            })
            .catch(console.log)
        }
    )
}
// EVENTOS FIN

// FUNCIONES INICIO

// FUNCIONES AGREGAR
function mensajeInsertar(datos) {
    if(datos.code == 200) {
        mensajesSistema.innerHTML = 
        
        `<div
            class="alert alert-success alert-dismissible fade show"
            role="alert"
        >
            <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
            ></button>
            <strong>Ingreso exitoso</strong>
        </div>`
    }
    else {
        mensajesSistema.innerHTML = 
        
        `<div
            class="alert alert-warning alert-dismissible fade show"
            role="alert"
        >
            <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
            ></button>
            <strong>Error al registrar estudiante</strong>
        </div>`
    }
    limpiarForm();
    setTimeout(cerrarMensaje, 2500);

}


function limpiarForm() {
    document.getElementById("nombreGrupo").value = "";
}

function loadspinner() {
    document.getElementById("spinnerload").innerHTML = spinner;
}

function cerrarMensaje() {
    mensajesSistema.innerHTML = "";
}

function mensajeActualizar(datos) {
    if(datos.code == 200) {
        mensajesSistema.innerHTML = 
        
        `<div
            class="alert alert-success alert-dismissible fade show"
            role="alert"
        >
            <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
            ></button>
            <strong>Actualización exitosa</strong>
        </div>`;

        setTimeout(cargarDatos, 500);

    }
    else {
        mensajesSistema.innerHTML = 
        
        `<div
            class="alert alert-danger alert-dismissible fade show"
            role="alert"
        >
            <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
            ></button>
            <strong>Error al actualizar grupo</strong>
        </div>`
    }
    setTimeout(cerrarMensaje, 2500);
}

function mensajeEliminar(datos) {
    if(datos.code == 200) {
        mensajesSistema.innerHTML = 
        
        `<div
            class="alert alert-success alert-dismissible fade show"
            role="alert"
        >
            <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
            ></button>
            <strong>Borrado de grupo exitoso</strong>
        </div>`;

        setTimeout(cargarDatos, 500);
    }
    else {
        mensajesSistema.innerHTML = 
        
        `<div
            class="alert alert-danger alert-dismissible fade show"
            role="alert"
        >
            <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
            ></button>
            <strong>Error al borrar grupo</strong>
        </div>`
    }
    setTimeout(cerrarMensaje, 2500);
}

function cargarDatos(){
    datosT.innerHTML = "";
    loadspinner();
    fetch(url + listar)
    .then(respuesta=>respuesta.json())
    .then( (datosRespuesta) => {
        mostrarDatos(datosRespuesta)
    })
    .catch(console.log)
}

function mostrarDatos(datos){

    if(datos.code == 200) {
        for (const iterator of datos.data) {
            
            datosT.innerHTML += `
                <tr class="">
                    <td>
                        <a
                            name=""
                            id=""
                            class="btn btn-success"
                            onclick = "editar('${encodeURIComponent(JSON.stringify(iterator))}')"
                            role="button"
                            ><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-edit"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg></a
                        >
                        <a
                            name=""
                            id=""
                            class="btn btn-danger"
                            onclick = "eliminar('${iterator.id}','${iterator.nombre}')"
                            role="button"
                            ><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg></a
                        >
                    </td>
                    <td scope="row">${iterator.id}</td>
                    <td>${iterator.nombre}</td>
                </tr>
            `;
        }
    }
    else {
        alert("Algo salio mal");
    }
    document.getElementById("spinnerload").innerHTML = "";
}

function eliminar(id, nombre) {
    modalEliminar = new bootstrap.Modal(document.getElementById("modalEliminar"));
    modalEliminar.show();
    document.getElementById("idEliminar").innerHTML = id;
    document.getElementById("idEliminarInput").value = id;
    document.getElementById("spanNombre").innerHTML = nombre;
}

function confirmarEliminar() {
    
    let datosEnviar = {
        id: document.getElementById("idEliminarInput").value
    }
    fetch(url + borrar, {
        method: 'POST',
        body: JSON.stringify(datosEnviar)
    })
    .then(respuesta=>respuesta.json())
    .then( (datosRespuesta) => {
            mensajeEliminar(datosRespuesta);
            modalEliminar.hide();
    })
    .catch(console.log)
}

function editar(objeto) {
    modalEditar = new bootstrap.Modal(document.getElementById("modalEditar"));
    modalEditar.show();
    objeto = JSON.parse(decodeURIComponent(objeto));
    document.getElementById("name").value = objeto.nombre;
    document.getElementById("id").value = objeto.id;
    document.getElementById("spanID").innerHTML = objeto.id;
}
// FUNCIONES FIN

// SECCION DE EJECUCION DE FUNCIONES
if (nombrePagina == nombreModuloListar) {
    cargarDatos();
}