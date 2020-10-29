const process = require('process');
const fs = require('fs');

let listadoDeTareasJSON = ( fs.readFileSync('./Tareas.json', 'utf8') )
let arrayDeTareas = JSON.parse(listadoDeTareasJSON)

switch(process.argv[2]) {
    case 'listartareas':
        console.log("Este es el listado de tareas que existen:")
        console.log("-------------------------------------")
        for (let i = 0; i < arrayDeTareas.length; i++) {
             console.log((i + ".") + " " + arrayDeTareas[i].titulo+ " -- Estado: " + arrayDeTareas[i].estado)
        }
        break;
    case 'creartarea':
        
    let nuevaTarea = {
            titulo: process.argv[3],
            estado: process.argv[4]
        }
        arrayDeTareas.push(nuevaTarea)
        
        fs.writeFileSync('./Tareas.json', JSON.stringify(arrayDeTareas, null, 2))
        console.log("Se ha creado una nueva tarea exitosamente!")
        break;
    case 'filtrarTareas':
        console.log("Este es el listado de tareas con este estado:")
        console.log("-------------------------------------")
        let estadoParaBuscar = process.argv[3];
        let tareasFiltradas =arrayDeTareas.filter(function(elemento){
            return estadoParaBuscar == elemento.estado
        })
        for (let i = 0; i < tareasFiltradas.length; i++) {
            console.log((i + ".") + " " + tareasFiltradas[i].titulo+ " -- Estado: " + tareasFiltradas[i].estado)
       }
       if (tareasFiltradas.length == 0){
           console.log("No existe una tarea con ese estado")
       }
       break;
    case undefined:
        console.log('No me definiste ninguna instruccion');
        break;
  default:
        console.log("No puedo interpretar esta instruccion")
}