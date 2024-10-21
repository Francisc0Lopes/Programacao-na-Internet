import { memoize } from '../src/A1-P1/A1_6.js';
import assert from 'assert';


describe('Pergunta 6 - Memoize', () => {

    function add(a, b){ return a + b; }

    function multiply(a, b, c){ return a * b * c; }

    function subtract(a, b){ return a - b; }

    function divide(a, b){ return a / b; }

    it('deve calcular e memorizar o resultado da função add', () => {
        const memoizedAdd = memoize(add);

        assert.strictEqual(memoizedAdd(2, 3), 5);
        assert.strictEqual(memoizedAdd(2, 3), 5); 
        assert.strictEqual(memoizedAdd(4, 1), 5);
    });

    it('deve calcular e memorizar o resultado da função multiply com 3 argumentos', () => {
        const memoizedMultiply = memoize(multiply);

        assert.strictEqual(memoizedMultiply(2, 3, 4), 24);
        assert.strictEqual(memoizedMultiply(2, 3, 4), 24); 
        assert.strictEqual(memoizedMultiply(1, 3, 4), 12);
    });

    it('deve calcular e armazenar o resultado de subtract(10, 4)', () => {
        const memoizedSubtract = memoize(subtract);
        assert.strictEqual(memoizedSubtract(10, 4), 6); 
        assert.strictEqual(memoizedSubtract(10, 4), 6); 
    });

    it('deve calcular e armazenar o resultado de divide(18, 2)', () => {
        const memoizedDivide = memoize(divide);
        assert.strictEqual(memoizedDivide(18, 2), 9); 
        assert.strictEqual(memoizedDivide(18, 2), 9); 
    });

    it('deve retornar o resultado do cache ao chamar add(5, 7) duas vezes', () => {
        const memoizedAdd = memoize(add);
        assert.strictEqual(memoizedAdd(5, 7), 12); 
        assert.strictEqual(memoizedAdd(5, 7), 12); 
    });



    it('deve retornar o resultado do cache ao chamar multiply com argumentos diferentes', () => {
        const memoizedMultiply = memoize(multiply);
        assert.strictEqual(memoizedMultiply(2, 2, 2), 8); 
        assert.strictEqual(memoizedMultiply(2, 2, 2), 8); 
        assert.strictEqual(memoizedMultiply(3, 3, 3), 27); 
    });
    
    it('deve retornar resultados consistentes ao chamar subtract com números negativos', () => {
        const memoizedSubtract = memoize(subtract);
        assert.strictEqual(memoizedSubtract(-5, -3), -2); 
        assert.strictEqual(memoizedSubtract(-5, -3), -2); 
    });

    it('deve retornar resultados consistentes ao dividir números negativos', () => {
        const memoizedDivide = memoize(divide);
        assert.strictEqual(memoizedDivide(-18, -2), 9); 
        assert.strictEqual(memoizedDivide(-18, -2), 9); 
    });

    it('deve armazenar corretamente resultados ao lidar com 0 como argumento', () => {
        const memoizedMultiply = memoize(multiply);
        assert.strictEqual(memoizedMultiply(0, 5, 2), 0); 
        assert.strictEqual(memoizedMultiply(0, 5, 2), 0); 
    });

    it('deve retornar true se a função memoizada for chamada com o mesmo valor booleano', () => {
        const booleanFunc = (a) => a === true;
        const memoizedBooleanFunc = memoize(booleanFunc);
        assert.strictEqual(memoizedBooleanFunc(true), true); 
        assert.strictEqual(memoizedBooleanFunc(true), true); 
    });
});
