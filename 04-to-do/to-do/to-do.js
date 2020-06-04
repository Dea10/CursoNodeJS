const fs = require('fs')

// json's array toDoList = []
// create toDoTask()
// update DB tasks file

let toDoList = []

const saveDB = () => {
    let data = JSON.stringify(toDoList)

    fs.writeFile('./db/data.json', data, (err) => {
        if (err)
            throw new Error(err)
    })
}

const loadDB = () => {
    try {
        toDoList = require('../db/data.json')
    } catch (error) {
        toDoList = []
    }
}

const createToDoTask = (task) => {
    let newTask = {
        task,
        complete: false
    }

    loadDB()
    toDoList.push(newTask)
    saveDB()

    return newTask
}

const getToDoList = () => {
    loadDB()
    return toDoList
}

const updateTaks = (incomingTask, newStatus = true) => {
    loadDB()

    let index = toDoList.findIndex(item => item.task === incomingTask)

    if(index >= 0) {
        toDoList[index].complete = newStatus
        saveDB()
        return true
    } else {
        return false
    }
}

const deleteTask = (incomingTask) => {
    loadDB()

    let index = toDoList.findIndex(item => item.task === incomingTask)

    if(index >= 0) {
        let removedTask = toDoList[index]
        toDoList.splice(index, 1)
        saveDB()
        return removedTask
    } else {
        return false
    }
}

module.exports = {
    createToDoTask,
    getToDoList,
    updateTaks,
    deleteTask
}