const app = require('./app');

const strColorConsoleReset    = '\x1b[0m';
const strColorConsoleYellow   = '\x1b[33m';
const strColorConsoleColorRed = '\x1b[41m';



function logDev(str, destacar = false){
  /*
    função para exibir logs em modo de desenvolvimento
  */
  if (!isModoDev()){
      return;
  }

  if (destacar){
      console.log(strColorConsoleYellow,str);
      console.log(strColorConsoleReset,'');
      return;
  }

  console.log(strColorConsoleReset,str);
}

  
function getParametrosApp(){
    params.program_name = process.argv[0]; 
    params.script_path = process.argv[1]; 
    params.params_1 = process.argv[2]; 
    params.params_2 = process.argv[3]; 

    
    if (isModoDev()){
        console.log('');
        console.log(strColorConsoleColorRed, 'Aplicação rodando em modo de Desenvolvimento');  
        console.log(strColorConsoleReset);        
    }
}

function exibirParametrosApp(){
  logDev('Parametros App:', true);
  logDev('program_name:' + params.program_name);
  logDev('script_path:' + params.script_path);
  logDev('params_1:'  + params.params_1);
  logDev('params_2:'  + params.params_2);
}  
  


function isModoDev(){
  return (params.params_1 === 'dev');
}



module.exports = {
  strColorConsoleReset,   
  strColorConsoleYellow,  
  strColorConsoleColorRed,

  getParametrosApp,logDev
}