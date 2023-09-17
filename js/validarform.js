
// Validar formulario

function validarform() {

  let nombre = document.getElementById("nombre").value; 
  let tel = document.getElementById("tel").value;
  let email = document.getElementById("email").value;
  let direccion = document.getElementById("direccion").value; 
  var mensaje = document.getElementById("mensaje").value;
   
   
   // Validar nombre
       if (nombre == "") {
          alert("Por favor escribí tu nombre");
                 document.form.nombre.focus();
           return false;
       }
   // Validar apellido
       if (apellido == "") {
          alert("Por favor escribí tu apellido");
                document.form.apellido.focus();
           return false;
       }
   
   // Validar email
       if(form.email.value.length>0){
           var patronEmail=/^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;       
           if (!(patronEmail.test(form.email.value))) {
               alert('El email no tiene un formato valido!');
               return false; 
           }         
       }else{
           alert('Por favor escribí tu Email');
           document.form.email.focus();
           return false;            
       }
   
   // Validar nombre
       if (direccion == "") {
          alert("Por favor escribí tu direccion");
                 document.form.direccion.focus();
           return false;
       }
      
   // Validar mensaje
      if( mensaje  == null || mensaje .length == "0" || /^\s+$/.test(mensaje) ) {
         alert("Por favor escribí tu consulta.");
         document.form.mensaje .focus();        
         return false;
      }
   
   //el formulario se envia
    alert("Muchas gracias por enviar el formulario");
       document.form.enviar();
   
   }    
   
   
