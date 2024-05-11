// for (let index = 0; index < 10; index++) {
//   if (index === 5) {
//     console.log(index);
//     break;
//   }
// }

// let index = 0;
// while (index < 10) {
//   console.log("Hola Mundo");
//   if (index === 5) {
//     break;
//   }
//   index+=1;
// }

let repetir = true;
// while (repetir) {
//   console.log("Hola mundo");
//   let opcion = Number(prompt("1 - Repetir\n2 - Salir"));
//   if (opcion === 2) {
//     repetir = false;
//   }
// }
do {
  console.log("Hola mundo");
  let opcion = Number(prompt("1 - Repetir\n2 - Salir"));
  if (opcion === 2) {
    repetir = false;
  }
} while (repetir);
