
function Drop(){
    let drop_down = document.getElementById('drop-menu');
    drop_down.style.transition == "1s";
    if(drop_down.style.display == 'none'){
        drop_down.style.display = 'block';
    }else{
        drop_down.style.display = 'none';
    }
}

let nav_active = document.getElementById('nav-active');

nav_active.addEventListener('click', function(){
   let ocultar = document.getElementById('ocult');
   ocultar.style.cssText = "transform: translateX(-500px);"
   ocultar.style.opacity = 0;
   ocultar.style.transition = 1;
});

let materias = [];

function agregarMateria() {
    const creditos = parseInt(document.getElementById('creditos').value);
    const nota = document.getElementById('nota').value;
    const notaNumerica = obtenerValorNumericoNota(nota);

    if (!isNaN(creditos) && notaNumerica !== null) {
        materias.push({ creditos, nota: notaNumerica });
        document.getElementById('creditos').value = '';
        document.getElementById('nota').value = 'A';
    }
}

function obtenerValorNumericoNota(nota) {
    switch (nota) {
        case 'A':
            return 4;
        case 'B':
            return 3;
        case 'C':
            return 2;
        case 'D':
            return 1;
        default:
            return null;
    }
}

function calcularIndice() {
    if (materias.length === 0) {
        document.getElementById('resultado').textContent = "Agrega al menos una materia.";
        return;
    }

    let totalCreditos = 0;
    let totalPuntos = 0;

    for (const materia of materias) {
        totalCreditos += materia.creditos;
        totalPuntos += materia.creditos * materia.nota;
    }

    const indiceAcademico = totalPuntos / totalCreditos;
    document.getElementById('resultado').textContent = `Índice Académico: ${indiceAcademico.toFixed(2)}`;
}