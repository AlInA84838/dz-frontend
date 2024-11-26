const lan= prompt('Введите язык');

switch (true){
    case lan == 'eng':
        console.log('Hello!');
    break;
    case lan == 'ru':
        console.log('Привет!');
    break;
    case lan == 'de':
        console.log('Hallo!');
    break;
    default:
        console.log('Введите язык')
}
