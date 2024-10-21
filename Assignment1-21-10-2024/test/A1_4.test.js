import '../src/A1-P1/A1_4.js'; 
import assert from 'assert';

describe('Pergunta 4 - groupBy', () => {
    
    it('deve agrupar números em pares e ímpares', () => {
        const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const numerosAgrupados = numeros.groupBy(n => n % 2 === 0 ? 'par' : 'ímpar');
        
        assert.deepStrictEqual(numerosAgrupados, {
            ímpar: [1, 3, 5, 7, 9],
            par: [2, 4, 6, 8, 10]
        });
    });

    it('deve agrupar pessoas pela idade', () => {
        const pessoas = [
            { nome: "Alice", idade: 30 },
            { nome: "Bob", idade: 30 },
            { nome: "Charlie", idade: 25 },
            { nome: "David", idade: 35 }
        ];
        
        const pessoasAgrupadas = pessoas.groupBy(pessoa => pessoa.idade);

        assert.deepStrictEqual(pessoasAgrupadas, {
            30: [
                { nome: "Alice", idade: 30 },
                { nome: "Bob", idade: 30 }
            ],
            25: [
                { nome: "Charlie", idade: 25 }
            ],
            35: [
                { nome: "David", idade: 35 }
            ]
        });
    });




    
      it('deve agrupar objetos por propriedade ', () => {
        const people = [
            { name: "Alice", address: { city: "Lisboa" } },
            { name: "Bob", address: { city: "Seixal" } },
            { name: "Charlie", address: { city: "Lisboa" } },
            { name: "David", address: { city: "Castelo Branco" } }
        ];
        const result = people.groupBy(person => person.address.city);
        assert.deepStrictEqual(result, {
            "Lisboa": [
                { name: "Alice", address: { city: "Lisboa" } },
                { name: "Charlie", address: { city: "Lisboa" } }
            ],
            "Seixal": [{ name: "Bob", address: { city: "Seixal" } }],
            "Castelo Branco": [{ name: "David", address: { city: "Castelo Branco" } }]
        });
    });

    it('Deve agrupar números se são múltiplos de 3', () => {
        const numbers = [1, 3, 6, 8, 9, 12];
        const result = numbers.groupBy(num => (num % 3 === 0 ? 'multiplos de 3' : 'não multiplos de 3'));
        assert.deepStrictEqual(result, {
            'multiplos de 3': [3, 6, 9, 12],
            'não multiplos de 3': [1, 8]
        });
    });


    it('Deve agrupar números inteiros positivos e negativos', () => {
        const numbers = [-5, -2, 0, 1, 3, -7, 4];
        const result = numbers.groupBy(num => (num < 0 ? 'negativo' : (num === 0 ? 'zero' : 'positivo')));
        assert.deepStrictEqual(result, {
            negativo: [-5, -2, -7],
            zero: [0],
            positivo: [1, 3, 4]
        });
    });

    it('Deve agrupar objetos por chave inexistente retornando valor padrão', () => {
        const objects = [{}, { name: 'Alice' }, { age: 25 }];
        const result = objects.groupBy(obj => obj.name || 'unknown');
        assert.deepStrictEqual(result, {
            unknown: [{}, { age: 25 }],
            Alice: [{ name: 'Alice' }]
        });
    });

    it('Deve agrupar strings se são palindromes', () => {
        const words = ['madam', 'racecar', 'hello', 'noon', 'world'];
        const result = words.groupBy(word => word === word.split('').reverse().join('') ? 'palindrome' : 'non-palindrome');
        assert.deepStrictEqual(result, {
            palindrome: ['madam', 'racecar', 'noon'],
            'non-palindrome': ['hello', 'world']
        });
    });

    it('Deve agrupar números em pares, ímpares e zero', () => {
        const numbers = [0, 1, 2, 3, 4, 5, 6];
        const result = numbers.groupBy(num => {
            if (num === 0) return 'zero';
            return num % 2 === 0 ? 'par' : 'ímpar';
        });
        assert.deepStrictEqual(result, {
            zero: [0],
            par: [2, 4, 6],
            ímpar: [1, 3, 5]
        });
    });

    it('Deve agrupar strings(vazia, curta ou longa)', () => {
        const words = ['', 'a', 'askn', 'lajsfbljbasfl'];
        const result = words.groupBy(word => {
            if (word.length === 0) return 'vazia';
            if (word.length <= 5) return 'curta';
            return 'longa';
        });
        assert.deepStrictEqual(result, {
          vazia: [''],
          curta: ['a', 'askn'],
          longa: ['lajsfbljbasfl']
        });
    });

    it('Deve agrupar objetos(number, string ou boolean)', () => {
        const mixedValues = [1, 'hello', true, 3, false, 'world'];
        const result = mixedValues.groupBy(value => typeof value);
        assert.deepStrictEqual(result, {
            number: [1, 3],
            string: ['hello', 'world'],
            boolean: [true, false]
        });
    });

    it('Deve agrupar elementos por primeira letra maiúscula ou minúscula', () => {
        const names = ['Alice', 'bob', 'Charlie', 'dave', 'Edward'];
        const result = names.groupBy(name => name[0] === name[0].toUpperCase() ? 'maiúscula' : 'minúscula');
        assert.deepStrictEqual(result, {
          maiúscula: ['Alice', 'Charlie', 'Edward'],
            minúscula: ['bob', 'dave']
        });
    });



});