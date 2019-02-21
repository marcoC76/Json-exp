//service worker

if ('serviceWorker' in navigator) {
    console.log("Puedes");
    navigator.serviceWorker.register('./sw.js')
                            .then(res => console.log('sw cargado', res))
                            .catch(err => console.log('no se pudo'));
}else{
    console.log("no puedes");
}
  

/* var obj
ft();
function ft() {
    fetch('https://api.sheety.co/cba083a5-cc85-4703-a5d0-2307f8968d31')
        .then(function (response) {
            return response.json();

        })
        .then(function (data) {
            obj = data
            var salida = '';
            for (var i = 0; i < obj.length; i++) {
             salida += `
                <ul>
                    <li>${obj[i].nombre} su apellido es ${obj[i].aPaterno} 
                            su otro apellido es ${obj[i].aMaterno} 
                            y  su equipo es ${obj[i].equipo}</li>
                </ul>
                            `; 
                salida+=` <div class="col s12 m6">
                                <div class="card blue-grey darken-1">
                                    <div class="card-content white-text">
                                        <span class="card-title">${obj[i].nombre}</span>
                                        <p>Apellido Paterno: ${obj[i].aPaterno}</p>
                                        <p>Apellido Materno: ${obj[i].aMaterno}</p>
                                    </div>
                                    <div class="card-action">
                                        <a>Equipo: ${obj[i].equipo}</a>
                                    </div>
                                    <div class="card-reveal">
                                        <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                                        <p>Here is some more information about this product that is only revealed once clicked on.</p>
                                    </div>
                                </div>
                            </div>
                        `; 
                salida+=`
                        <div class="col s12 m4 l4">
                            <div class="card blue lighten-5">
                                <div class="waves-effect waves-block waves-light">
                                    <img class="activator" src="office.jpg" width="100%">
                                </div>
                                <div class="card-content ">
                                <span class="card-title">${obj[i].nombre}</span>
                                <p>Apellido Paterno: ${obj[i].aPaterno}</p>
                                <p>Apellido Materno: ${obj[i].aMaterno}</p>
                            </div>
                            <div class="card-action">
                                <a>Equipo: ${obj[i].equipo}</a>
                                <a>Grupo: ${obj[i].grupo}</a>
                            </div>
                                <div class="card-reveal">
                                    <span class="card-title grey-text text-darken-4">Detalles<i class="material-icons right">cerrar</i></span>
                                    <p>Asistencias: ${obj[i].tOTALASIS}</p>
                                    <p>Actividades: ${obj[i].pUNTOSACT}</p>
                                    <p>Cuestionarios: ${obj[i].pUNTOSCUES}</p>
                                    <p>Bitácora: ${obj[i].pUNTOSBIT}</p>
                                    <p>Proyecto: ${obj[i].pUNTOSPRO}</p>
                                    <p>Punto Extra:${obj[i].pUNTOEX}</p>
                                    <p>Calificación Final: <a class="waves-effect waves-light btn">${obj[i].fINAL}</a></p>
                                </div>
                            </div>
                        </div>
                        `;
            }
            document.getElementById('lista')
                .innerHTML = salida;
            console.log(obj);

        })
        .catch(function (err) {
            console.error(err);
        });
}
setInterval('ft()', 120000);
 */