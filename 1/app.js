"use strict";
(function () {
    function saludar(nombre) {
        console.log('Hola, ' + nombre);
    }
    var wolverine = {
        nombre: 'logan'
    };
    saludar(wolverine.nombre);
})();
