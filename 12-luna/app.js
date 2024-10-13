
function checkNumberOfCard(cardNumber) {

    const cardNumberWithoutSpace = cardNumber.replaceAll(' ', '').split('');

    const oddIndex = cardNumberWithoutSpace
    .map((num, index) => Number(index % 2 === 0 ? (num * 2) > 9 ? num * 2 - 9 : num * 2 : num));
    
    const sumNumb = oddIndex.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
    const result = sumNumb % 10 === 0 ? true : false;

    return result
}





console.log(checkNumberOfCard('4  5  6  1     2  6  1  2     1  2  3  4     5  4  6  7'))