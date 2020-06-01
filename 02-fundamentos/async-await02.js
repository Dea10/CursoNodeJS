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

let getEmployee = async (id) => {

    let employeeDB = employees.find(employee => employee.id === id);

    if (!employeeDB) {
        throw new Error("No se encontró un empleado con id: " + id);
    } else {
        return employeeDB;
    }

}

let getWage = async (employee) => {

    let wageDB = wages.find(wage => wage.id === employee.id);

    if (!wageDB) {
        throw new Error(`No se encontró un salario para el empleado: ${employee.name}`);
    } else {
        return {
            id: employee.id,
            name: employee.name,
            wage: wageDB.wage
        };
    }

}

let getInfo = async (id) => {

    let employee = await getEmployee(id);
    let resp = await getWage(employee);

    return resp;
}

getInfo(4)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));