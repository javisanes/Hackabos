/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */

/*

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() {
    alert("You agreed.");
  },
  function() {
    alert("You canceled the execution.");
  }
); */

/*Versión Arrow

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do yoy agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
); */

/*

let a = prompt("Acierta la palabra que estoy pensando, te doy una pista co*he");
let b = "coche";
alert(a == b); */

/* Ejercicio
let user = {};
user.name = "John";
user.surname = "SMith";
user.name = "Pete";
delete user.name; */

/*
let schedule = {};
alert(isEmpty(schedule));
schedule["8:30"] = "get up";
alert(isEmpty(schedule));

function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
} */

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum);
