/*
setTimeout(() => {
    console.log("Hello World!");
}, 3000);
*/

let getUserById = (id, callback) => {
    let user = {
        name: 'Daniel',
        id: id
    }

    if(id === 1) {
        callback("Error!");
    } else {
        callback(null, user);    
    }
}

getUserById(10, (err, user) => {

    if(err) {
        return console.log(err);
    }

    console.log("DB user: ",  user);

})