const libsmStrings = require('./../../../lib/sum182/smStrings');
const numbers = require('./numbers');
const strings = require('./strings');
const booleans = require('./boolean');


function main(){
    try {
        console.clear;
        libsmStrings.logConsoleHighlighted('App javascript-definitions em execução');
        console.log('');

        numbers.TestNumbers();  
        strings.TestStrings();
        booleans.TestBoolean();

        console.log('');

    } catch (error) {
        console.log('Erro ao relizar processamento!');

        
    }

}

//Executa método principal
main();
