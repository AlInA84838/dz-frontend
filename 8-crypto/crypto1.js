let originalPassword = 'password'

function crypto(originalPassword) {

let encryptedPassword = originalPassword.split('');
[encryptedPassword[0, 2], encryptedPassword[4, 6]] = [encryptedPassword[4, 6], encryptedPassword[0, 2]];
[encryptedPassword[2, 4], encryptedPassword[3]] = [encryptedPassword[3], encryptedPassword[2, 4]];

encryptedPassword = encryptedPassword.join('')

return encryptedPassword;
}

console.log(crypto(originalPassword))

encryptedPassword = crypto(originalPassword)


function checkPassword(originalPassword, encryptedPassword) {

    if(crypto(encryptedPassword) === originalPassword) {
        return true
    }
    return false
}

console.log(checkPassword(originalPassword, encryptedPassword))




