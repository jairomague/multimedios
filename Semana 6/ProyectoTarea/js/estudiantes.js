// PROPIEDADES INICIO
let datosT = document.querySelector('#datosTabla');

// MENSAJE
let mensajesSistema = document.querySelector('#mensajesSistema');

// FORMULARIO AGREGAR
let formulario = document.getElementById('formulario');

// FORMULARIO EDITAR
let formularioEditar = document.getElementById('formularioEditar');

// NOMBRE PAGINA
let nombrePagina = document.title;
let nombreModuloListar = "Estudiantes";
let nombreModuloCrear = "Crear Estudiantes";

// MODALS
//let modalEditar = new bootstrap.Modal(document.getElementById("modalEditar"));
//let modalEliminar = new bootstrap.Modal(document.getElementById("modalEliminar"));


// PROPIEDADES API
let url = "https://paginas-web-cr.com/Api/apis/";
let listar = "ListaEstudiantes.php";
let insertar = "InsertarEstudiantes.php";
let actualizar = "ActualizarEstudiantes.php";

let spinner = `
                <button class="btn btn-primary" type="button" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
                </button>
                `;

// PROPIEDADES FIN

// EVENTOS INICIO

// INSERTAR
if (nombrePagina == nombreModuloCrear) {
    // esta observando el elemento submit
    formulario.addEventListener('submit',
    function (evento) {
        evento.preventDefault(); // detiene la recarga por defecto

        let datos = new FormData(formulario); // captira datos

        let datosEnviar = {
            cedula: datos.get('cedula'),
            correoelectronico: datos.get('correoElectronico'),
            telefono: datos.get('telefono'),
            telefonocelular: datos.get('telefonoCelular'),
            fechanacimiento: datos.get('fechaNacimiento'),
            sexo: datos.get('sexo'),
            direccion: datos.get('direccion'),
            nombre: datos.get('nombre'),
            apellidopaterno: datos.get('apellidoPaterno'),
            apellidomaterno: datos.get('apellidoMaterno'),
            nacionalidad: datos.get('nacionalidad'),
            idCarreras: datos.get('idCarreras'),
            usuario: datos.get('usuario')
        }

        //console.log(datosEnviar);

        fetch(url + insertar, 
            {
                method: 'POST',
                body: JSON.stringify(datosEnviar)
            }
        )
        .then(respuesta=>respuesta.json())
        .then( (datosRespuesta) => {
            //console.log(datosRespuesta)
            mensajeInsertar(datosRespuesta);
            //mostrarDatos(datosRespuesta)
        })
        .catch(console.log)
        //apis/InsertarUsuarios.php
        //{ "name" : "marioaje", "password":"1234567890", "email":"marioaje@gmail.com" }

        //console.log(datos.get('email'));
        // estas dos formas son iguales
        // email = document.getElementById("email").value;
       // alert("1");
    })
    
}



// EVENTOS FIN

// FUNCIONES INICIO

function loadspinner() {
    document.getElementById("spinnerload").innerHTML = spinner;
}

// FUNCIONES FIN

// FUNCIONES AGREGAR
function mensajeInsertar(datos) {
    if(datos.code == 200) {
        //alert("Ingreso exitoso");
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
        //alert("El correo ya fue registrado");
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
}

// FUNCIONES EDITAR

// FUNCIONES ELIMINAR

// FUNCIONES LISTA
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
                            onclick = "eliminar('${iterator.id}')"
                            role="button"
                            ><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg></a
                        >
                    </td>
                    <td scope="row">${iterator.id}</td>
                    <td>${iterator.cedula}</td>
                    <td>${iterator.corrreoelectronico}</td>
                    <td>${iterator.telefono}</td>
                    <td>${iterator.telefonocelular}</td>
                    <td>${iterator.fechanacimiento}</td>
                    <td>${iterator.sexo}</td>
                    <td>${iterator.direccion}</td>
                    <td>${iterator.nombre}</td>
                    <td>${iterator.apellidopaterno}</td>
                    <td>${iterator.apellidomaterno}</td>
                    <td>${iterator.nacionalidad}</td>
                    <td>${iterator.idCarreras}</td>
                    <td>${iterator.usuario}</td>
                </tr>
            `;
        }
    }
    else {
        alert("Algo salio mal");
    }
    document.getElementById("spinnerload").innerHTML = "";
}
// CIERRE FUNCIONES LISTA


// SECCION DE EJECUCION DE FUNCIONES
if (nombrePagina == nombreModuloListar) {
    cargarDatos();
}