/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */
/*

let promise = new Promise(function(resolve, reject) {
  resolve(1);

  setTimeout(() => resolve(2), 1000);
});

promise.then(alert);

*/

/*
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
delay(3000).then(() => alert("runs after 3 seconds"));
*/

/*

function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error("Script load error: " + src));

    document.head.append(script);
  });
}

loadScript("./one.js")
  .then(function(script) {
    return loadScript("./two.js");
  })
  .then(function(script) {
    return loadScript("./three.js");
  })
  .then(function(script) {
    // use functions declared in scripts
    // to show that they indeed loaded
    one();
    two();
    three();
  });
  */
/*
function compare(num) {
  return new Promise(function(resolve, reject) {
    if (num > 10) {
      resolve(num);
    } else {
      reject("Es más bajo");
    }
  });
}

compare(1)
  .then(result => console.log(result))
  .catch(error => console.log(error));
*/

let transportes = ["avión", "coche", "taxi", "tren"];

function pasarAMayus(arr) {
  return new Promise(function(resolve, reject) {
    let newArr = arr.map(value => {
      if (typeof value != "string") {
        reject(new Error("Error, no es un string"));
      } else {
        return value.toUpperCase();
      }
    });
    resolve(newArr);
  });
}

pasarAMayus(transportes);
then(res => console.log(res)).catch(err => console.log(err));
