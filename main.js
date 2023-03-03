function validation(){
    let email = document.getElementById('email');
    let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let mensajeError= document.querySelector(".msj-error")
   
  
    if(email.value.match(pattern)){
        email.classList.remove('error-form');
    
    } else {
      email.classList.add('error-form');
      mensajeError.innerHTML= "Please provide valid email"
    }
   
  }