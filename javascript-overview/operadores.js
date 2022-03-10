const libsmStrings = require('./../../../lib/sum182/smStrings');

function testOperadores (){
    console.log('');
    libsmStrings.logConsoleHighlighted('Testando Operadores');   
    console.log("");

    var generateSerial = function(max) {
       /* if ((max === undefined) || (max ===null) || (max===0)){
            max = 1000;
        }*/

        /*if (!max){
            max = 1000;
        }*/

        max = max || 1000;

        return Math.floor(Math.random()*max);
    }

    console.log("generateSerial(1000) = ");
    console.log(generateSerial(1000));
    console.log("");

    console.log("generateSerial() = ");
    console.log(generateSerial());
    console.log("");

}

module.exports = {
    testOperadores
}