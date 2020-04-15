"use strict";
(() => {
    const avenger = {
        nombre: 'Steve',
        clave: 'Capitan America',
        poder: 'Droga'
    };
    // const {nombre,clave,poder} = avenger;
    // console.log(/*avenger.*/clave);
    // console.log(/*avenger.*/poder);
    // const extraer = ({nombre ,poder}:any) =>{
    //     // const {nombre ,poder}= avenger;
    //     console.log(nombre);
    //     console.log(poder);
    //     }
    // extraer(avenger);
    const avengers = ['Thor', 'Ironman', 'Spiderman'];
    const [, , spiderman] = avengers;
    // console.log(thor);  
    // console.log(ironman);    
    // console.log(spiderman);
    const extraerArr = ([thor, ironman, spiderman]) => {
        console.log(thor);
        console.log(ironman);
        console.log(spiderman);
    };
    extraerArr(avengers);
})();
