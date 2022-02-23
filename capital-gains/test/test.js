const calc = require('../calc');
const lib = require('../lib');

var assert = require('chai').assert;
var expect = require('chai').expect;


const testeCaso1 = '[{"operation":"buy", "unit-cost":10, "quantity": 100},{"operation":"sell", "unit-cost":15, "quantity": 50},{"operation":"sell", "unit-cost":15, "quantity": 50}]';
const testeCaso1Resultado = '[{"tax":0},{"tax":0},{"tax":0}]';

const testeCaso2 = '[{"operation":"buy", "unit-cost":10, "quantity": 10000},{"operation":"sell","unit-cost":20, "quantity": 5000},{"operation":"sell", "unit-cost":5, "quantity":5000}]';
const testeCaso2Resultado = '[{"tax":0},{"tax":10000},{"tax":0}]';

const testeCaso3 = '[{"operation":"buy", "unit-cost":10, "quantity": 10000},{"operation":"sell","unit-cost":5, "quantity": 5000},{"operation":"sell", "unit-cost":20, "quantity":5000}]';
const testeCaso3Resultado = '[{"tax":0},{"tax":0},{"tax":5000}]';

const testeCaso4 ='[{"operation":"buy", "unit-cost":10, "quantity": 10000},{"operation":"buy","unit-cost":25, "quantity": 5000},{"operation":"sell", "unit-cost":15,"quantity": 10000}]';
const testeCaso4Resultado = '[{"tax":0},{"tax":0},{"tax":0}]';

const testeCaso5 = '[{"operation":"buy", "unit-cost":10, "quantity": 10000},{"operation":"buy","unit-cost":25, "quantity": 5000},{"operation":"sell", "unit-cost":15,"quantity": 10000},{"operation":"sell", "unit-cost":25, "quantity": 5000}]';
const testeCaso5Resultado = '[{"tax":0},{"tax":0},{"tax":0},{"tax":10000}]';

const testeCaso6 = '[{"operation":"buy", "unit-cost":10, "quantity": 10000},{"operation":"sell","unit-cost":2, "quantity": 5000},{"operation":"sell", "unit-cost":20, "quantity":2000},{"operation":"sell", "unit-cost":20, "quantity": 2000},{"operation":"sell","unit-cost":25, "quantity": 1000}]';
const testeCaso6Resultado = '[{"tax":0},{"tax":0},{"tax":0},{"tax":0},{"tax":3000}]';


function processarCenarioTeste(strDadosEntrada){
    const entradaDados = JSON.parse(strDadosEntrada);
    
    //calculando o ganho de capital
    calc.calcularGanhoCapital(entradaDados);            

    const resultado = calc.getResultado();

    return resultado;
}



describe('Testando todos os exemplos de Ganho de Capital',() => {
    console.clear();


    it('Caso #1',(done) => {
        const resultado = processarCenarioTeste(testeCaso1);
        expect(resultado).be.equal(testeCaso1Resultado);
        done();
    })

    it('Caso #2',(done) => {
        const resultado = processarCenarioTeste(testeCaso2);
        expect(resultado).be.equal(testeCaso2Resultado);
        done();
    })

    it('Caso #3',(done) => {
        const resultado = processarCenarioTeste(testeCaso3);
        expect(resultado).be.equal(testeCaso3Resultado);
        done();
    })
    
    it('Caso #4',(done) => {
        const resultado = processarCenarioTeste(testeCaso4);
        expect(resultado).be.equal(testeCaso4Resultado);
        done();
    })
    
    it('Caso #5',(done) => {
        const resultado = processarCenarioTeste(testeCaso5);
        expect(resultado).be.equal(testeCaso5Resultado);
        done();
    })
    
    it('Caso #6',(done) => {
        const resultado = processarCenarioTeste(testeCaso6);
        expect(resultado).be.equal(testeCaso6Resultado);
        done();
    }) 
    
})


