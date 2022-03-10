const libsmStrings = require('./../../../lib/sum182/smStrings');

function testDates (){
    console.log('');
    libsmStrings.logConsoleHighlighted('Testando Dates');   
    console.log("");

    var hoje = new Date();
    console.log("");
    console.log("var hoje = new Date()");
    console.log(hoje);

    console.log("hoje.getTime = ");
    console.log(hoje.getTime());



    


   


    

}

module.exports = {
    testDates
}