const libsmStrings = require('./../../../lib/sum182/smStrings');

function testArrays (){
    console.log('');
    libsmStrings.logConsoleHighlighted('Testando Arrays');   
    console.log("");

    var carros = [];

    carros[0] = "Ka";
    carros[1] = "Corsa";
    carros[2] = "Palio";

    console.log("");
    console.log("carros = ");
    console.log(carros);

    console.log("");
    console.log("carros.valueOf() = ");
    console.log(carros.valueOf());

    console.log("");
    console.log("carros.toString() = " + carros.toString());

    console.log("");
    console.log("carros.length = ");
    console.log(carros.length);


    carros.push("Gol")
    console.log("");
    console.log("inserindo elementos com o comando push");
    console.log("carros.push('Gol')");
    console.log("carros.toString() = " + carros.toString());

    carros.pop();
    console.log("");
    console.log("removendo elementos com o comando pop");
    console.log("carros.pop()");
    console.log("carros.toString() = " + carros.toString());


    console.log("");
    console.log("localizando elementos");
    console.log("carros.indexOf('Corsa')");
    console.log("carros.toString() = " + carros.indexOf("Corsa"));


    console.log("");
    console.log("deletando elementos com o comando splice");
    var pos = carros.indexOf("Corsa");
    carros.splice(pos,1);
    console.log("carros.toString() = " + carros.toString());
    console.log("carros.length = " + carros.length);
    

    console.log("");
    console.log("adicionando elementos com o comando splice");
    var pos = carros.indexOf("Ka");
    carros.splice(pos,0,"Corsa");
    console.log("carros.toString() = " + carros.toString());
    console.log("carros.length = " + carros.length);


    
    console.log("");
    console.log("substituindo elementos com o comando splice");
    var pos = carros.indexOf("Corsa");
    carros.splice(pos,1,"Sonic");
    console.log("carros.toString() = " + carros.toString());
    console.log("carros.length = " + carros.length);

    console.log("");
    console.log("percorrendo um Array");

    carros.forEach(function (elemento){
        console.log(elemento);
    });

    carros = [];
    carros[0] = {marca:"Ford",modelo:"Ka"};
    carros[1] = {marca:"Chevrolet",modelo:"Corsa"};
    carros[2] = {marca:"Fiat",modelo:"Palio"};
    carros[3] = {marca:"Ford",modelo:"Focus"};

    var carrosFord = carros.filter(function (elemento){
       return elemento.marca === "Ford";
    }
    )


    console.log("");
    console.log("filtrando o array");

    carrosFord.forEach(function (elemento){
        console.log(elemento);
    });
    


   


    

}

module.exports = {
    testArrays
}