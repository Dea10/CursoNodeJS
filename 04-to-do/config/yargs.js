const newOpts = {
    task: {
        alias: 't',
        require: true
    }
}

const updateOpts = {
    task: {
        alias: 't',
        require: true
    },
    complete: {
        alias: 'c',
        default: true,
        type: 'boolean'
    }
}

const listOpts = {
    complete: {
        alias: 'c',
        type: 'boolean'
    }
}

const deleteOpts = newOpts

const argv = require('yargs')
    .command('new', 'Create a new to-do task', newOpts)
    .command('update', 'Update a to-do task', updateOpts)
    .command('list', 'List all to-do tasks', listOpts)
    .command('delete', 'Delete a task', deleteOpts)
    .help()
    .argv;


module.exports = {
    argv
}