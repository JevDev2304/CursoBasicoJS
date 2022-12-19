var opcionMachine;
var opcionPlayer;

var piedra = "Piedra";
var papel = "Papel";
var tijera = "Tijera";

function juego(opcionMachine,opcionPlayer){
    if (opcionMachine === "Piedra"){
        if (opcionPlayer === "Papel"){
            console.log("Ganaste la partida")
        }
        else if (opcionPlayer === "Piedra"){
            console.log("Empataste la partida")
        }
        else{
            console.log("Perdiste la partida")
        }

    }
    if (opcionMachine === "Papel"){
        if (opcionPlayer === "Papel"){
            console.log("Empataste la partida")
            
        }
        else if (opcionPlayer === "Piedra"){
            console.log("Perdiste la partida")
        }
        else{
            console.log("Ganaste la partida")
        }

    }
    if (opcionMachine === "Tijera"){
        if (opcionPlayer === "Papel"){
            console.log("Perdiste la partida")
            
        }
        else if (opcionPlayer === "Piedra"){
            console.log("Ganaste la partida")
        }
        else{
            console.log("Empataste la partida")
        }
    }
}
juego("Tijera","Piedra");
