
function calc(operation) {
    
    const value1 = document.querySelector('.input1').value;
    const value2 = document.querySelector('.input2').value;
    
    if(!value1 || !value2) {
        return;
    }
    const num1 = Number(value1);
    const num2 = Number(value2);
    let result;
    
    switch (operation) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num2 !== 0 ? num1 / num2 : 'Ошибка';
        break;
    default:
        result = 'Неизвестная операция';
}
    document.querySelector('.input1').value = '';
    document.querySelector('.input2').value = '';
    document.querySelector('.result').innerText = `Ответ: ${result}`;
}