document.getElementById("login").addEventListener("click", function(event) {
  event.preventDefault(); 

  var nombreInput = document.getElementById("nombre");
  var contraseñaInput = document.getElementById("contraseña");

  if (nombreInput.value === "" || contraseñaInput.value === "") {
    Swal.fire({
      title: 'esto esta vacio :( porfavor llene todos los campos',
      icon: 'error'
    })
  }
   else {
   
    window.location.href = "index.html";
  }
});

let menssage = document.getElementById('messages-tab');
let alert_mensaje = document.getElementById('alert-login')

menssage.addEventListener('click', function(){   
   alert_mensaje.style.cssText = "transform: translateY(-200px);"
   alert_mensaje.style.transition = "1s";
   alert_mensaje.style.opacity = 1;
   setTimeout(function(){
    alert_mensaje.style.transition = "1s"
   alert_mensaje.style.opacity = 0
   alert_mensaje.style.cssText = "trans"
   },4000)
});

var contraseñaInput = document.getElementById("contraseña");
contraseñaInput.addEventListener("input", function() {
  var contraseñaValor = contraseñaInput.value;
  var asteriscos = "*".repeat(contraseñaValor.length);
  contraseñaInput.value = asteriscos;
});

let btn_home = document.getElementById('profile-tab');

btn_home.addEventListener('click', function(){
  Swal.fire({
    title: "cargando porfavor espere...",
    icon: 'success'
  })
   setTimeout(function(){
    window.location.href = "index.html"
   },2000)
});





