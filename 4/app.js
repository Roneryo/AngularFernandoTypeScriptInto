"use strict";
(function () {
    function getEdad(edad) {
        return edad + 10;
    }
    var nombre = 'Roner';
    var apellido = 'Ortega';
    var edad = 24;
    // const salida = 
    // const salida = nombre + " "+apellido+" "+" ("+edad+")";
    var salida = nombre + " " + apellido + " ( " + getEdad(edad) + " )";
    console.log(salida);
})();
