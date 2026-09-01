function validadFormulario(formId){
    //alert('validadFormulario')

    //obtener funcion
    var formulario=document.getElementById(formId);

    //obtener todos los campos
    var campos=formulario.querySelectorAll('input,select,textarea')

    //contactos de campos vacios
    var vacios = 0;
    var mensaje= '';

    //revisar cada campo
    for(var i=0; i < campos.length; i++){
        var campo = campos[i];  

        //inorar los botones
        if(campo.type == 'button' || campo.type == 'submit'){
            continue
        }

        if(campo.value.trim() ===''){
            vacios++;
            mensaje = mensaje + '*' + campo.placeholder + '\n';
            campo.style.bordercolor='red';
        }else{
            campo.style.bordercolor='';
        }
    }//fin for

    // mostrar resultados
    var resultado =document.getElementById('resultado-validacion')

    if(vacios >0){
        //se encontraran herrores en los campos
        resultado.innerHTML='Faltan '+ vacios + 'campos: <br>' + mensaje.replace(/\n/g, '<br>');
        resultado.style.color='red'; 
        resultado.style.display='block';
    }else{
        resultado.innerHTML='formulario validado'   ;
        resultado.style.color='red'; 
        resultado.style.display='block';
    }


}// fin funcion valida


function reseteadFormulario(formId){
   //alert('reseteadFormulario')

    //Paso 1 : Obtener Formulario
    var formulario=document.getElementById(formId);

    //Paso 2 : Obtener  todos los campos (input,select,textarea)
    var campos=formulario.querySelectorAll('input,select,textarea')

    // Paso 3 : Limpiar cada campo

     for(var i=0; i <campos.length;i++ ) {
        var campo =campos[i];

        //Ignorar los botones
        if(campo.type !=='button'  && campo.type !=='submit' ){
            campo.value="";
             campo.style.borderColor=''; // Quitar el rojo 
        }

    }// fin for

    // Paso 4:  Ocultar mensaje
      var resultado =document.getElementById('resultado-validacion');
      resultado.style.display='none';

} // fin function vFormulario

