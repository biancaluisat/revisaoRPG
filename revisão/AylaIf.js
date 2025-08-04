let ouro = 1000;
let valorEspada = 50;
console.log(`Ouro inicial: ${ouro}`);
let xp = 10;

if (ouro >= valorEspada && xp > 80) {
    console.log("Obaaaa, espada comprada com sucesso!");
    ouro -= valorEspada;
    console.log(`Ouro final: ${ouro}`);
} else if (ouro >= valorEspada && xp <= 50){
    console.log("Você possui dinheiro, mas seu xp é insuficiente.");
} else {
    let diferenca = valorEspada - ouro;
    console.log(`Pobrinha, seu saldo é insuficiente, faltam ${diferenca} ouros..`);
}

