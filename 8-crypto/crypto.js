
let p = 'hueghbsn'

function crypto(p) {
   const a = p.slice(0,6);
   const b = p.slice(6,8);
   const c = p.slice(8);
   
   const p = [].concat(b,a,c,d).join('')
    
    return (originalPassword)
}


function checkPassword(encryptedPassword, originalPassword) {

    if (!encryptedPassword || !originalPassword) {
        return false;
    }
    return originalPassword === crypt(encryptedPassword);
}


console.log (crypto(password), checkPassword(encryptedPassword, originalPassword))


