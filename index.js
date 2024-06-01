// Selecciona los elementos de las publicaciones
let like1 = document.querySelector(".publi1");
let like2 = document.querySelector(".publi2");
let like3 = document.querySelector(".publi3");

// Selecciona los botones
let boton1 = document.getElementById("uno");
let boton2 = document.getElementById("dos");
let boton3 = document.getElementById("tres");

boton1.onclick = addLikes1;
boton2.onclick = addLikes2;
boton3.onclick = addLikes3;

let count1 = 9;
let count2 = 12;
let count3 = 9;

function addLikes1() {
    count1++;
    like1.innerHTML = count1 + " Like(s)";
}

function addLikes2() {
    count2++;
    like2.innerHTML = count2 + " Like(s)";
}

function addLikes3() {
    count3++;
    like3.innerHTML = count3 + " Like(s)";
}
