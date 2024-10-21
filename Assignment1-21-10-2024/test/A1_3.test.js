
import '../src/A1-P1/A1_3.js'; 
import assert from 'assert';
describe('Pergunta 3 - copyValidArrayElements - ARRAY', () => {
    const elementValidators = [
        {
            validators: [s => typeof s === 'string' && s.length > 2, s => s[0] === 'a']
        },
        {
            validators: [s => Number.isInteger(s)]
        }
    ];

    it('deve retornar um array vazio quando nenhum elemento passa a validação (arr1)', () => {
        const arr1 = ["a"];  
        assert.deepStrictEqual(arr1.copyValidArrayElements(elementValidators), []);
    });

    it('deve retornar [123] quando apenas o número inteiro passa a validação (arr2)', () => {
        const arr2 = [123];  
        assert.deepStrictEqual(arr2.copyValidArrayElements(elementValidators), [123]);
    });

    it('deve retornar ["abc", 123] quando ambos os elementos passam a validação (arr3)', () => {
        const arr3 = ["abc", 123];  
        assert.deepStrictEqual(arr3.copyValidArrayElements(elementValidators), ["abc", 123]);
    });



    it('deve retornar números inteiros maiores que 10 e menores que 100', () => {
        const elementValidators = [
          {
            validators: [n => Number.isInteger(n), n => n > 10, n => n < 100]
          }
        ];
        const arr = [5, 15, 50, 120, 99];
        assert.deepStrictEqual(arr.copyValidArrayElements(elementValidators), [15, 50, 99]);
    });

    it('deve retornar objetos que possuem uma propriedade "status" igual a "active"', () => {
        const elementValidators = [
          {
            validators: [obj => typeof obj === 'object' && obj !== null, obj => obj.status === 'active']
          }
        ];
        const arr = [{ status: 'active' }, { status: 'inactive' }, { name: 'item' }, { status: 'active', id: 1 }];
        assert.deepStrictEqual(arr.copyValidArrayElements(elementValidators), [{ status: 'active' }, { status: 'active', id: 1 }]);
    });

  
    it('deve retornar apenas arrays que têm exatamente 3 elementos', () => {
        const elementValidators = [
          {
            validators: [arr => Array.isArray(arr), arr => arr.length === 3]
          }
        ];
        const arr = [[1, 2], [1, 2, 3], [4, 5, 6, 7], ["a", "b", "c"]];
        assert.deepStrictEqual(arr.copyValidArrayElements(elementValidators), [[1, 2, 3], ["a", "b", "c"]]);
    });

    it('deve retornar elementos que são booleanos e são iguais a false', () => {
        const elementValidators = [
          {
            validators: [b => typeof b === 'boolean', b => b === false]
          }
        ];
        const arr = [true, false, false, "false"];
        assert.deepStrictEqual(arr.copyValidArrayElements(elementValidators), [false, false]);
    });

});
