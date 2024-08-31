const password = 'qwertyuiop'

function crypto(password) {
    const p = password.split('');
    const a = p.slice(0,6);
    const b = p.slice(6,8);
    const c = p.slice(8);

    const crP = [].concat(b,a,c).join('')
    
    return (crP)
}


const password2 = 'uiqwertyop'

function back(password2) {
    const e = password2.split(' ');
    const startPas = (e == crypto(password)) ? true : false;
    return startPas
}



console.log (crypto(password))
console.log (back(password2))


