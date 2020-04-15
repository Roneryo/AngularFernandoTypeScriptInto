(function(){
    function getEdad(edad:number){
        return edad+10;
    }

    const nombre   = 'Roner';
    const apellido = 'Ortega';
    const edad     =  24;

    // const salida = 
    // const salida = nombre + " "+apellido+" "+" ("+edad+")";
    const salida = `${nombre} ${apellido} ( ${getEdad(edad)} )`;
    console.log(salida);
})();