let temChaveDeFero = true;
let temMapa = false;
let nivel = 7;
let vida = 45;

let podeEntrarCaverna = temChaveDeFero && temMapa;
console.log(`Pode entrar na Caverna das Sombras? ${podeEntrarCaverna}`);

let podeEntrarTemplo = nivel >=5 || temChaveDeFero;
console.log(`Pode entrar no Templo do Dragão? ${podeEntrarTemplo}`);

let podeEntrarBosque = vida < 50 && !temMapa;
console.log(`Pode entrar no Bosque da Recuperação? ${podeEntrarBosque}`);