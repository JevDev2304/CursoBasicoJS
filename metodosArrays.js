//Utilizaremos el siguiente array de objetos para los ejemplos de los métodos:

var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "TV", costo: 2500 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 10000 },
  { nombre: "Laptop", costo: 20000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audifonos", costo: 1700 },
]
//El metodo filter nos retorna un array de los articulos que cumplan la condición ubicada en el return
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <=500;
})
//El metodo map nos retorna un array, en el cual cada elemento es la propiedad solicitada en el return.
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre;
})
// El metodo find nos retorna el primer articulo que cumpla la condicion solicitada
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
})
//El metodo forEach itera en la lista y retorna o imprime lo que el programador desea en cada iteración
articulos.forEach(function(articulo)
{console.log(articulo.nombre);});

//El metodo some nos valida si existen articulos que cumplen la condición y nos retorna True si la condicion si se cumple y False si esta no se cumple.
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
}) 
