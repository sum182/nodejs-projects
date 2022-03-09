const libsmStrings = require('./../../../lib/sum182/smStrings');
const numbers = require('./numbers');
const strings = require('./strings');
const booleans = require('./boolean');
const objects = require('./objects');
const functions = require('./functions');


function main(){
    try {
        console.clear;
        libsmStrings.logConsoleHighlighted('App javascript-definitions em execução');
        console.log('');

        numbers.TestNumbers();  
        strings.TestStrings();
        booleans.TestBoolean();
        objects.TestObjects();
        functions.TestFunctions();

        console.log('');

    } catch (error) {
        console.log('Erro ao relizar processamento!');
        console.log(error);

        
    }

}

//Executa método principal
main();
