var obj
var salida = '';
ft();
function ft() {
    fetch('https://api.sheety.co/cba083a5-cc85-4703-a5d0-2307f8968d31')
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
            <center> <h2>${newArray[0].completo}</h2></center>
            <hr>
            <div class="row">
                <div class="col s12 m3 center">
                    <h4>Grupo: ${newArray[0].grupo}</h4>
                </div>
                <div class="col s12 m3 center">
                    <h5>Equipo:<br> ${newArray[0].equipo}</h5>
                </div>
                <div class="col s12 m3 center">
                    <h4>Asistencias: <a class="waves-effect waves-light btn-floating red" style="font-size:90%;"> ${newArray[0].tOTALASIS}</a></h4>
                </div>
                <div class="col s12 m3 center">
                    <h4>Punto Extra: <a class="waves-effect waves-light btn-floating green" style="font-size:90%;"> ${newArray[0].pUNTOEX}</a></h4> 
                    
                </div>
            </div>
            <div class="row">
                <div class="col s12 m12 center">
                    <h4 id="estado" class="waves-effect waves-light btn-large purple" style="font-size:2em;"></h4>
                    <h3>Calificación Final: <a class="waves-effect waves-light btn-large black" style="font-size:90%;"> ${newArray[0].fINAL}</a> </h3>
                </div>
            </div>
            <div class="row">
                <div class="col s12 m6">
                    <div class="card grey lighten-2">
                        <div class="card-content ">
                        <span class="card-title center">Actividades</span>
                            <h5>Puntos totales: <a class="waves-effect waves-light btn blue" style="font-size:90%;">${newArray[0].pUNTOSACT}</a> </h5>
                            <canvas id="myChart" width="50"></canvas>
                        </div>
                    </div>
                </div>
                <div class="col s12 m6">
                    <div class="card  teal lighten-4">
                        <div class="card-content ">
                        <span class="card-title center">Cuestionarios</span>
                            <h5>Puntos totales: <a class="waves-effect waves-light btn blue" style="font-size:90%;"> ${newArray[0].pUNTOSCUES}</a></h5>
                            <canvas id="myChart2" width="50"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col s12 m6">
                    <div class="card red lighten-4">
                        <div class="card-content ">
                        <span class="card-title center">Proyecto</span>
                            <h5>Puntos totales: <a class="waves-effect waves-light btn blue" style="font-size:90%;">${newArray[0].pUNTOSPRO}</a></h5>
                            <canvas id="myChart3" width="50"></canvas>
                        </div>
                    </div>
                </div>
                <div class="col s12 m6">
                    <div class="card blue lighten-4">
                        <div class="card-content ">
                        <span class="card-title center">Bitacora</span>
                            <h5>Puntos totales: <a class="waves-effect waves-light btn blue" style="font-size:90%;">${newArray[0].pUNTOSBIT}</a></h5>
                            <canvas id="myChart4" width="50"></canvas>
                        </div>
                    </div>
                </div>
            </div>

        
    `;
    document.getElementById("resultado").innerHTML = salida;
    var estado="";
    if(newArray[0].fINAL<6){
        estado="REPROBADO";
    }else{
        estado="APROBADO";
    }
    document.getElementById("estado").innerHTML = estado;
    
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Act1", "Act2", "Act3", "Act4", "Act5"],
            datasets: [{
                label: 'Calificación',
                data: [newArray[0].aCTIVIDAD1, newArray[0].aCTIVIDAD2,newArray[0].aCTIVIDAD3,newArray[0].aCTIVIDAD4,newArray[0].aCTIVIDAD5],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                ]
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
    var ctx = document.getElementById("myChart2");
    var myChart2 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Cuest1", "Cuest2", "Cuest3", "Cuest4", "Cuest5"],
            datasets: [{
                label: 'Calificación',
                data: [newArray[0].cUESTIONARIO1, newArray[0].cUESTIONARIO2,newArray[0].cUESTIONARIO3,newArray[0].cUESTIONARIO4,newArray[0].cUESTIONARIO5],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                ]
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
    var ctx = document.getElementById("myChart3");
    var myChart3 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Proyecto"],
            datasets: [{
                label: 'Calificación',
                data: [newArray[0].pROYECTO],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.6)'
                    
                ]
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
    var ctx = document.getElementById("myChart4");
    var myChart4 = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Bitácora"],
            datasets: [{
                label: 'Calificación',
                data: [newArray[0].bITACORA],
                backgroundColor: [
                    'rgba(153, 102, 255, 0.6)'
                ]
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}


