/*let tareas = ["Sacar al perro", "Comer", "Desayunar"];
let newTareas = tareas.push("Hacer tarea");
let ultimoTarea = tareas.pop()

console.log(tareas)
*/
let btnAñadir = document.querySelector('#btnAñadir')
let txtTitulo = document.querySelector('#titulo')
let tareas = [];

btnAñadir.addEventListener("click", addTask)


function addTask(){
  var txtTarea = document.getElementById('tarea').value;
  tareas.push(txtTarea);
  //runTasks()
  console.log(tareas)
  let lista = document.getElementById('ulListado');
  tareas.forEach((data, index)=> { 
   let linea = document.createElement("li");
   let contenido = document.createTextNode(index + ": " + data)
   lista.appendChild(linea);
   linea.appendChild(contenido)
  //showTasks() //Verificar que tenemos tareas
  }




/*
function showTasks(){
  if(tareas.length <= 0) {
    txtTitulo.innerHTML = 'No tienes tareas por realizar'
  }else {
    runTasks()
   // txtTitulo.innerHTML = ''; 
  }
}

function runTasks(){
  let lista = document.getElementById('ulListado');
  tareas.forEach((data, index)=> { 
   let linea = document.createElement("li");
   let contenido = document.createTextNode(index + ": " + data)
   lista.appendChild(linea);
   linea.appendChild(contenido)
  })
}

*/