import validator from './validator.js';
// Llamamos a los atributos
const tarjeta = document.getElementById("nombre");
const numeroTarjeta = document.getElementById("creditCardNumber");
const boton = document.getElementById("caja-btn");
// Variables de validación 
const number = /^([0-9])*$/;
const validateVisa = /^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/;
const validateMastercard = /^5[1-5]\d{2}-?\d{4}-?\d{4}-?\d{4}$/;
const validateAmericanExpress = /^3[47][0-9]{13}$/;
const validateDiscover = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
//Función que valida que sólo ingresen números en la tarjeta
const creditCardNumber = (num) => {
	if (number.test(num)) {
	  return true;
	}
  };
console.log(validator);
