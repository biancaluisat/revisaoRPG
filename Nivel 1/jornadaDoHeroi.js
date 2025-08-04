let nome = "Frieren";
let classe = "Maga Elfa";
let nivel = 95;
let vida = 86;
let ouro = 100;
let xp = 70;
let manaAtual = 70;
let manaMaxima = 150;
let agilidadeBase = 30;
let danoBase = 100;
let defesaBase = 35;

const NOMEARMA = "Cajado Feiticeiro";
const NOMEARMADURA = "Proteção de Fern";

// O personagem treinou e ganhou 150 pontos de experiência
xp += 150;

// Comprou uma poção por 30 moedas de ouro
ouro -= 30;

// Usou a poção e recuperou 40 pontos de vida
vida += 40;

// A arma foi encantada, e seu dano foi dobrado
danoBase *= 2;

ataqueTotal = nivel + danoBase;
defesaTotal = defesaBase + (nivel / 2);

vidaSuficiente = vida > 70;
ataqueForte = ataqueTotal > 60;
nivelAvancado = nivel >= 10;
podeEnfrentarZoltraak = vidaSuficiente && (ataqueForte || nivelAvancado);

console.log(`⊹ ࣪📜 ˖ ${nome} e a Jornada para o Além`);
console.log(". ݁₊ ⊹ . ݁ ⟡ ݁ . ⊹ ₊ ݁.");
console.log(`${nome}, uma ${classe} solitária, é uma antiga aventureira que, junto de seus antigos companheiros: Himmel o herói humano, Eisen o anão guerreiro e Heiter o sacerdote e seu ${NOMEARMA} tinha o grande objetivo de derrotar o Rei Demõnio.`);
console.log(`Por ser uma ${classe}, seu tempo de vida se extende e, consequentemente, presencia a morte de todos em sua volta.`);
console.log("Isso a faz construir uma barreira entre ela e as pessoas em sua volta, mas um dia, seu antigo colega, Himmel, morre, e Frieren chora pela primeira vez pela morte de um humano.");
console.log("Ela percebe que a vida entre as pessoas entre ela, de fato, é muito curta, mas vendo seu ex companheiro deitado no caixão, a faz se arrepender de não te-lo conhecido melhor.");
console.log("Com isso, Frieren sai em uma jornada afim de passar por vilareijos ajudando os humanos em sua volta e os conhecendo.");
console.log(`${nome} é uma ${classe} temida por ser muito forte e possuir muito conhecimentos. Em toda sua jornada juntou milhares de poderes, atingiu o seu atual nível ${nivel} e ${ataqueTotal} de ataque.`);
console.log(`É claro que nessa jornada, sua ${NOMEARMADURA} foi muito importante para sua proteção, sendo um presente enviado de sua antiga mestra, que a tinha como aprendiz e que a ensinou toda sua defesa atual de ${defesaTotal}.`);
console.log(`Além do mais, ela possui ${xp} de experiência e ${vida} de vida. Apesar de poderosa, ${nome} não costuma ter muito ouro, levando consigo ${ouro}.`);
console.log(". ݁₊ ⊹ . ݁ ⟡ ݁ . ⊹ ₊ ݁.")
console.log(`⤷ ${nome} possui vida suficiente? ${vidaSuficiente} | ataque forte? ${ataqueForte} | nível avançado? ${nivelAvancado}.`);
console.log(`⤷ Logo, pode derrotar o grande temido Zoltraak? ${podeEnfrentarZoltraak}.`);

// Recaptulação de como acabamos. . . 

console.log("_________________________________________");
console.log(`⭐| Nível: ${nivel}`);
console.log(`❤️| Vida: ${vida}`);
console.log(`🪙| Ouro: ${ouro}`);
console.log(`🪄| XP: ${xp}`);
console.log(`🧙‍♀️| Mana: ${manaAtual}`);
console.log(`🏹| Agilidade: ${agilidadeBase}`);
console.log("_________________________________________");
console.log("");

// Primeira situação: Condicionais Simples.

console.log("── 𝐂𝐀𝐏𝐈́𝐓𝐔𝐋𝐎 𝐔𝐌 . . .");
console.log("");
console.log(`Após um tempo de jornada de ${nome}, avistando um pequeno vilarejo, ela para para passear. Lá, ela encontra muitas pessoas, porém, um comerciante à chama a atenção.`);
console.log(`No pequeno comércio deste homem, há várias jóias, que são apresentadas a ela como mágicas e da sorte, e logo ${nome} deseja comprar a mais bela jóia de cor violeta.`);
console.log("");

let preçoJoia = 10;
if (ouro >= preçoJoia) {
    ouro -= preçoJoia;
    console.log(`── Parabéns ${nome}! Você adquiriu a Jóia Violeta. Há ${ouro} restantes.💍₊˚⊹`);
}

