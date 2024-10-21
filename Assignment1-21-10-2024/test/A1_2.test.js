import { copyValidArrayElements } from '../src/A1-P1/A1_2.js';  
import assert from 'assert';

describe('Pergunta 2 - copyValidArrayElements', () => {
    
    const elementValidators = [
        {
            validators: [
                s => typeof s === 'string' && s.length > 2,
                s => s[0] === 'a'
            ]
        },
        {
            validators: [
                s => Number.isInteger(s)
            ]
        }
    ];
    
    it('deve retornar um array vazio quando nenhum elemento passa a validação (arr1_2)', () => {
        const arr1_2 = ["a"];
        const resultado = copyValidArrayElements(arr1_2, elementValidators);
        assert.deepStrictEqual(resultado, []);
    });
    
    it('deve retornar [123] quando apenas o número inteiro passa a validação (arr2_2)', () => {
        const arr2_2 = [123];
        const resultado = copyValidArrayElements(arr2_2, elementValidators);
        assert.deepStrictEqual(resultado, [123]);
    });
    
    it('deve retornar ["abc", 123] quando ambos os elementos passam a validação (arr3_2)', () => {
        const arr3_2 = ["abc", 123];
        const resultado = copyValidArrayElements(arr3_2, elementValidators);
        assert.deepStrictEqual(resultado, ["abc", 123]);
    });

  it('deve retornar apenas strings com mais de 5 caracteres', () => {
    const elementValidators = [
      {
        validators: [s => typeof s === 'string', s => s.length > 5]
      }
    ];
    const arr = ["short", "longer", "adequate", "tiny"];
    assert.deepStrictEqual(copyValidArrayElements(arr, elementValidators), ["longer", "adequate"]);
  });

  it('deve retornar um array vazio se todas as strings são muito curtas', () => {
    const elementValidators = [
      {
        validators: [s => typeof s === 'string', s => s.length > 10]
      }
    ];
    const arr = ["alsfa", "asfaf", "asffa"];
    assert.deepStrictEqual(copyValidArrayElements(arr, elementValidators), []);
  });

  it('deve retornar elementos válidos de objetos que possuem uma propriedade "age" maior que 18', () => {
    const elementValidators = [
      {
        validators: [obj => typeof obj === 'object' && obj !== null, obj => obj.age > 18]
      }
    ];
    const arr = [{ age: 20 }, { age: 15 }, { age: 30 }];
    assert.deepStrictEqual(copyValidArrayElements(arr, elementValidators), [{ age: 20 }, { age: 30 }]);
  });

  it('deve retornar elementos válidos para números float maiores que 0', () => {
    const elementValidators = [
      {
        validators: [n => typeof n === 'number', n => n > 0]
      }
    ];
    const arr = [1.5, -2.3, 0, 3.7];
    assert.deepStrictEqual(copyValidArrayElements(arr, elementValidators), [1.5, 3.7]);
  });


  it('deve retornar um array vazio quando não há objetos com a chave "name"', () => {
    const elementValidators = [
      {
        validators: [obj => typeof obj === 'object' && obj !== null, obj => 'name' in obj]
      }
    ];
    const arr = [{ age: 25 }, { id: 1 }];
    assert.deepStrictEqual(copyValidArrayElements(arr, elementValidators), []);
  });

  it('deve retornar apenas números negativos ímpares', () => {
    const elementValidators = [
      {
        validators: [n => Number.isInteger(n), n => n < 0, n => n%2 !== 0]
      }
    ];
    const arr = [-1, -2, -3, 4, 5];
    assert.deepStrictEqual(copyValidArrayElements(arr, elementValidators), [-1, -3]);
  });

 

  it('deve retornar apenas números múltiplos de 3', () => {
    const elementValidators = [
      {
        validators: [n => Number.isInteger(n), n => n%3=== 0]
      }
    ];
    const arr = [3, 5, 9, 12, 14];
    assert.deepStrictEqual(copyValidArrayElements(arr, elementValidators), [3, 9, 12]);
  });


});

  