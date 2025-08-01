let nome = "Ayla";
let nivel = 1;
let xp = 0;
let ouro = 50;
let vida = 100;

console.log(`✨ O início da jornada de ${nome}!`);
console.log(`🏆 Nível: ${nivel}`);
console.log(`⭐ Xp: ${xp}`);
console.log(`💲 Ouro: ${ouro}`);
console.log(`❤ Vida: ${vida}`);

xp += 20;
ouro += 100;
vida -= 30;
ouro *= 2;
nivel++;
vida /= 2;

console.log("")
console.log(`⚔ O Final da jornada de ${nome}!`);
console.log(`🏆 Nível: ${nivel}`);
console.log(`⭐ Xp: ${xp}`);
console.log(`💲 Ouro: ${ouro}`);
console.log(`❤ Vida: ${vida}`);

