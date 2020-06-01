const fs = require('fs');

let listarTabla = (base, limite) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`)
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${base} is not a number`)
            return
        }

        if (!Number(limite)) {
            reject(`${limite} is not a number`)
            return
        }

        let table = '';

        for (let i = 1; i <= limite; i++) {
            table += `${base} * ${i} = ${base * i}\n`;
        }


        fs.writeFile(`tables/table-${base}`, table, (err) => {
            if (err)
                reject(err);
            else
                resolve(`table-${base}`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}