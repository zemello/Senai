//------------------------------------------------------------------ CADASTRO DE PEÇAS SENAI 15/09/2021---------------------------------------

////----------------------------------------------------------------------QUANTIDADE DE PEÇAS---------------------------------------------------------------
//declarando lista de peças
const listaDePecas = ['Peca de teste', 'AB', "Peca 8"];
console.log('Quantidade de peças');
//estrutura de condição simples para contagem de peças
if (listaDePecas.length <= 10) {
    console.log('As peças podem ser cadastradas!');
};

//----------------------------------------------------------------------QUANTIDADE DE CARACTERES----------------------------------------------------------------------
console.log('QUANTIDADE DE CARACTERES');
//estrutura de repetição para quantidade de caracteres
for (let i = 0; i < listaDePecas.length; i++) {
    // declarando peça atual
    const pecaAtual = listaDePecas[i];
    if (pecaAtual.length < 3) {
        console.log(pecaAtual, ': a peça possui nome inferior a 3 caracteres e não pode ser cadastrada.');
    } else {
        console.log(pecaAtual, ': a peça pode ser cadastrada!');
    }
};

//--------------------------------------------------------------------------PESO DA PEÇA-----------------------------------------------------------------------------
console.log('PESO DA PEÇA');
//declarando peso da peça
const pesoDaPecaEmGramas = 50;
//estrutura de condição composta para peso em gramas
if(pesoDaPecaEmGramas >= 100) {
    console.log("peso suficiente.");
} else {
    console.log('peso insuficiente');
};