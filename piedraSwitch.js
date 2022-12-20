var opcionMachine;
var opcionPlayer;

var piedra = "Piedra";
var papel = "Papel";
var tijera = "Tijera";

function juego(opcionMachine,opcionPlayer){
    switch(opcionMachine){
        case "Piedra":
            switch(opcionPlayer){
                case "Piedra":
                    console.log("Has empatado");
                    break;
                case "Papel":
                    console.log("Has ganado");
                    break;
                case "Tijera":
                    console.log("Has perdido");
                    break;
                default:
                    console.log("Ha ocurrido un error");
            }
            break;
        case "Papel":
            switch(opcionPlayer){
                case "Piedra":
                    console.log("Has perdido");
                    break;
                case "Papel":
                    console.log("Has empatado");
                    break;
                case "Tijera":
                    console.log("Has ganado");
                    break;
                default:
                    console.log("Ha ocurrido un error");
                    break;
            }
            break;
            
        case "Tijera":
            switch(opcionPlayer){
                case "Piedra":
                    console.log("Has ganado");
                    break;
                case "Papel":
                    console.log("Has perdido");
                    break;
                case "Tijera":
                    console.log("Has empatado");
                    break;
                default:
                    console.log("Ha ocurrido un error");
            }
            break;
        default:
            console.log("Ha ocurrido un error D:");
    }
}
juego("Papel","Tijera");

