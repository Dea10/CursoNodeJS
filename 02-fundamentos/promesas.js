let employees = [{
    id: 1,
    name: "Daniel"
},
{
    id: 2,
    name: "Melissa"
},
{
    id: 3,
    name: "Juan"
}];

let wages = [{
    id: 1,
    wage: 1000
},
{
    id: 2,
    wage: 2000
}];

let getEmployee = (id) => {

    return new Promise((resolve, reject) => {
        let employeeDB = employees.find(employee => employee.id === id);

        if (!employeeDB) {
            reject("No se encontró un empleado con id: " + id);
        } else {
            resolve(employeeDB);
        }
    });
}

let getWage = (employee) => {
    return new Promise((resolve, reject) => {
        let wageDB = wages.find(wage => wage.id === employee.id);

        if(!wageDB) {
            reject(`No se encontró un salario para el empleado: ${employee.name}`);
        } else {
            resolve({
                id: employee.id,
                name: employee.name,
                wage: wageDB.wage
            });
        }
    });
}

/*
getEmployee(4).then(employee => {
    //console.log(employee);
    
    getWage(employee).then(resp => {
        console.log(resp);
    }, (err) => {
        console.log(err);
    });

}, (err) => {
    console.log(err);
});
*/

getEmployee(4).then(employee => {
    return getWage(employee);
})
.then(resp => {
    console.log(resp);
})
.catch(err => {
    console.log(err);
});