const libsmStrings = require('./../../../lib/sum182/smStrings');

function somar(a,b){
    return a + b;
}

var somarExpression = function(a,b){
    return a + b;
}

var somarExpressionNamed = function(a,b){
    return a + b;
}

function TestFunctions(){

    console.log('');
    libsmStrings.logConsoleHighlighted('Testando Functions');   

    console.log("");
    console.log("somar = " + somar);

    console.log("");
    console.log("somar(2,2) = " + somar(2,2));
   
    console.log("")
    console.log("function expression");
    console.log(somarExpression);
    console.log("somarExpression(2,2) = " + somarExpression(2,2));

    console.log("")
    console.log("function expression named");
    console.log(somarExpressionNamed);
    console.log("somarExpressionNamed(2,2) = " + somarExpressionNamed(2,2));    

    var produto = {nome: 'Sapato', preco: 150};
    
    var formulaImpostoA = function (preco) {
        return preco * 0.1;
    };

    var formulaImpostoB = function(preco){
        return preco * 0.2;
    }

    var calcularPreco = function(produto, formulaImposto){
        return produto.preco + formulaImposto(produto.preco);
    }

    console.log("formulaImpostoA(produto.preco) = " + formulaImpostoA(produto.preco));
    console.log("calcularPreco(produto, formulaImpostoA) = " + calcularPreco(produto, formulaImpostoA));
    console.log("calcularPreco(produto, formulaImpostoB) = " + calcularPreco(produto, formulaImpostoB));
    
    var helloWorld = function (){
        return function (){
            return "Hello World!";
        };
    };

    console.log("helloWorld = " + helloWorld);
    console.log("helloWorld() = " + helloWorld());
    console.log("helloWorld()() = " + helloWorld()());

    
   
    var  getIdade2 = function(){
        return this.idade;
    }


    var  getIdade3 = function(extra){
        return this.idade + extra;
    }
    var pessoa = {
        nome: "João",
        idade: 20,
        getIdade: function(){
            return this.idade;
        },
        getIdade2: getIdade2,
        getIdade3: getIdade3
    }

    //testando o getIdade de dentro do Objeto
    console.log("pessoa = " + pessoa);
    console.log("pessoa.getIdade = " + pessoa.getIdade);
    console.log("pessoa.getIdade() = " + pessoa.getIdade());

    //testando o getIdade de fora do objeto
    console.log("getIdade2() = " + getIdade2());
    console.log("pessoa.getIdade2() = " + pessoa.getIdade2());
    
    //call e apply
    console.log("");
    console.log("call e apply");
    console.log("getIdade3(2) = " + pessoa.getIdade3(2));
    console.log("getIdade3.call(pessoa,2) = " + getIdade3.call(pessoa,2));
    console.log("getIdade3.apply(pessoa, [2]) = " + getIdade3.apply(pessoa, [2]));
    
    
}

module.exports = {
    TestFunctions
}