var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};
//Acceder a propiedad de un objeto
miAuto.annio;
miAuto.modelo;

//Acceder a metodo del objeto
miAuto.detalleDelAuto();