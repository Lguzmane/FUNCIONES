
function cambiarColorNegro(element) {
    element.style.backgroundColor = 'black';
}


document.getElementById("div1").addEventListener("click", function() {
    cambiarColorNegro(this);
});

document.getElementById("div2").addEventListener("click", function() {
    cambiarColorNegro(this);
});

document.getElementById("div3").addEventListener("click", function() {
    cambiarColorNegro(this);
});

document.getElementById("div4").addEventListener("click", function() {
    cambiarColorNegro(this);
});


let colorGlobal;


document.addEventListener('keydown', function (event) {
    const keyDiv = document.getElementById('key');

    if (event.key === 'a') {
        colorGlobal = 'pink';
        keyDiv.style.backgroundColor = colorGlobal;
    } else if (event.key === 's') {
        colorGlobal = 'orange';
        keyDiv.style.backgroundColor = colorGlobal;
    } else if (event.key === 'd') {
        colorGlobal = 'lightblue';
        keyDiv.style.backgroundColor = colorGlobal;
    } else if (event.key === 'q') {
        crearDivNuevo('purple');
    } else if (event.key === 'w') {
        crearDivNuevo('gray');
    } else if (event.key === 'e') {
        crearDivNuevo('brown');
    }
});


function crearDivNuevo(color) {
    const nuevoDiv = document.createElement('div');
    nuevoDiv.classList.add('color-box');
    nuevoDiv.style.backgroundColor = color;
    document.body.appendChild(nuevoDiv);
}
