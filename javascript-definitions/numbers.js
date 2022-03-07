const libsmStrings = require('./../../../lib/sum182/smStrings');


function TestNumbers(){
    var nota = 10;
    var nota2 = 8.5;

    console.log('');
    libsmStrings.logConsoleHighlighted('Testando Numbers');   
    console.log('var nota = ' + nota);
    console.log('var nota2 = '+ nota2);
    
    console.log('nota.toExponential(2): ' + nota.toExponential(2));
    console.log('nota.toFixed(2): ' + nota.toFixed(2));
    console.log('nota.toPrecision(1): ' + nota.toPrecision(1));
    console.log('nota.toString(): ' + nota.toString());
    console.log('nota.valueOf(): ' + nota.valueOf());

    console.log('Math.round(nota2) ' + Math.round(nota2));
}


module.exports = {
    TestNumbers
}
