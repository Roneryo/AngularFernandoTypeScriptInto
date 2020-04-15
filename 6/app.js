"use strict";
(function () {
    const miFunction = function (a) {
        return a.toUpperCase();
    };
    const miFunctionF = (a) => a.toUpperCase();
    const sumarN = function (a, b) {
        return a + b;
    };
    const sumarF = (a, b) => a + b;
    // console.log(sumarN(5,5));
    // console.log(sumarN(10,10));
    const hulk = {
        nombre: 'hulk',
        smash() {
            setTimeout(() => {
                console.log(`${this.nombre} smash!!!`);
            }, 1000);
        }
    };
    hulk.smash;
})();
