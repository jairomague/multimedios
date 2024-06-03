// PROPIEDADES INICIO
let datosT = document.querySelector('#datosTabla');

let mensajesSistema = document.querySelector('#mensajesSistema');

let nombrePagina = document.title;
let nombreModuloListar = "Grupos";
let nombreModuloCrear = "Crear Grupos";

// PROPIEDADES API
let url = "https://paginas-web-cr.com/Api/apis/";
let listar = "ListaGrupo.php";
let insertar = "InsertarGrupo.php";
let actualizar = "ActualizarGrupo.php";


let spinner = `
                <button class="btn btn-primary" type="button" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
                </button>
                `;
// PROPIEDADES FIN

// EVENTOS INICIO


// EVENTOS FIN

// FUNCIONES INICIO

function loadspinner() {
    document.getElementById("spinnerload").innerHTML = spinner;
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
                            onclick = "eliminar('${iterator.id}')"
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

// FUNCIONES FIN

// SECCION DE EJECUCION DE FUNCIONES
if (nombrePagina == nombreModuloListar) {
    cargarDatos();
}