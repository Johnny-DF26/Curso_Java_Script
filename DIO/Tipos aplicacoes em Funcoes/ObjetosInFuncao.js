const user = {
    id: 42,
    displayName: 'jdoe',
    fullName: {
        firstName: 'Johnny',
        lastname: 'Alves'
    }
}

function userId({id}) {
    return id;
}

function getfullName({fullName:{firstName:first, lastname:last}}) {
    return `${first} ${last}`
}

console.log(userId(user));
console.log(getfullName(user));