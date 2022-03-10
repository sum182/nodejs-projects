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

function testFunctions(){

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
    
    //criar Objetos com funções
    console.log("");
    console.log("criar Objetos com funções");

    var criarPessoa = function(nome, idade){
        return {
            nome: nome,
            idade: idade
        };
    };
    
    console.log("");
    console.log("criarPessoa(Pedro,20) = ");
    console.log(criarPessoa("Pedro",20));
    
    console.log("");
    console.log("criarPessoa(Maria,30) = ");
    console.log(criarPessoa("Maria",30));


    var Pessoa2 = function (nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    console.log("");
    console.log("new Pessoa2(Pedro, 20) = "); 
    console.log(new Pessoa2("Pedro", 20));

    console.log("");
    console.log("new Pessoa2(Maria, 30) = ");
    console.log(new Pessoa2("Maria", 30));

    var pedro = {};
    Pessoa2.call(pedro, "Pedro", 20);
    console.log("");
    console.log("pedro = "); 
    console.log(pedro);

    //Closures
    var helloWorld2 = function (){
        var message = "Hello World!";
        return function (){
            return message;
        };
    };


     //criar Objetos com funções
     console.log("");
     console.log("Closures");

     var fnHelloWorld = helloWorld2();
     console.log("fnHelloWorld = ");
     console.log(fnHelloWorld());

     console.log("");
     console.log("helloWorld2 = ");
     console.log(helloWorld2);

     console.log("");
     console.log("helloWorld2() = ");
     console.log(helloWorld2());

     console.log("");
     console.log("helloWorld2()() = ");
     console.log(helloWorld2()());


     console.log("Encapsulamento");

     var counter = {
         value: 0,
         add: function(){
             return ++ this.value;
         }
     };

     console.log("");
     console.log("counter.add())");
     console.log(counter.add());
     console.log("counter.add())");
     console.log(counter.add());
     console.log("counter.add())");
     console.log(counter.add());

     var itens = {
        value: [],
         add: function(item){
             this.value.push(item);
             return this.value;
         }
     };

     console.log("");
     console.log("itens.add('A')");
     console.log(itens.add('A'));
     
     console.log("");
     console.log("itens.add('B')");
     console.log(itens.add('B'));
     
     console.log("");
     console.log("itens.add('C')");
     console.log(itens.add('C'));
     
     var Counter = function(){
         var value = 0;
         this.add = function (){
             return ++ value;
         }
     };


     var counter = new Counter();
     console.log("");
     console.log("counter.value");
     console.log(counter.value);

     
     console.log("");
     console.log("counter.add()");
     console.log(counter.add());

     console.log("");
     console.log("counter.add()");
     console.log(counter.add());

     console.log("");
     console.log("counter.add()");
     console.log(counter.add());


     var counter2 = ( function(){
        var _value = 0;
        
        var _add = function (){
            return ++ _value;
        }
        
        var _reset = function (){
            _value = 0 ;
        }

        return {
            add: _add,
            reset: _reset
        };
        
    })();

    console.log("");
    console.log("counter2.value");
    console.log(counter2.value);

    
    console.log("");
    console.log("counter2.add()");
    console.log(counter2.add());

    console.log("");
    console.log("counter2.add()");
    console.log(counter2.add());

    console.log("");
    console.log("counter2.add()");
    console.log(counter2.add());

    console.log("");
    console.log("counter2.reset()");
    counter2.reset();

    console.log("");
    console.log("counter2.add()");
    console.log(counter2.add());


}

module.exports = {
    testFunctions
}