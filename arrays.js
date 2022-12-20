var frutas = ["Manzana", "Plátano","Cereza","Fresa", "Pera"];

console.log(frutas);

//Un Array es un tipo de estructura de datos, objeto. Puede guardar datos distintos dentro, guarda los datos en forma de lista.

//.lenght devuelve la longitud del array.
var longitud = frutas.length()
//.push() agrega elementos al final de array.
frutas.push("Aguacate");
//.pop() elimina el ultimo elemento del array.
frutas.pop();
//.unshift() agrega un elemento al array, pero lo agrega en primer lugar.
frutas.unshift("Tomate");
//**.shift() **elimina el elemento que está en el inicio del array.
frutas.shift();
//**.indexOf ** devuelve la posición de un elemento del array.
frutas.indexOf("Fresa");

