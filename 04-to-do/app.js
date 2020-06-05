// node app crear -d "pasear al perro"
// node app listar
// node app actualizar -d "pasear al perro" -c true

const colors = require('colors')
const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do')

const addNewTask = (newTask) => {
    console.log(toDo.createToDoTask(newTask))
}

const listTasks = (statusFilter) => {
    let toDoList = toDo.getToDoList(statusFilter)

    console.log(' *** To do list *** \n'.green)
    for(const task of toDoList){
        console.log(`Task: ${task.task}`)
        console.log(`Status: ${task.complete} \n`)
    }
    console.log(' *** *** ** *** ***'.green)
}

const updateTask = (task, newStatus) => {
    console.log(toDo.updateTaks(task, newStatus))
}

const deleteTask = (task) => {
    let deletedTask = toDo.deleteTask(task)
    console.log(`Deleted task: ${deletedTask.task}`)
}

switch (argv._[0]) {
    case 'new':
        addNewTask(argv.task)
        break;
    case 'list':
        listTasks(argv.complete)
        break;
    case 'update':
        updateTask(argv.task, argv.complete)
        break;
    case 'delete':
        deleteTask(argv.task)
        break;

    default:
        console.log(`${argv._[0]} - Command not found`)
        break;
}

