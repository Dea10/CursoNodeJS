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

let getEmployee = (id , callback) => {

    let employeeDB = employees.find(employee => employee.id === id);

    if(!employeeDB) {
        callback("No se encontró un empleado con id: " + id);
    } else {
        callback(null, employeeDB);
    }
}

let getWage = (employee, callback) => {

    let wageDB = wages.find(wage => wage.id === employee.id);

    if(!wageDB) {
        callback("No se encontró un salario para el empleado: " + employee.name);
    } else {
        /*
        let employeeWage = {
            name: employeeDB02.name,
            wage: employeeDB.wage
        };
        */

        callback(null, {
            id: employee.id,
            name: employee.name,
            wage: wageDB.wage
        });
    }

}

getEmployee(1, (err, employee) => {
    
    if(err) {
        return console.log(err);
    }

    //console.log(employee);

    getWage(employee, (err, EmployeeWage) => {
        if(err) {
            return console.log(err);
        }

        console.log(EmployeeWage);
    });

});

/*
getWage(3, (err, employee) => {

    if(err) {
        return console.log(err);
    }

    console.log(employee);
});
*/