// node app crear -d "pasear al perro"
// node app listar
// node app actualizar -d "pasear al perro" -c true

const colors = require('colors')
const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do')

switch (argv._[0]) {
    case 'new':
        const newTask = toDo.createToDoTask(argv.task)
        console.log(newTask)
        break;
    case 'list':
        let toDoList = toDo.getToDoList()

        console.log(' *** To do list *** \n'.green)
        for(const task of toDoList){
            console.log(`Task: ${task.task}`)
            console.log(`Status: ${task.complete} \n`)
        }
        console.log(' *** *** ** *** ***'.green)
        
        break;
    case 'update':
        console.log("Update a to-do task")
        break;

    default:
        console.log(`${argv._[0]} - Command not found`)
        break;
}