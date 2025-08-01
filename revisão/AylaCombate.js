let forcaBase = 10;
let defesaBase = 8;
let agilidadeBase = 12;

let bonusEspada = 5;
let bonusArmadura = 2;
let penalidadeEscudo = 4;

let forcaTotal = forcaBase + bonusEspada;
let defesaTotal = defesaBase + bonusArmadura;
let agilidadeFinal = agilidadeBase - penalidadeEscudo;

console.log("⚔ Para a batalha:");
console.log(`🎯 Força: ${forcaTotal}`);
console.log(`🛡 Defesa: ${defesaTotal}`);
console.log(`🏃🏻‍♀️ Agilidade: ${agilidadeFinal}`);