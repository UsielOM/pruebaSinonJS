import sinon from 'sinon';


function holaMundo(nombre){
console.log(`Hola, ${nombre}`);
}

const spy = sinon.spy(holaMundo);

holaMundo('Mundo');
holaMundo('Usiel');

console.log(spy.called);
console.log(spy.callCount);
console.log(spy.args);