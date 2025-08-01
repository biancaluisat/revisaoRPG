let nome = "Frieren";
let classe = "Maga Elfa";
let nivel = 95;
let vida = 86;
let ouro = 50;
let xp = 70;
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
console.log("");
console.log(`${nome}, uma ${classe} solitária, é uma antiga aventureira que, junto de seus antigos companheiros: Himmel o herói humano, Eisen o anão guerreiro e Heiter o sacerdote e seu ${NOMEARMA} tinha o grande objetivo de derrotar o Rei Demõnio.`);
console.log(`Por ser uma ${classe}, seu tempo de vida se extende e, consequentemente, presencia a morte de todos em sua volta.`);
console.log("Isso a faz construir uma barreira entre ela e as pessoas em sua volta, mas um dia, seu antigo colega, Himmel, morre, e Frieren chora pela primeira vez pela morte de um humano.");
console.log("Ela percebe que a vida entre as pessoas entre ela, de fato, é muito curta, mas vendo seu ex companheiro deitado no caixão, a faz se arrepender de não te-lo conhecido melhor.");
console.log("Com isso, Frieren sai em uma jornada afim de passar por vilareijos ajudando os humanos em sua volta e os conhecendo.");
console.log(`${nome} é uma ${classe} temida por ser muito forte e possuir muito conhecimentos. Em toda sua jornada juntou milhares de poderes, atingiu o seu atual nível ${nivel} e ${ataqueTotal} de ataque.`);
console.log(`É claro que nessa jornada, sua ${NOMEARMADURA} foi muito importante para sua proteção, sendo um presente enviado de sua antiga mestra, que a tinha como aprendiz e que a ensinou toda sua defesa atual de ${defesaTotal}.`);
console.log(`Além do mais, ela possui ${xp} de experiência e ${vida} de vida. Apesar de poderosa, ${nome} não costuma ter muito ouro, levando consigo ${ouro}.`);
console.log(`${nome} possui vida suficiente? ${vidaSuficiente} | ataque forte? ${ataqueForte} | nível avançado? ${nivelAvancado}.`);
console.log(`Logo, pode derrotar o grande temido Zoltraak? ${podeEnfrentarZoltraak}.`);