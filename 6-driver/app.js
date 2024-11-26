const hasLicence = true;
const age = 18;
const isDrunk = false;

const message = hasLicence == true && age >= 18 && isDrunk == false ? 'Может' : 'Не может';
console.log(message);