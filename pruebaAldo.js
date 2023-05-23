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






