const libsmStrings = require('./../../../lib/sum182/smStrings');

function testBoolean(){
    var nome = "AgileCode";
    var nota = 10;
    var Lista = {};

    console.log('');
    libsmStrings.logConsoleHighlighted('Testando Booleans');    

    console.log('!!0 = ' + !!0);
    console.log('!!NaN = ' + !!NaN);
    console.log('!!"" = ' + !!'');
    console.log('!!undefined = ' + !!undefined);
    console.log('!!null = ' + !!null);

    console.log('');
    console.log('Todos os outros são truthy por padrão');

    if(nome){
      console.log('if(nome) = true')    
    }

    if(nota){
        console.log('if(nota) = true')    
    }
    
    console.log('!!Lista = ' + !!Lista);

}


module.exports = {
    testBoolean
}