
let elements = document.getElementsByTagName('p');

function randomNumber () {
    return Math.ceil(Math.random() * 100);
}

for(let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = randomNumber().toString();
}




