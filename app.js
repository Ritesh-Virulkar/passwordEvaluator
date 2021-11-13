const input = document.querySelector('#userInput');
const p1 = document.querySelector('#one');
const p2 = document.querySelector('#two');
const p3 = document.querySelector('#three');
const p4 = document.querySelector('#four');
const p5 = document.querySelector('#five');
const p6 = document.querySelector('#six');
const specialChar = ['!', '@', '#', '$', '%', '^', '&', '*'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const alphaLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const upperCase = alphaLower.map(upper);

function upper(letter){
    return letter.toUpperCase();
}

function isUpperCase(password) {
    if(upperCase.some(function(v) { return password.indexOf(v) >= 0})){
        p6.classList.add('green');
    }
    else{
        p6.classList.remove('green');
    }
}

function lower(password) {
    if(alphaLower.some(function(v) { return password.indexOf(v) >= 0})){
        p4.classList.add('green');
    }
    else{
        p4.classList.remove('green');
    }
}

function nums(password) {
    if (numbers.some(function (v) { return password.indexOf(v) >=0 })){
        p5.classList.add('green');
    }
    else{
        p5.classList.remove('green');
    }
}
function specialCharacter(password){
    if (specialChar.some(function(v) { return password.indexOf(v) >= 0; })) {
        p3.classList.add('green');
    }
    else{
        p3.classList.remove('green');
    }
}
function passLength(password) {
    if (password.length > 6){
        p1.classList.add('green');
    }
    else{
        p1.classList.remove('green');
    }
}
function noSpaces(password){
    if (password.indexOf(' ') === -1 && password.length !== 0){
        p2.classList.add('green');
    }
    else{
        p2.classList.remove('green');
    }
}
input.addEventListener('input', () => {
    const password = input.value;
    passLength(password);
    specialCharacter(password);
    nums(password);
    noSpaces(password);
    lower(password);
    isUpperCase(password);
})