import Sinon from "sinon";

function obtenerDatos() {
return {
    nombre: 'Usiel Orihuela',
    edad: 30,
};

}

const stub = Sinon.stub().returns({
    nombre: 'Usiel Monroy',
    edad: 23
})

const datos = stub();
console.log(datos);