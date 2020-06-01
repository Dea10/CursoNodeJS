let saludar = () => "Hello World!";

console.log(saludar());

let deadpool = {
    nombre: "Wade",
    apellido: "Winston",
    poder: "Regeneración",
    getNombre() { // en función flecha this llama al contenedor del objeto
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
};

console.log(deadpool.getNombre());

let {nombre, apellido, poder} = deadpool;

console.log(nombre, apellido, poder);