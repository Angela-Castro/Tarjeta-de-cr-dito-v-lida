const validator = {
// Algoritmo de Luhn
  function (creditCardNumber){
  var sum = 0;
  var numdigits = creditCardNumber.length;
  var parity = numdigits % 2;
  for(var i=0; i < numdigits; i++) {
    var digit = parseInt(creditCardNumber.charAt(i))
    if(i % 2 == parity) digit *= 2;
    if(digit > 9) digit -= 9;
    sum += digit;
  }
  return (sum % 10) == 0;
}
};
};

export default validator;