console.log("");
console.log(`Andando mais um pouco, ${nome} avista uma moeda de ouro rolando em direção a um ralo de esgoto..`);
console.log("");

if (agilidadeBase >= 40) {
    ouro++;
    console.log(`── Parabéns, você resgatou a moedinha de cair no esgoto. Agora você tem ${ouro} ouros!🪙₊˚⊹`);
    console.log("");
}

console.log(`${nome} agora podia finalizar seu dia. Como acabava sendo reconhecida por derrotar o Rei Demônio e o temido Zoltraak, acabava que sua estadia durante o tempo que passasse no vilarejo era por conta da casa, podendo enfim descansar.`);

if (vida < 100) {
    vida += 10;
    console.log(`── ${nome}, você descansou e recuperou o total de 10 de vida!💚₊˚⊹`);
}

console.log("_________________________________________");
console.log(`⭐| Nível: ${nivel}`);
console.log(`❤️| Vida: ${vida}`);
console.log(`🪙| Ouro: ${ouro}`);
console.log(`🪄| XP: ${xp}`);
console.log(`🧙‍♀️| Mana: ${manaAtual}`);
console.log(`🏹| Agilidade: ${agilidadeBase}`);
console.log("_________________________________________");
console.log("");

// Segunda situação: Condicionais Compostas.

console.log("── 𝐂𝐀𝐏𝐈́𝐓𝐔𝐋𝐎 𝐃𝐎𝐈𝐒 . . .");
console.log("");
console.log(`Antes de partir do vilarejo, ${nome} deseja comprar uma poção de mana, para garantir caso alguma coisa aconteça.`);
console.log("");

if (ouro >= 25) {
    console.log(`── ${nome} comprou a poção e recuperou 30 de mana!🧙‍♀️₊˚⊹`);
    manaAtual += 30;
} else {
    console.log(`── Poxa, ${nome}, não foi dessa vez que você conseguiu comprar. Quem sabe numa próxima você possuí mais ouros?! ₊˚⊹`);
}

console.log("");
console.log(`Andando mais para frente, ${nome} derruba seu Cajado Feiticeiro sem querer..`);
console.log("");

if (agilidadeBase >= 30) {
    console.log(`── Ufa! O cajado foi resgatado a tempo, quase que cai no chão!😅₊˚⊹`);
} else {
    console.log(`── O Cajado caiu... infelizmente, seu dano foi afetado... ₊˚⊹`);
    danoBase -= 20;
}

console.log("_________________________________________");
console.log(`⭐| Nível: ${nivel}`);
console.log(`❤️| Vida: ${vida}`);
console.log(`🪙| Ouro: ${ouro}`);
console.log(`🪄| XP: ${xp}`);
console.log(`🧙‍♀️| Mana: ${manaAtual}`);
console.log(`🏹| Agilidade: ${agilidadeBase}`);
console.log("_________________________________________");
console.log("");

// Terceira situação: Condicionais Encadeadas.

console.log("── 𝐂𝐀𝐏𝐈́𝐓𝐔𝐋𝐎 𝐓𝐑𝐄̂𝐒 . . .");
console.log("");

console.log(`Prosseguindo sua missão, em uma caverna não tão distante de onde ${nome} havia se hospedado, um lobo da neve é avistado.`);
console.log(`Ela ja havia ouvido histórias sobre esse lobo, que era temido, mau e esperto. Não tinha quem derrotasse. A lenda dizia que o lobo guardava grimórios nunca lidos, poções de ancestrais importantes, tranqueiras que ${nome} tanto gostava. Ela ja estava decidida de quem derrotar.`);
console.log("");

if (vida >= 100 && manaAtual >= 100) {
    console.log(`── ${nome} está preparadíssima para a batalha, atacar!⚔️₊˚⊹`);
} else if (vida >= 70 && manaAtual >= 75) {
    console.log(`── ${nome} pode lutar, mas é melhor ter cautela!🛡️₊˚⊹`);
}else {
    console.log(`── Apenas corra!! É perigoso lutar nessas condições.🏃‍♀️₊˚⊹`);
}

console.log("");
console.log(`Após passar o lobo, ${nome} descobriu que o que contavam sobre o lobo eram mitos exagerados, pois tudo que achou em sua caverna foram pilhas de ossos e um baú que possuia apenas um grimório que ensinava a magia de adestrar qualquer animal. Mas tudo bem, apesar de ${nome} se decepcionar com isso, pois amava tranqueiras mágicas, sua jornada de estava pronta para ser continuada...`);

console.log("_________________________________________");
console.log(`⭐| Nível: ${nivel}`);
console.log(`❤️| Vida: ${vida}`);
console.log(`🪙| Ouro: ${ouro}`);
console.log(`🪄| XP: ${xp}`);
console.log(`🧙‍♀️| Mana: ${manaAtual}`);
console.log(`🏹| Agilidade: ${agilidadeBase}`);
console.log("_________________________________________");