(function(){

    //
    function activar(quien:string,
                     momento?:string,
                     objeto:string='batiseñal'){
        if(momento){
            console.log(`${quien} activo la ${objeto} en la ${momento}`);
        }
        console.log(`${quien} activo la ${objeto}`);
    }
    activar('gordon','carro');
})();