function pintar(element, color = 'green') {
    element.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");

// Al hacer clic en el elemento, se pasa el color amarillo como argumento
ele.addEventListener("click", function() {
    pintar(this, 'yellow');
});

// Cuando cargue la página o sin hacer clic, el color por defecto será verde
pintar(ele);
