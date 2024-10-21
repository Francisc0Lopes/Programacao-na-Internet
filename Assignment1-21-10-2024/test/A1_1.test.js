
import { validateArrayElements } from '../src/A1-P1/A1_1.js';
import assert from 'assert';
describe('Pergunta 1 - validateArrayElements', () => {
  
  it('Retorna verdadeiro se todos os números forem positivos e pares', () => {
     const elementValidator = {
      validators: [
        (n) => typeof n === 'number' && n > 0,
        (n) => n % 2 === 0
      ],
    };
    const arr1 = [2, 4, 6];
    assert.strictEqual(validateArrayElements(arr1, elementValidator), true);
  });

  it('Retorna falso se o array contiver um número negativo', () => {
   const elementValidator = {
      validators: [
        (n) => typeof n === 'number' && n > 0,
        (n) => n % 2 === 0
      ],
    };
    const arr2 = [2, -4, 6];
    assert.strictEqual(validateArrayElements(arr2, elementValidator), false);
  });

  it('Retorna falso se o array contiver números ímpares', () => {
    const elementValidator = {
      validators: [
        (n) => typeof n === 'number' && n > 0,
        (n) => n % 2 === 0
      ],
    };
    const arr3 = [1, 3, 5];
    assert.strictEqual(validateArrayElements(arr3, elementValidator), false);
  });

  it('verdadeiro quandos as strings tiverem tamanho maior que 3', () => {
    const stringValidator = {
      validators: [
        (str) => typeof str === 'string',
        (str) => str.length > 3
      ],
    };
    const strArr1 = ['hello', 'world', 'teste'];
    assert.strictEqual(validateArrayElements(strArr1, stringValidator), true);
  });

  it('Retorna falso se alguma string tiver comprimento menor ou igual a 3', () => {
    const stringValidator = {
      validators: [
        (str) => typeof str === 'string',
        (str) => str.length > 3
      ],
    };
    const strArr2 = ['ma', 'la', 'maosd'];
    assert.strictEqual(validateArrayElements(strArr2, stringValidator), false);
  });

  it('Retorna falso se o array contiver elementos não-string', () => {
    const stringValidator = {
      validators: [
        (str) => typeof str === 'string',
        (str) => str.length > 3
      ],
    };
    const strArr3 = [161, 'abc', 'ask'];
    assert.strictEqual(validateArrayElements(strArr3, stringValidator), false);
  });

  it('Retorna verdadeiro se todos os números estiverem entre 10 e 100', () => {
    const mixedValidator = {
      validators: [
        (val) => typeof val === 'number',
        (val) => val >= 10 && val <= 100
      ],
    };
    const mixedArr1 = [15, 25, 50, 100];
    assert.strictEqual(validateArrayElements(mixedArr1, mixedValidator), true);
  });

  it('Retorna falso se algum número estiver fora do intervalo de 10 a 100', () => {
    const mixedValidator = {
      validators: [
        (val) => typeof val === 'number',
        (val) => val >= 10 && val <= 100
      ],
    };
    const mixedArr2 = [5, 30, 50, 200];
    assert.strictEqual(validateArrayElements(mixedArr2, mixedValidator), false);
  });

  it('Retorna falso se o array contiver elementos não-números', () => {
    const mixedValidator = {
      validators: [
        (val) => typeof val === 'number',
        (val) => val >= 10 && val <= 100
      ],
    };
    const mixedArr3 = [20, 'olá', 50];
    assert.strictEqual(validateArrayElements(mixedArr3, mixedValidator), false);
  });

  it('Retorna falso se algum elemento não for número ou string', () => {
    const elementValidator = {
      validators: [
        (val) => typeof val === 'number' || typeof val === 'string'
      ],
    };
    const arr = [1, 'teste', true]; 
    assert.strictEqual(validateArrayElements(arr, elementValidator), false);
  });

 
  it('Retorna verdadeiro se todos os elementos forem objetos com uma chave específica', () => {
    const objectValidator = {
      validators: [
        (obj) => typeof obj === 'object' && obj !== null,
        (obj) => 'id' in obj
      ],
    };
    const arr = [{ id: 1 }, { id: 2 }, { id: 3 }]; 
    assert.strictEqual(validateArrayElements(arr, objectValidator), true);
  });

  it('Retorna falso se algum objeto não tiver a chave específica', () => {
    const objectValidator = {
      validators: [
        (obj) => typeof obj === 'object' && obj !== null,
        (obj) => 'id' in obj
      ],
    };
    const arr = [{ id: 1 }, { nome: 'teste' }, { id: 3 }]; 
    assert.strictEqual(validateArrayElements(arr, objectValidator), false);
  });

  it('Retorna verdadeiro se todos os elementos forem arrays com pelo menos 2 elementos', () => {
    const arrayValidator = {
      validators: [
        (arr) => Array.isArray(arr),
        (arr) => arr.length >= 2
      ],
    };
    const arr = [[1, 2], ['a', 'b'], [true, false]]; 
    assert.strictEqual(validateArrayElements(arr, arrayValidator), true);
  });

  it('Retorna falso se algum array tiver menos de 2 elementos', () => {
    const arrayValidator = {
      validators: [
        (arr) => Array.isArray(arr),
        (arr) => arr.length >= 2
      ],
    };
    const arr = [[1, 2], ['a'], [true, false]]; 
    assert.strictEqual(validateArrayElements(arr, arrayValidator), false);
  });

  it('Retorna verdadeiro se todos os elementos forem números divisíveis por 5', () => {
    const elementValidator = {
      validators: [
        (n) => typeof n === 'number',
        (n) => n % 5 === 0
      ],
    };
    const arr = [5, 10, 15, 20]; 
    assert.strictEqual(validateArrayElements(arr, elementValidator), true);
  });

  it('Retorna falso se algum número não for divisível por 5', () => {
    const elementValidator = {
      validators: [
        (n) => typeof n === 'number',
        (n) => n % 5 === 0
      ],
    };
    const arr = [5, 12, 15, 20]; 
    assert.strictEqual(validateArrayElements(arr, elementValidator), false);
  });

  it('Verdade se todos os elementos forem strings com comprimento par', () => {
    const elementValidator = {
      validators: [
        (str) => typeof str === 'string',
        (str) => str.length % 2 === 0
      ],
    };
    const arr = ['pare', 'ja', 'esta']; 
    assert.strictEqual(validateArrayElements(arr, elementValidator), true);
  });

  it('Falso se alguma string tiver comprimento ímpar', () => {
    const elementValidator = {
      validators: [
        (str) => typeof str === 'string',
        (str) => str.length % 2 === 0
      ],
    };
    const arr = ['impar', 'par', 'nada']; 
    assert.strictEqual(validateArrayElements(arr, elementValidator), false);
  });
});