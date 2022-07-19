const user = {
    id: 42,
    displayName:'Jdoe',
    fullName: {
        firstName: 'Johnny',
        lastName: 'Doe'
    }
};

function userId({id}) {
    return id;
}

function getFullName({fullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`;
}

console.log('Id:',userId(user));
console.log('Nome Completo:',getFullName(user));