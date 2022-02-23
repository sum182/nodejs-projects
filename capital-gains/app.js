const readline = require('readline');
const lib = require('./lib');
const calc = require('./calc');


params = {
  program_name : '',
  script_path : '',
  params_1 : '',
  params_2 : '',
 }


function main(){
  try {
    console.clear();    
    console.log(lib.strColorConsoleColorRed, 'App capital-gains em execução');
    console.log(lib.strColorConsoleReset,);

    lib.getParametrosApp();    
    
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });


    //Informando o usuário para inserir as informações
    rl.question('Insira a lista de operações no formato JSON: ', (entradaDados) => {

      lib.logDev('');
      lib.logDev(`objeto recebido: ${entradaDados}`);

      rl.close();

      let operacoesRealizadas

      //convertendo a string para um JSON 
      try {
        operacoesRealizadas = JSON.parse(entradaDados);
        } catch (err) {
        console.log('Erro ao ler string no formato JSON') ;
        return;
      }

      //calculando o ganho de capital
      calc.calcularGanhoCapital(operacoesRealizadas);
      
      //exibir o resultado do calculo realizado
      calc.exibirResultado();

    });
      
  } catch (error) {
    console.log('Erro ao realizar processamento!') ;
    return;    
  }   
}


//Executa método principal
main();


module.exports = {
  params
}




  
