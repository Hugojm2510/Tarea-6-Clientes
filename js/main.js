function validar(){
    const formulario = document.querySelector("form");
    const asunto = document.querySelector("#asunto");
    const email = document.querySelector("#email");
    const mensaje = document.querySelector("#mensaje");

    const asuntoError = document.querySelector("#asuntoError");
    const emailError = document.querySelector("#emailError");
    const mensajeError = document.querySelector("#mensajeError");

    function validarEmail(email){
        const formato = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return formato.test(email);
    }


    function mostrarError(input, errorElement, message) {
        input.classList.add("border-red");
        input.classList.remove("border-green");
        errorElement.textContent = message;
        errorElement.classList.remove("hidden");
    }

    function ocultarError(input, errorElement) {
        input.classList.remove("border-red");
        input.classList.add("border-green");
        errorElement.classList.add("hidden");
    }



    asunto.addEventListener("blur", function(){
        if(asunto.value.trim() === ""){
            mostrarError(asunto, asuntoError, "el asunto no puede estar vacio");
        } else {
            ocultarError(asunto, asuntoError);
        }
    });

    email.addEventListener("blur", function(){
        if(email.value && !validarEmail(email.value)){
            mostrarError(email, emailError, "el email no es valido");
        } else {
            ocultarError(email, emailError);
        }
    });

    mensaje.addEventListener("blur",function (){
        if(mensaje.value.trim() === ""){
            mostrarError(mensaje, mensajeError, "el mensaje no puede estar vacio");
        } else {
            ocultarError(mensaje, mensajeError);
        }
    });

    formulario.addEventListener("submit", function(event){

        event.preventDefault();

        if(asunto.value.trim() === ""){
            mostrarError(asunto, asuntoError, "el asunto no puede estar vacio");
        } else {
            ocultarError(asunto, asuntoError);
        }

        if(email.value && !validarEmail(email.value) && email.value.trim === ""){
            mostrarError(email, emailError, "el email no es valido");
        } else {
            ocultarError(email, emailError);
        }

        if(mensaje.value.trim() === ""){
            mostrarError(mensaje, mensajeError, "el mensaje no puede estar vacio");
        } else {
            ocultarError(mensaje, mensajeError);
        }

        if(valid){
            alert("mensaje enviado")
        }
    });
}

validar();