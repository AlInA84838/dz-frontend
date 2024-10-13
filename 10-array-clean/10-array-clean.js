function removeFunction(num){

    return num % 2 === 0;
}


function filterArray(arr, removeFunction) {

    let result = [];
    
   
    for (let i = 0; i < arr.length; i++) {
       
        if (!removeFunction(arr[i])) {
            result.push(arr[i]);
        }
    }
    
    return result;
}


const filteredNumbers = filterArray([1, 2, 3, 4, 5, 6], removeFunction)
console.log(filteredNumbers)




