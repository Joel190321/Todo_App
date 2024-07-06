const formulario = document.getElementById('formulario');
const input = document.getElementById("input");
const listaTarea = document.getElementById('lista-tareas');
const template = document.getElementById('template').content;
const fragment = document.createDocumentFragment();
const textAlert = document.getElementById("texto-alert");
const AlertStyle = document.getElementById("alerta-1");


let tareas = {}

document.addEventListener('DOMContentLoaded', () => {
   if(localStorage.getItem('tareas')){
    tareas = JSON.parse(localStorage.getItem('tareas'))
   }
   pintarTareas()
});

listaTarea.addEventListener('click', e => {
btnAccion(e)
});
// console.log(Date.now());

formulario.addEventListener('submit', e => {
    e.preventDefault();
    setTarea(e)
   

  
});







const setTarea = e => {
 if(input.value.trim() === ''){
 
    
 }else{
    console.log('diste click');
    
 }  
   const tarea = {
    id: Date.now(),
    texto: input.value,
    estado: false
   }
   tareas[tarea.id] = tarea;

formulario.reset();
input.focus();

pintarTareas()
}

const pintarTareas = () =>{

  localStorage.setItem('tareas', JSON.stringify(tareas));

if(Object.values(tareas).length === 0){
  listaTarea.innerHTML = `
  <div class="alert alert-success text-center">
  No hay tareas 🥳
</div>     
  `  
  return 
}

    listaTarea.innerHTML = '';
   Object.values(tareas).forEach(tarea => {
    const clone = template.cloneNode(true);

    clone.querySelector('p').textContent = tarea.texto

    if(tarea.estado){
      clone.querySelector('.alert').classList.replace('alert-warning', 'alert-success');      
      clone.querySelectorAll('.fas')[0].classList.replace('fa-check-circle', 'fa-undo-alt');
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Felicidades!! Haz completado tu tarea :)'
      })
      
      clone.querySelector('p').style.textDecoration = 'line-through';
      
      
    }

    clone.querySelectorAll('.fas')[0].dataset.id = tarea.id
    clone.querySelectorAll('.fas')[1].dataset.id = tarea.id
    fragment.appendChild(clone);
   });
   listaTarea.appendChild(fragment);
}

const btnAccion = e => {
 if(e.target.classList.contains('fa-check-circle')){    
     console.log(e.target.dataset.id)
     e.target.parentElement.parentElement.classList.toggle('success-animation');
     tareas[e.target.dataset.id].estado = true
     pintarTareas()
    //  console.log(tareas)
 }

 if(e.target.classList.contains('fa-minus-circle')){
   delete tareas[e.target.dataset.id]
   pintarTareas()
   
 }
 if(e.target.classList.contains('fa-undo-alt')){
  console.log(e.target.dataset.id)
  tareas[e.target.dataset.id].estado = false
  pintarTareas()
  // console.log(tareas)
}



 e.stopPropagation();
}

let menu = document.getElementById('menu');
let nav = document.getElementById('nav-link');
let Close = document.getElementById('Closed');

menu.addEventListener('click', function(){
 
  nav.style.transition = ".4s";
  nav.style.opacity = 1;  
  nav.style.zIndex = 1;  
  nav.style.cssText = " transform: translateX(0px);";
  menu.style.opacity = 0;
});

Close.addEventListener('click', function(){
  nav.style.transition = ".4s";
  nav.style.opacity = 1;
  nav.style.zIndex = 99;
  nav.style.cssText = " transform: translateX(-300px);";
  menu.style.opacity = 1;
});













