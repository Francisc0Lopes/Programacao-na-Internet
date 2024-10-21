import { checkUsersValid } from '../src/A1-P1/A1_5.js';  
import assert from 'assert';

describe('Pergunta 5 - checkUsersValid', () => {

    const users = [
        { id: 1 },
        { id: 2 },
        { id: 3 }
    ];

    it('Deve retornar true quando todos os utilizadores submetidos são válidos', () => {
        const check = checkUsersValid(users);
        
        const res = check([
            { id: 2 },
            { id: 1 }
        ]);
        
        assert.strictEqual(res, true); 
    });

    it('Deve retornar false quando alguns utilizadores submetidos são inválidos', () => {
        const check = checkUsersValid(users);
        
        const res = check([
            { id: 2 },
            { id: 4 },
            { id: 1 }
        ]);

        assert.strictEqual(res, false); 
    });

    it('Deve retornar true quando todos os utilizadores válidos são submetidos', () => {
        const check = checkUsersValid(users);

        const res = check([
            { id: 1 },
            { id: 2 },
            { id: 3 }
        ]);

        assert.strictEqual(res, true); 
    });

    it('Deve retornar false quando nenhum dos utilizadores submetidos é válido', () => {
        const check = checkUsersValid(users);

        const res = check([
            { id: 4 },
            { id: 5 }
        ]);

        assert.strictEqual(res, false); 
    });



    it('Deve retornar false se for submetido um utilizador com id repetido inválido', () => {
        const check = checkUsersValid(users);

        const res = check([
            { id: 1 },
            { id: 4 },
            { id: 4 }
        ]);

        assert.strictEqual(res, false); 
    });

    it('Deve retornar true quando o array submetido estiver vazio', () => {
        const check = checkUsersValid(users);

        const res = check([]);

        assert.strictEqual(res, true); 
    });

    it('Deve retornar true quando apenas um utilizador válido é submetido', () => {
        const check = checkUsersValid(users);

        const res = check([{ id: 2 }]);

        assert.strictEqual(res, true); 
    });

    it('Deve retornar false quando apenas um utilizador inválido é submetido', () => {
        const check = checkUsersValid(users);

        const res = check([{ id: 99 }]);

        assert.strictEqual(res, false); 
    });

    it('Deve retornar false quando alguns utilizadores submetidos possuem IDs ausentes', () => {
        const check = checkUsersValid(users);

        const res = check([
            { id: 1 },
            {},
            { id: 2 }
        ]);

        assert.strictEqual(res, false); 
    });

    it('Deve retornar true quando todos os utilizadores válidos são repetidos', () => {
        const check = checkUsersValid(users);

        const res = check([
            { id: 1 },
            { id: 1 },
            { id: 2 },
            { id: 2 }
        ]);

        assert.strictEqual(res, true); 
    });

    it('Deve retornar false se o ID de um utilizador for nulo', () => {
        const check = checkUsersValid(users);

        const res = check([
            { id: 1 },
            { id: null }
        ]);

        assert.strictEqual(res, false); 
    });

    it('Deve retornar false quando um utilizador tiver um ID como string em vez de número', () => {
        const check = checkUsersValid(users);

        const res = check([
            { id: '2' },
            { id: 3 }
        ]);

        assert.strictEqual(res, false); 
    });

    it('Deve retornar true para IDs válidos independentes da ordem', () => {
        const check = checkUsersValid(users);

        const res = check([
            { id: 3 },
            { id: 1 },
            { id: 2 }
        ]);

        assert.strictEqual(res, true); 
    });

    it('Deve retornar false quando um array misto de IDs válidos e inválidos é submetido', () => {
        const check = checkUsersValid(users);

        const res = check([
            { id: 1 },
            { id: 2 },
            { id: 8 }
        ]);

        assert.strictEqual(res, false); 
    });

    it('Deve retornar true quando todos os utilizadores válidos são submetidos múltiplas vezes', () => {
        const check = checkUsersValid(users);

        const res = check([
            { id: 1 },
            { id: 2 },
            { id: 3 },
            { id: 1 },
            { id: 3 }
        ]);

        assert.strictEqual(res, true); 
    });
});
