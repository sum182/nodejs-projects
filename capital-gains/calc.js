const lib = require('./lib');


//objeto que armazena os parametros de imposto
const impostoParams = {
    valorIsencao : 20000,
    percentualCalculo : 0.2
}

//objeto para armazenar o resultado final
let resultado = []

//objeto para armazenar todas as informações das operacoes
let operacoesDadosGerais = {
    sumQuantidade : 0,
    sumValor : 0,
    precoMedio : 0,
    prejuizosAcumulados : 0
}


function calcularGanhoCapital(operacoesRealizadas){
/*
    rotina principal para realizar o calculo de ganho de capital
*/        
    limparVariaveis();

    operacoesRealizadas.forEach(item => {
        logDevInicioCalculo(operacoesRealizadas,item);
        calcularPrecoMedio(item);
        calcularLucro(item);
        logDevFimcioCalculo(item);        
    });      
}


function calcularPrecoMedio(item){
    /*
      rotina para calcular o preço médio

      o calculo é realizado somente para operation = buy
      a cada item é realizado/atualizado o cálculo
    */   

    if (item['operation'] === 'buy'){
        operacoesDadosGerais.sumQuantidade = operacoesDadosGerais.sumQuantidade + item['quantity'];
        operacoesDadosGerais.sumValor      = operacoesDadosGerais.sumValor + (item['quantity'] * item['unit-cost']);

        operacoesDadosGerais.precoMedio = operacoesDadosGerais.sumValor / operacoesDadosGerais.sumQuantidade ;
        
        lib.logDev('precoMedio:' + operacoesDadosGerais.precoMedio);    
    } 
}


function calcularLucro(item){
    /*
        rotina para calcular se deve ser pago imposto
        o calculo é realizado somente para operation = sell
        a cada item é realizado/atualizado o cálculo
    */  
    let imposto = 0;
    let valorVenda = 0;
    let valorCompra =0;
    let valorLucro = 0;

    
    if (item['operation'] === 'sell'){
      valorVenda = item['quantity'] * item['unit-cost'];
      valorCompra = item['quantity'] * operacoesDadosGerais.precoMedio;
      valorLucro = valorVenda - valorCompra;
      
      //caso tenha prejuizo incrementa o prejuizo acumulado
      if(valorLucro < 0){
        operacoesDadosGerais.prejuizosAcumulados = operacoesDadosGerais.prejuizosAcumulados + valorLucro;
        lib.logDev('prejuizosAcumulados:' + operacoesDadosGerais.prejuizosAcumulados);
      }

     
      //caso tenha lucro - deduzir prejuizo acumulado e calcular imposto
      if (valorLucro > 0){ 
        valorLucro = calcularPrejuizoAcumuladoDeducao(valorLucro);
        imposto = calcularImposto(valorLucro,valorVenda);
      }

      lib.logDev('');
      lib.logDev('calculo do imposto:',true);
      lib.logDev('valorVenda:' + valorVenda);
      lib.logDev('valorCompra:' + valorCompra);
      lib.logDev('valorLucro:' + valorLucro);
      lib.logDev('prejuizosAcumulados:' + operacoesDadosGerais.prejuizosAcumulados);
      lib.logDev('imposto:' + imposto);  
      
    } 
    
    setResultado(imposto);
}


function calcularPrejuizoAcumuladoDeducao(valorLucro){
/*
    rotina para realizar os calculos de Prejuizo acumulado

    em operações de venda caso tenha prejuizo esse valor deve
    ser acumulado e abatido em operações futuras com lucro
*/    
    if ((operacoesDadosGerais.prejuizosAcumulados < 0)){
        

        lib.logDev('deduzindo prejuizos acumulados',true);
        lib.logDev('');    
       
        let prejuizosAcumuladosAtual = operacoesDadosGerais.prejuizosAcumulados;

        lib.logDev('valores atuais');
        lib.logDev('prejuizosAcumuladosAtual:' + prejuizosAcumuladosAtual);
        lib.logDev('valorLucro:' + valorLucro);        
        
        operacoesDadosGerais.prejuizosAcumulados = operacoesDadosGerais.prejuizosAcumulados + (valorLucro);
        valorLucro = valorLucro + prejuizosAcumuladosAtual;
        
        lib.logDev('');      
        lib.logDev('novos valores');        
        lib.logDev('prejuizosAcumulados:' + operacoesDadosGerais.prejuizosAcumulados);
        lib.logDev('valorLucro:' + valorLucro);
    }    
    return valorLucro;    
    
}


function calcularImposto(valorLucro,valorVenda){
/*
    rotina que realiza o calculo do imposto a ser pago
    
    o valor é calculado de acordo com o lucro e 
    prejuizos acumulados
*/    
    if ((valorLucro > 0) && (valorVenda > impostoParams.valorIsencao)){
        return (valorLucro * (impostoParams.percentualCalculo));
     }
     return 0;

}

function limparVariaveis(){
/*
    rotina para limpar variaveis

    logo no inicio do calculo principal ela e chamada
    o objetivo e garantir que todas as variaveis estejam zeradas no inicio
*/    
    operacoesDadosGerais.sumQuantidade = 0;
    operacoesDadosGerais.sumValor = 0;
    operacoesDadosGerais.precoMedio = 0;
    operacoesDadosGerais.prejuizosAcumulados = 0;
    resultado = [];
}


function setResultado(taxa){
//insere cada resultado calculado
    resultado.push({tax: taxa});
}


function getResultado(){
    /*
        rotina que retorna o resultado final de todo o calculado realizado
    
    */    
    return JSON.stringify(resultado);
}


function exibirResultado(){
/*
    rotina que exibi o resultado final de todo o calculado realizado

*/    
    console.log('');    
    lib.logDev('****************************************************');    
    console.log(lib.strColorConsoleColorRed,'Resultado:');  
    console.log(lib.strColorConsoleReset);    
    console.log(JSON.stringify(resultado));
    console.log('');
    lib.logDev('****************************************************');
}


function logDevInicioCalculo(operacoesRealizadas,item){
    lib.logDev('');
    lib.logDev('');
    lib.logDev('****************************************************');
    lib.logDev(`index: ${operacoesRealizadas.indexOf(item)}` ,true);
    lib.logDev('operation:' + item['operation']);
    lib.logDev('unit_cost:' + item['unit-cost']);
    lib.logDev('quantity:'  + item['quantity']);  
}


function logDevFimcioCalculo(element){
    lib.logDev('****************************************************');
    lib.logDev('');   
}



module.exports = {
    calcularGanhoCapital,exibirResultado,getResultado
}
