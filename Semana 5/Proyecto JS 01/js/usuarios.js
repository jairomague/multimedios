// PROPIEDADES INICIO

// querySelector Puede tomar toda la estructura html
// cuando es querySelector requiere numeral
let datosT = document.querySelector('#datosTabla');
// getElementById Agarra solo el elemento
// cuando es ID no requiere numeral 
let formulario = document.getElementById('formulario');
let formularioEditar = document.getElementById('formularioEditar');
let nombrePagina = document.title;
let nombreModuloListar = "Usuarios";
let nombreModuloCrear = "Crear Usuario";

let mensajesSistema = document.querySelector('#mensajesSistema');

let url = "https://paginas-web-cr.com/Api/apis/";
let listar = "ListaUsuarios.php";
let insertar = "InsertarUsuarios.php";
let actualizar = "ActualizarUsuarios.php";

let spinner = `
                <button class="btn btn-primary" type="button" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
                </button>
                `;
// ocupa json para cargar datos
// ocupa leer el api
// una funcion para llamar
// https://paginas-web-cr.com/Api/apis/ListaUsuarios.php


// PROPIEDADES FIN

// EVENTOS INICIO 

if (nombrePagina == nombreModuloCrear) {
    // esta observando el elemento submit
    formulario.addEventListener('submit',
    function (evento) {
        evento.preventDefault(); // detiene la recarga por defecto

        let datos = new FormData(formulario); // captira datos

        let datosEnviar = {
            name: datos.get('name'),
            password: datos.get('password'),
            email: datos.get('email')

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

if (nombrePagina == nombreModuloListar) {
    formularioEditar.addEventListener('submit',
    function (evento) {
        evento.preventDefault(); // detiene la recarga por defecto

        let datos = new FormData(formularioEditar);

        let datosEnviar = {
            name: datos.get('name'),
            password: datos.get('password'),
            id: datos.get('id')
        }
        console.log(datosEnviar)

        fetch(url + actualizar, 
            {
                method: 'POST',
                body: JSON.stringify(datosEnviar)
            }
        )
        .then(respuesta=>respuesta.json())
        .then( (datosRespuesta) => {
            console.log(datosRespuesta)
            mensajeActualizar(datosRespuesta);
            //mostrarDatos(datosRespuesta)
        })
        .catch(console.log)
    })
}





// EVENTOS FIN


// METODOS INICIO

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
            <strong>El correo ya está registrado</strong>
        </div>`
    }
}



function mensajeActualizar(datos) {
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
            <strong>Actualización exitosa</strong>
        </div>`;

        setTimeout(cargarDatos, 3000);

    }
    else {
        //alert("El correo ya fue registrado");
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
            <strong>Error al actualizar</strong>
        </div>`
    }
}


function cargarDatos(){
    datosT.innerHTML = "";
    loadspinner();
    //setTimeout(loadspinner, 10000); hace que aparezca despues del tiempo
    fetch(url + listar)
    .then(respuesta=>respuesta.json())
    .then( (datosRespuesta) => {
        //console.log(datosRespuesta)
        mostrarDatos(datosRespuesta)
    })
    .catch(console.log)
}

function mostrarDatos(datos){
    //console.log(datos);
    
    //setTimeout()
    if(datos.code == 200) {
        //alert("Cargando datos");
        for (const iterator of datos.data) {
            //console.log(iterator);
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
                    <td>${iterator.name}</td>
                    <td>${iterator.email}</td>
                    <td>${iterator.password}</td>
                </tr>
            `;
        }
    }
    else {
        alert("Algo salio mal");
    }
    document.getElementById("spinnerload").innerHTML = "";
}

function loadspinner() {
    document.getElementById("spinnerload").innerHTML = spinner;
}

function editar(objeto) {
    let modalEditar = new bootstrap.Modal(document.getElementById("modalEditar"));

    modalEditar.show();

    objeto = JSON.parse(decodeURIComponent(objeto));

    document.getElementById("name").value = objeto.name;
    document.getElementById("email").value = objeto.email;
    document.getElementById("password").value = "";
    document.getElementById("id").value = objeto.id;
    //document.getElementById("spanID").innerHTML = objeto.id;
}

function eliminar(id) {
    let modalEliminar = new bootstrap.Modal(document.getElementById("modalEliminar"));
    modalEliminar.show();
    document.getElementById("idEliminar").innerHTML = id;
    document.getElementById("idEliminarInput").value = id;
}

function confirmarEliminar() {
    //alert(document.getElementById("idEliminarInput").value);
    // NO SE PUEDE HACER PORQUE LA API NO PERMITE ELIMINAR USUARIOS
}

// SECCION DE EJECUCION DE FUNCIONES
if (nombrePagina == nombreModuloListar) {
    cargarDatos();
}


// METODOS FIN