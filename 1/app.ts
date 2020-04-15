(function(){
    function saludar (nombre:string){
        console.log('Hola, '+nombre);
    }
    const wolverine = {
        nombre:'logan'
    };

    saludar(wolverine.nombre);
})();