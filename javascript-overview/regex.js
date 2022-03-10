const libsmStrings = require('./../../../lib/sum182/smStrings');

function testRegex(){
    var pessoa = {};

    console.log('');
    libsmStrings.logConsoleHighlighted('Testando Regex');   

    //Passo 1
    var regExp = /9999-9999/;
    var telefone = "9999-9999";
    console.log('');
    console.log('Passo 1');
    console.log("regExp.exec(telefone)");
    console.log(regExp.exec(telefone));

    console.log('');
    console.log("regExp.test(telefone)");
    console.log(regExp.test(telefone));




    //Passo 2
    var regExp = /\(48\) 9999-9999/;
    var telefone = "(48) 9999-9999";
    console.log('');
    console.log('Passo 2');
    console.log("regExp.exec(telefone)");
    console.log(regExp.exec(telefone));

    console.log('');
    console.log("regExp.test(telefone)");
    console.log(regExp.test(telefone));    


    //Passo 3
    var regExp = /^\(48\) 9999-9999$/;
    var telefone = "(48) 9999-9999";
    console.log('');
    console.log('Passo 3');
    console.log("regExp.exec(telefone)");
    console.log(regExp.exec(telefone));

    console.log('');
    console.log("regExp.test(telefone)");
    console.log(regExp.test(telefone));    


    //Passo 4
    var regExp = /^\([0-9][0-9]\) [0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;
    var telefone = "(48) 9876-1234";
    console.log('');
    console.log('Passo 4');
    console.log("regExp.exec(telefone)");
    console.log(regExp.exec(telefone));

    console.log('');
    console.log("regExp.test(telefone)");
    console.log(regExp.test(telefone));        



    //Passo 5
    var regExp = /^\([0-9]{2}\) [0-9]{4}-[0-9]{4}$/;
    var telefone = "(48) 9876-1234";
    console.log('');
    console.log('Passo 5');
    console.log("regExp.exec(telefone)");
    console.log(regExp.exec(telefone));

    console.log('');
    console.log("regExp.test(telefone)");
    console.log(regExp.test(telefone));        

   //Passo 6
   var regExp = /^\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}$/;
   var telefone = "(48) 9876-1234";
   var telefone2 = "(11) 98214-1234";
   console.log('');
   console.log('Passo 6');
   console.log("regExp.exec(telefone)");
   console.log(regExp.exec(telefone));

   console.log('');
   console.log("regExp.test(telefone)");
   console.log(regExp.test(telefone));        
   
   console.log('');
   console.log("regExp.test(telefone2)");
   console.log(regExp.test(telefone2));     

   //Passo 7
   var regExp = /^\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}$/;
   var telefone = "(80) 98761234";
   var telefone2 = "(80) 99876-1234";

   console.log('');
   console.log('Passo 7');
   console.log("regExp = " + regExp);   
   
   console.log("regExp.exec(telefone)");
   console.log(regExp.exec(telefone));

   console.log('');
   console.log("regExp.test(telefone)");
   console.log(regExp.test(telefone));        
   
   console.log('');
   console.log("regExp.test(telefone2)");
   console.log(regExp.test(telefone2));        

   //Passo 9
   var regExp = /^\(\d{2}\)\s\d{4,5}-?\d{4}$/;
   var telefone = "(80) 98761234";
   var telefone2 = "(80) 99876-1234";

   console.log('');
   console.log('Passo 9');
   console.log("regExp = " + regExp);   
   
   console.log("regExp.exec(telefone)");
   console.log(regExp.exec(telefone));

   console.log('');
   console.log("regExp.test(telefone)");
   console.log(regExp.test(telefone));        
   
   console.log('');
   console.log("regExp.test(telefone2)");
   console.log(regExp.test(telefone2));           






}

module.exports = {
    testRegex
}

