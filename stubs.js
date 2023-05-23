import Sinon from "sinon";

function obtenerDatos() {

return {
    nombre: 'Usiel Orihuela Monroy',
    edad: 30,
};

}

const stub = Sinon.stub().returns({
    nombre: 'Usiel Monroy',
    edad: 23
})

const datos = stub();
console.log(datos);

stub.returns({
    nombre: 'Usiel Orihuela',
    edad: 45,
});

const datos2 = stub();
console.log(datos2);

Sinon.assert.calledTwice(stub);// Verifica que el stub haya sido llamado exactamente dos veces

stub.reset();//Me devolvera mis datos originales 

const datos3 = obtenerDatos();
console.log(datos3);
