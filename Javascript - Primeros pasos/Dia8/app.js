/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

/* function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}

alert(checkSpam("buy ViAgRA now"));
alert(checkSpam("free xxxxx"));
alert(checkSpam("innocent rabbit")); */

/*
function truncate (str, maxlength) {
    return(str.length > maxlength) ?
    str.slice(0, maxlength -1) 
}

*/

/*let nombre = "Javier";

alert(nombre.substring(1, 6)); */

/* let extractCurrencyValue = "$120";

alert(extractCurrencyValue.substring(1, 100)); */

/* let fruits = ["Orange", "Apple", "Samsung"];

alert(fruits.length);

alert(fruits);

fruits.shift(0);

alert(fruits.length);

alert(fruits); */

/* let fruits = [1, 2, 3];

alert(String(fruits)); */

let styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");

let styles2 = Math.trunc(styles.length / 2);

styles[styles2] = "Classics";

styles.shift(0);

alert(styles);

styles.unshift("Rap");
styles.unshift("Reggae");

alert(styles);
