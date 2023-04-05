// ==           Es igual
// ===          Es estrictamente igual
// !=           Es distinto
// !==          Es estrictamente distinto
// < <= > >=    Menor / Mayor / Menor o igual / Mayor o igual

// &&           Operador AND (y)
// ||           Operador OR (o)
// !            Operador NOT (no)

// let edad = prompt("Ingrese su edad");

// if (edad == 18) {
//     alert("Eres mayor de edad. Puedes ingresar");
// }else {
//     alert("Eres menor de edad. No puedes ingresar");
// }

// let hora = prompt ("Ingrese la hora");

// if (hora >=6 && hora <12) {
//     alert("Buenos dias!");
// }else if (hora >=12 && hora <20) {
//     alert("Buenas tardes!");
// }else {
//     alert ("Buenas noches!");
// }

let usuario1 = "Juan";
let usuario2 = "Carlos";

let nombreUsuario = prompt ("Ingrese su nombre de usuario");


if (nombreUsuario == usuario1 || nombreUsuario == usuario2) {
    alert("Bienvenido " + nombreUsuario);
} else {
    alert ("Nombre de usuario incorrecto.");
}
// if (nombreUsuario == "Juan") {
//     alert ("Bienvenido " + nombreUsuario);
// }else if (nombreUsuario == "Carlos") {
//     alert ("Bienvenido " + nombreUsuario);
// }else {
//     alert ("Nombre de usuario incorrecto");
// }