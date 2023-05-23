function fakeAPI() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Hello world");
      }, 3000);
    });
  }
  
  function timeoutAfter(seconds) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("request timed-out"));
      }, seconds * 1000);
    });
  }
  
  async function requestWithTimeout() {
    try {
      const response = await Promise.race(
        [timeoutAfter(2), fakeAPI()]
      );
  
      console.log(response);
  
    } catch (error) {
      console.log(error.message);
    }
  }
  
  requestWithTimeout();

const fakeAPIStub = sinon.stub().resolves("Hello world");//Cree la constante fakeApiStub para simular la primera respuesta con el resolve para que sea exitosa 

const timeoutAfter = sinon.stub().rejects(new Error("request timed-out"));//Cree la consatnte en caso de error 




