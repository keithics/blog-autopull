//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('Auto pull', () => {
	describe('/GET index', () => {
		it('it should fail and return 404', (done) => {
			chai.request(server)
				.get('/book')
				.end((err, res) => {
					res.should.have.status(404);
					done();
				});
		});
	});

	describe('/POST api', () => {
		it('it should run api', (done) => {
			chai.request(server)
				.post('/api')
				.end((err, res) => {
					res.should.have.status(200);
					done();
				});
		});
	});

	describe('/POST anotherAPI', () => {
		it('it should run anotherAPI', (done) => {
			chai.request(server)
				.post('/anotherAPI')
				.end((err, res) => {
					res.should.have.status(200);
					done();
				});
		});
	});

	describe('/POST wrong-API', () => {
		it('it should fail to run -- another API', (done) => {
			chai.request(server)
				.post('/wrong-api')
				.end((err, res) => {
					res.should.have.status(400);
					done();
				});
		});
	});

});
