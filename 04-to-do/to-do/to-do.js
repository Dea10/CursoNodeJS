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
        else
            console.log(`${data} added to data.json`)
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

module.exports = {
    createToDoTask,
    getToDoList
}