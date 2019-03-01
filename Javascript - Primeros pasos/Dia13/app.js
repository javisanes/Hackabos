/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

/*
let user = {
  name: "John Smith",
  age: 35
};

let json = JSON.stringify(user);

let user2 = JSON.parse(JSON.stringify(user));
*/

/*
let room = {
  number: 23
};

let meetup = {
  title: "Conference",
  occupiedBy: [{ name: "John" }, { name: "Alice" }],
  place: room
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

alert(
  JSON.stringify(meetup, function replacer(key, value) {
    return key != "" && value == meetup ? undefined : value;
  })
);
*/
/*
function loadScript(src, callback) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => callback(script);
  document.head.append(script);
}

loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js",
  script => {
    alert(`Cool, the ${script.src} is loaded`);
    alert(_); // function declared in the loaded script
    console.log(_.chunk(["a", "b", "c", "d"], 2));

  }
);
*/

function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error("Script load error: " + src));

    document.head.append(script);
  });
}

let promise = loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js"
);

promise.then(
  script => alert(`${script.src} is loaded!`),
  error => alert(`Error: ${error.message}`)
);

promise.then(script => alert("One more handler to do something else!"));
