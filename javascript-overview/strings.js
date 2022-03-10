const libsmStrings = require('./../../../lib/sum182/smStrings');

function testStrings(){
    var nome = "AgileCode";

    console.log('');
    libsmStrings.logConsoleHighlighted('Testando Strings');    
    console.log('var nome = ' + nome);
    console.log('nome.charAt(2) = ' + nome.charAt(2));
    console.log('nome.charCodeAt(0) = ' + nome.charCodeAt(0));
    console.log('nome.concat("!") = ' + nome.concat("!"));
    console.log('nome.indexOf("e") = ' + nome.indexOf('e'));
    console.log('nome.replace("Code","!") = ' + nome.replace('Code','!'));
    console.log('nome.split("e") = ' + nome.split('e'));
    
    
}

module.exports = {
    testStrings
}