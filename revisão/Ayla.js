let vida = 60;
let energia = 40;
let xp = 1100;
let ouro = 200;
let nivel = 3;

if (vida >= 80) {
    console.log("Ayla está em ótimas condições.");
} else if (vida >= 40) {
    console.log("Ayla está ferida, mas ainda pode lutar.");
} else {
    console.log("Ayla está em estado crítico.");
}

if (vida >= 50 && energia >= 50) {
    console.log("Ayla está preparada para o calabouço.");
} else {
    console.log("Ayla não pode seguir.");
}

if (xp >= 1000) {
    nivel++;
    console.log (`Ayla subiu de nível! ${nivel}`);
} else {
    console.log("Adquira mais xp para subir de nível.");
}

if (ouro >= 300) {
    console.log("Ayla comprou a armadura mágica!");
} else {
    console.log("Ayla não tem ouro suficiente.");
}