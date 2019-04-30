var obj
var salida = '';
ft();
function ft() {
    fetch('https://api.sheety.co/56fdd1ff-80eb-4876-b01f-e7f992d2ee37')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            obj = data
        })
        .catch(function (err) {
            console.error(err);
        });
}
setInterval('ft()', 120000);

function recibir() {
    var valor = document.getElementById("texto").value;
    var newArray = obj.filter(function (el) {
        return (el.iD === valor);
    });

    salida = `
            <center> <h2 style="text-transform: uppercase;">${newArray[0].aPaterno.substr(0,1)+"·····"} ${newArray[0].aMaterno.substr(0,1)+"·····"} ${newArray[0].nombre.substr(0,1)+"·····"}</h2></center>
            <hr>
            <div class="row">
                <div class="col s12 m3 center">
                    <h4>Grupo:<br> <a class="waves-effect waves-light btn-large btn-floating teal darken-4" style="font-size:90%;">${newArray[0].grupo}</a></h4>
                </div>
                <div class="col s12 m3 center">
                    <h5 style="text-transform: uppercase;"><a class="waves-effect btn waves-blue white blue-text" style="font-size:100%;">${newArray[0].equipo}</a> </h5>
                </div>
                <div class="col s12 m3 center">
                    <h4>Asistencias:<br> <a class="waves-effect waves-light btn-large btn-floating red" style="font-size:90%;"> ${newArray[0].tOTALASIS}</a>
                </div>
                <div class="col s12 m3 center">
                    <h4>Punto Extra:<br> <a class="waves-effect waves-light btn-large btn-floating green" style="font-size:90%;"> ${newArray[0].pUNTOEX}</a></h4> 
                    
                </div>
            </div>
            <div class="row">
                <div class="col s12 m12 center">
                    <h4 id="estado" class="waves-effect waves-light btn-large purple pulse" style="font-size:2em;"></h4>
                    <h3>Calificación Final: <a onclick="M.toast({html: 'Se obtiene sumando todos los puntos totales'})" class="waves-effect waves-light btn-large black pulse" style="font-size:90%;"> ${newArray[0].fINAL}</a> </h3>
                </div>
            </div>
            <div class="row">
                <div class="col s12 m6">
                    <div class="card grey lighten-2 hoverable">
                        <div class="card-content center">
                            <span style="font-size:3em;font-weight:bold;" class="card-title center" >Actividades</span>
                            <hr>
                            <h5>Puntos totales: <a class="waves-effect waves-light btn blue" style="font-size:90%;">${newArray[0].pUNTOSACT}</a>  
                            <canvas id="myChart" width="100%"></canvas>
                        </div>
                        <div class="card-action center">
                            Promedio: <a class="waves-effect waves-light btn green" style="font-size:90%;">${newArray[0].pROMACT}</a></h5>    
                        </div>
                    </div>
                </div>
                <div class="col s12 m6">
                    <div class="card  teal lighten-4 hoverable">
                        <div class="card-content center">
                            <span style="font-size:3em;font-weight:bold;" class="card-title center">Cuestionarios</span>
                            <hr>  
                            <h5>Puntos totales: <a class="waves-effect waves-light btn blue" style="font-size:90%;"> ${newArray[0].pUNTOSCUES}</a> 
                            <canvas id="myChart2" width="100%"></canvas>
                        </div>
                        <div class="card-action center">
                            Promedio: <a class="waves-effect waves-light btn green " style="font-size:90%;">${newArray[0].pROMCUES}</a></h5>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col s12 m6">
                    <div class="card red lighten-4 hoverable">
                        <div class="card-content center">
                            <span style="font-size:3em;font-weight:bold;" class="card-title center">Proyecto</span>
                            <hr>
                            <h5>Puntos totales: <a class="waves-effect waves-light btn blue" style="font-size:90%;">${newArray[0].pUNTOSPRO}</a></h5>
                            <canvas id="myChart3" width="100%"></canvas>
                        </div>
                    </div>
                </div>
                <div class="col s12 m6">
                    <div class="card blue lighten-4 hoverable">
                        <div class="card-content center">
                            <span style="font-size:3em;font-weight:bold;" class="card-title center">Bitácora</span>
                            <hr>
                            <h5>Puntos totales: <a class="waves-effect waves-light btn blue" style="font-size:90%;">${newArray[0].pUNTOSBIT}</a></h5>
                            <canvas id="myChart4" width="50"></canvas>
                        </div>
                    </div>
                </div>
            </div>
    `;
    document.getElementById("resultado").innerHTML = salida;
    var estado = "";
    if (newArray[0].fINAL < 6) {
        estado = "REPROBADO";
    } else {
        estado = "APROBADO";
    }
    document.getElementById("estado").innerHTML = estado;

    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Act10", "Act11", "Act12","ActR", "ElecMag"],
            datasets: [{
                label: 'Calificación',
                data: [newArray[0].aCTIVIDAD10, newArray[0].aCTIVIDAD11, newArray[0].aCTIVIDAD12,  newArray[0].aCTIVIDADR, newArray[0].eLEC_Y_MAG],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(200, 100, 150, 0.6)',
                    'rgba(54, 162, 235, 0.6)'
                ]
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    var ctx = document.getElementById("myChart2");
    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Cuest10", "Cuest11", "Cuest12"],
            datasets: [{
                label: 'Calificación',
                data: [newArray[0].cUESTIONARIO10, newArray[0].cUESTIONARIO11, newArray[0].cUESTIONARIO12],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(255, 99, 132, 0.6)'
                ]
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    var ctx = document.getElementById("myChart3");
    var myChart3 = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ["Proyecto", ""],
            datasets: [{
                label: 'Calificación',
                data: [newArray[0].pROYECTO, 10 - newArray[0].pROYECTO],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.6)'

                ]
            }]
        }
    });
    var ctx = document.getElementById("myChart4");
    var myChart4 = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ["Bitácora", ""],
            datasets: [{
                label: 'Calificación',
                data: [newArray[0].bITACORA, 10 - newArray[0].bITACORA],
                backgroundColor: [
                    'rgba(153, 102, 255, 0.6)'
                ]
            }]
        }

    });
}


