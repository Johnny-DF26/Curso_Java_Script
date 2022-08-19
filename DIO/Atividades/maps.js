function getAdmins(map) {
    let admins = []
    for ([key,value] of map) {
        if (value === 'Admin') {
            admins.push(k);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz','Admin');
usuarios.set('Johnny','Admin');
usuarios.set('Anna','Admin');
usuarios.set('pedro','User');

console.log(getAdmins(usuarios));