
function newArr(arr) {
    let rusArr = [];
    let engArr = [];
    let endArray = [];

    arr.forEach(date => {
        if (date.includes('.')) {
            rusArr.push(date.split('.').map(Number));
        } else if (date.includes('/')) {
            engArr.push(date.split('/').map(Number));
        }
    });

    rusArr = rusArr
        .filter(part => part.length === 3)
        .filter(part => (part[0] >= 1 && part[0] <= 31) && (part[1] >= 1 && part[1] <= 12))
        .map(part => part.join('.'));

    rusArr = rusArr.filter((date) => {
        const [day, month, year] = date.split('.').map(Number);
        if (month === 2 && day === 29) {
            if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
                return true;
            }
            return false;
        }
        return true;
    });


    engArr = engArr
        .filter(part => part.length === 3)
        .filter(part => (part[1] >= 1 && part[1] <= 31) && (part[0] >= 1 && part[0] <= 12))
        .map(part => part.join('/'));

    engArr = engArr.filter((date) => {
        const [month, day, year] = date.split('/').map(Number);
        if (month === 2 && day === 29) {
            if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
                return true;
            }
            return false;
        }
        return true;
    });


    endArray = rusArr.concat(engArr);

    return endArray;
}

console.log(newArr(["10.02.22", "29.2.23", "41.12", "02/31/23", '2/29/24']));
