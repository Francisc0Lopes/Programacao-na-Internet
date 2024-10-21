import { expect } from 'chai';
import myfetch from '../src/A1-P2/app-promises.js';

describe('myfetch teams.json promises', () => {
    it('Para o ID - > 211', (done) => {
        const url = 'http://localhost/api/teams?id=211';
        myfetch(url)
            .then(response => response.json())
            .then(data => {
                expect(data).to.have.property('response');
                expect(data.response).to.be.an('array').with.lengthOf(1);
                expect(data.response[0].team.id).to.equal(211);
                done();
            })
            .catch(err => done(err));
    });

    it('Para o ID - > 212', (done) => {
        const url = 'http://localhost/api/teams?id=212';
        myfetch(url)
            .then(response => response.json())
            .then(data => {
                expect(data).to.have.property('response');
                expect(data.response).to.be.an('array').with.lengthOf(1);
                expect(data.response[0].team.id).to.equal(212);
                done();
            })
            .catch(err => done(err));
    });

    it('Para o ID - > 222', (done) => {
        const url = 'http://localhost/api/teams?id=222';
        myfetch(url)
            .then(response => response.json())
            .then(data => {
                expect(data).to.have.property('response');
                expect(data.response).to.be.an('array').with.lengthOf(1);
                expect(data.response[0].team.id).to.equal(222);
                done();
            })
            .catch(err => done(err));
    });

    it('Para o ID - > 214', (done) => {
        const url = 'http://localhost/api/teams?id=214';
        myfetch(url)
            .then(response => response.json())
            .then(data => {
                expect(data).to.have.property('response');
                expect(data.response).to.be.an('array').with.lengthOf(1);
                expect(data.response[0].team.id).to.equal(214);
                done();
            })
            .catch(err => done(err));
    });

    it('Para o ID - > 215', (done) => {
        const url = 'http://localhost/api/teams?id=215';
        myfetch(url)
            .then(response => response.json())
            .then(data => {
                expect(data).to.have.property('response');
                expect(data.response).to.be.an('array').with.lengthOf(1);
                expect(data.response[0].team.id).to.equal(215);
                done();
            })
            .catch(err => done(err));
    });

    it('Para o ID - > 216', (done) => {
        const url = 'http://localhost/api/teams?id=216';
        myfetch(url)
            .then(response => response.json())
            .then(data => {
                expect(data).to.have.property('response');
                expect(data.response).to.be.an('array').with.lengthOf(1);
                expect(data.response[0].team.id).to.equal(216);
                done();
            })
            .catch(err => done(err));
    });

    it('Para o ID - > 217', (done) => {
        const url = 'http://localhost/api/teams?id=217';
        myfetch(url)
            .then(response => response.json())
            .then(data => {
                expect(data).to.have.property('response');
                expect(data.response).to.be.an('array').with.lengthOf(1);
                expect(data.response[0].team.id).to.equal(217);
                done();
            })
            .catch(err => done(err));
    });

    it('Para o ID - > 218', (done) => {
        const url = 'http://localhost/api/teams?id=218';
        myfetch(url)
            .then(response => response.json())
            .then(data => {
                expect(data).to.have.property('response');
                expect(data.response).to.be.an('array').with.lengthOf(1);
                expect(data.response[0].team.id).to.equal(218);
                done();
            })
            .catch(err => done(err));
    });

    it('Para o ID - > 228', (done) => {
        const url = 'http://localhost/api/teams?id=228';
        myfetch(url)
            .then(response => response.json())
            .then(data => {
                expect(data).to.have.property('response');
                expect(data.response).to.be.an('array').with.lengthOf(1);
                expect(data.response[0].team.id).to.equal(228);
                done();
            })
            .catch(err => done(err));
    });

    it('Para o ID - > 227', (done) => {
        const url = 'http://localhost/api/teams?id=227';
        myfetch(url)
            .then(response => response.json())
            .then(data => {
                expect(data).to.have.property('response');
                expect(data.response).to.be.an('array').with.lengthOf(1);
                expect(data.response[0].team.id).to.equal(227);
                done();
            })
            .catch(err => done(err));
    });

});
