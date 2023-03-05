let quiereFrito = confirm("Quieres el huevo frito?");
let cocinado;

if (quiereFrito) {
    cocinado = "frito";
} else {
    cocinado = "hervido";
}

let conSal = confirm("Quieres sal en el huevo?");

if (conSal) {
    cocinado += " con sal";
}

console.log(`Aqui tienes tu huevo ${cocinado} en el plato.`);
