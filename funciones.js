// iniciarSesion()

// function iniciarSesion() {
//   console.log("Inicio de sesión Holis...");
// }
// iniciarSesion()

// function iniciarSesion(){
//     console.log("Inicio de sesión correcto...");
// }
// iniciarSesion()

// var iniciarSesion = function () {
//     console.log("Inicio de sesión correcto...");
// };

// let iniciarSesion = () => {
//     console.log("Inicio de sesión correcto...");
// };

// iniciarSesion()

// for (let index = 0; index < 250; index++) {
//   iniciarSesion();
// }
// iniciarSesion()
/* Se recomienda que una función se llame bajo el camelCase */

// function suma(numeroUno, numeroDos, numeroTres, numeroCuatro, numeroCinco) {
//     console.log('Resultado... ' + numeroUno, numeroDos, numeroTres, numeroCuatro, numeroCinco)
// }
// suma('25', true, [50], {}, function () {})

// function suma(valorDos, valorUno) {
//     console.log('Resultado... ' + (valorUno - valorDos))
// }
// let numeroUno = 25
// let numeroDos = 55
// suma(numeroUno, numeroDos)

// var suma = function(){
//     console.log('Resultado...')
// }

// var suma = () => {
//     console.log('Resultado...')
// }

// function calcularSalario() {
//     let valorHora = 10000
//     let cantidadHoras = 50
//     var salario = valorHora * cantidadHoras
//     return salario, cantidadHoras, valorHora
// }
// calcularSalario()
// function calcularAuxilioTransporte(valor) {
//     let auxTransporte = 162000
//     if (valor <= 1300000) {
//         valor += auxTransporte
//         console.log('Si recibe auxilio de transporte...')
//         console.log(valor)
//     }
// }
// calcularAuxilioTransporte(calcularSalario())

// if(true){
//     var nombre = 'Jaime'
// }
// console.log(nombre)

/* Ejercicio - Cajero Electrónico 
    1 - Inicio de sesión
    2 - Consulta de saldo
    3 - Retiro
    4 - Transferencia y/o consignación
    5 - Finalizar Sesión
*/
function cajeroElectronico(usuario) {
  console.log("Bienvenido... " + usuario);
}
let intentos = 2;
while (intentos >= 0) {
  let usuario = prompt("Ingrese su usuario: ");
  let contrasena = Number(prompt("Ingrese su contrasena: "));
  if (usuario === "meli" && contrasena === 1234) {
    let repetir = true
    while (repetir){
      cajeroElectronico(usuario)
      let continuar = Number(prompt('Desea cerrar su sesion? \n 1 - No \n 2 - Si'))
      if (continuar === 2){
        repetir = false
      }
    }
    intentos = -1
  } else {
    // alert('Error de credenciales, tiene ' + intentos + ' restantes ' + intentos)
    if (intentos === 0) {
      console.log("Usuario bloqueado, contacte al ADMIN");
      break;
    }
    alert(`Error de credenciales, tiene ${intentos} restantes`);
    intentos--;
  }
}
