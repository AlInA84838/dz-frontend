function newArr(arr) {
    let endArr = [];

    arr.forEach(date => {
       
        if (date.includes('.')) {
            endArr.push(date.split('.').map(Number));
        } else if (date.includes('/')) {
            endArr.push(date.split('/').map(Number));
        }
    });

    endArr = endArr
        .filter(part => part.length === 3)
        .filter(part => (part[0] >= 1 && part[0] <= 31) && (part[1] >= 1 && part[1] <= 12))
        .map(part => part.join('.'));

    return endArr;
}

console.log(newArr(["10.02.22", "0.13.22", "41.12", "11/12/23"]));

