
import { expect } from 'chai';
import { myfetch } from '../src/A1-P2/app-assync.js';

describe('myfetch teams.json assync', () => {

    it('Para o ID - > 211', async () => {
        const url = 'http://localhost/api/teams?id=211';
        const response = await myfetch(url);
        const data = await response.json();

        expect(data).to.have.property('response');
        expect(data.response).to.be.an('array').with.lengthOf(1);
        expect(data.response[0].team.id).to.equal(211);
    });

    it('Para o ID - > 212', async () => {
        const url = 'http://localhost/api/teams?id=212';
        const response = await myfetch(url);
        const data = await response.json();

        expect(data).to.have.property('response');
        expect(data.response).to.be.an('array').with.lengthOf(1);
        expect(data.response[0].team.id).to.equal(212);
    });

    it('Para o ID - > 222', async () => {
        const url = 'http://localhost/api/teams?id=222';
        const response = await myfetch(url);
        const data = await response.json();

        expect(data).to.have.property('response');
        expect(data.response).to.be.an('array').with.lengthOf(1);
        expect(data.response[0].team.id).to.equal(222);
    });

    it('Para o ID - > 214', async () => {
        const url = 'http://localhost/api/teams?id=214';
        const response = await myfetch(url);
        const data = await response.json();

        expect(data).to.have.property('response');
        expect(data.response).to.be.an('array').with.lengthOf(1);
        expect(data.response[0].team.id).to.equal(214);
    });


    it('Para o ID - > 215', async () => {
        const url = 'http://localhost/api/teams?id=215';
        const response = await myfetch(url);
        const data = await response.json();

        expect(data).to.have.property('response');
        expect(data.response).to.be.an('array').with.lengthOf(1);
        expect(data.response[0].team.id).to.equal(215);
    });

    it('Para o ID - > 216', async () => {
        const url = 'http://localhost/api/teams?id=216';
        const response = await myfetch(url);
        const data = await response.json();

        expect(data).to.have.property('response');
        expect(data.response).to.be.an('array').with.lengthOf(1);
        expect(data.response[0].team.id).to.equal(216);
    });


    it('Para o ID - > 217', async () => {
        const url = 'http://localhost/api/teams?id=217';
        const response = await myfetch(url);
        const data = await response.json();

        expect(data).to.have.property('response');
        expect(data.response).to.be.an('array').with.lengthOf(1);
        expect(data.response[0].team.id).to.equal(217);
    });


    it('Para o ID - > 218', async () => {
        const url = 'http://localhost/api/teams?id=218';
        const response = await myfetch(url);
        const data = await response.json();

        expect(data).to.have.property('response');
        expect(data.response).to.be.an('array').with.lengthOf(1);
        expect(data.response[0].team.id).to.equal(218);
    });


    it('Para o ID - > 228', async () => {
        const url = 'http://localhost/api/teams?id=228';
        const response = await myfetch(url);
        const data = await response.json();

        expect(data).to.have.property('response');
        expect(data.response).to.be.an('array').with.lengthOf(1);
        expect(data.response[0].team.id).to.equal(228);
    });

    it('Para o ID - > 227', async () => {
        const url = 'http://localhost/api/teams?id=227';
        const response = await myfetch(url);
        const data = await response.json();

        expect(data).to.have.property('response');
        expect(data.response).to.be.an('array').with.lengthOf(1);
        expect(data.response[0].team.id).to.equal(227);
    });
});