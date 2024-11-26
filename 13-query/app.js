const data = {
    name: 'Kirill',
    surname: 'Pupkov',
    age: 28,
    number: '89508748398',
};

function makeURL(data) {
let arr = [];
    for (let el in data) {
        arr.push(el + '=' + data[el])
    }
    arr = arr.join('&')
return arr
};

console.log(makeURL(data))