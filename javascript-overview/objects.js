const libsmStrings = require('./../../../lib/sum182/smStrings');

function testObjects(){
    var pessoa = {};

    console.log('');
    libsmStrings.logConsoleHighlighted('Testando Objetos');   
    console.log('pessoa1');
    console.log('typeof pessoa = ' + typeof pessoa);

    var pessoa2 = {
        nome: "João",
        idade: 20,
        telefone: null,
        endereco: {
            logradouro: "Av. Brasil",
            numero: 70,
            bairro: "Centro"
        }
    };

    console.log("");
    console.log("pessoa2");
    
    for(var propriedade in pessoa2){
        console.log(propriedade + " = " + pessoa2[propriedade]);
    }



}

module.exports = {
    testObjects
}

