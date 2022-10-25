function validaLongitudMin(cadena,lonMin){    
    if(cadena.length<lonMin){
        return false;
    }
    else{
        return true;
    }
}

function validaLongitudMax(cadena,lonMax){   
    if(cadena.length>lonMax){
        return false;
    }
    else{
        return true;
    }
}

function validaLetras(cadena){
    carValidos="ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz";
    for(var i=0;i<cadena.length;i++){
        c=cadena.charAt(i);
        if(carValidos.indexOf(c)==-1){
            return false;
        }
    }
    return true;
}

function validaNumeros(cadena){
    carValidos="0123456789";
    if (cadena.length==0){
        return false;
    }
    for(var i=0;i<cadena.length;i++){
        c=cadena.charAt(i);
        if(carValidos.indexOf(c)==-1){
            return false;
        }
    }
    return true;
}

function tieneNumeros(cadena){
    numeros="0123456789";
    for(var i=0;i<cadena.length;i++){
        c=cadena.charAt(i);
        if(numeros.indexOf(c)!=-1){
            return true;
        }
    }
    return false;
}

function tieneMinusculas(cadena){
    minusculas="abcdefghijklmnñopqrstuvwxyz";
    for(var i=0;i<cadena.length;i++){
        c=cadena.charAt(i);
        if(minusculas.indexOf(c)!=-1){
            return true;
        }
    }
    return false;
}




function validaFormulario(){ 
   const nom=document.getElementById("nombre").value;
    if (validaLongitudMin (nom,2)== false || validaLongitudMax (nom,40)== false){

        window.alert("El usuario debe tener entre 2 y 40 caracteres");
        document.getElementById("nombre").value="";
        document.getElementById("nombre").focus;
    }

   const ape=document.getElementById("apellidos").value;
    if (validaLongitudMin (ape,5)== false || validaLongitudMax (ape,80)== false){

        window.alert("El apellido debe tener entre 5 y 80 caracteres");
        document.getElementById("apellidos").value="";
        document.getElementById("apellidos").focus;
    }
    


    const pasw=document.getElementById("password").value;
    if (validaLongitudMin (pasw,10)== false || validaLongitudMax (pasw,15)=== false){

        window.alert("La contraseña debe tener entre 10 caracteres");
        document.getElementById("password").value="";
        document.getElementById("password").focus;

    }
    if(!tieneMinusculas(pasw) || !tieneNumeros(pasw)){
        window.alert("La contraseña debe tener minúsculas y números");
        document.getElementById("password").value="";
        document.getElementById("password").focus();
        return false; 
    }  
}

