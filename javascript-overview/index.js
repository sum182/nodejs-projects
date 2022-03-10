const libsmStrings = require('./../../../lib/sum182/smStrings');
const numbers = require('./numbers');
const strings = require('./strings');
const booleans = require('./boolean');
const objects = require('./objects');
const functions = require('./functions');
const arrays = require('./arrays');
const regex = require('./regex');
const date = require('./date');
const operadores = require('./operadores');


function main(){
    try {
        console.clear;
        libsmStrings.logConsoleHighlighted('App javascript-definitions em execução');
        console.log('');

        /*
        numbers.testNumbers();  
        strings.testStrings();
        booleans.testBoolean();
        objects.testObjects();
        functions.testFunctions();
        arrays.testArrays();
        regex.testRegex();
        date.testDates();
        */

        operadores.testOperadores();
        
        
        

        console.log('');

    } catch (error) {
        console.log('Erro ao relizar processamento!');
        console.log(error);

        
    }

}

//Executa método principal
main();
