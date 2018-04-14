/* globals: api */
require('../helper');

// const Item = require('../../models/item');

describe('Item tests', () => {
  beforeEach(done => {
    done();
  });

  describe('GET /search?searchTerm=camera&lat=51.948&lng=0.172943', () => {
    it('should respond with a JSON object', done => {
      api
        .get('/search?searchTerm=camera&lat=51.948&lng=0.172943')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.header['content-type'])
            .to.be.eq('application/json; charset=utf-8');
          done();
        });
    });

    it('should return 200', done => {
      api
        .get('/search?searchTerm=camera&lat=51.948&lng=0.172943')
        .set('Accept', 'application/json')
        .expect(200, done);
    });

    it('should return an array of items', done => {
      api
        .get('/search?searchTerm=camera&lat=51.948&lng=0.172943')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body).to.be.an('array');
          done();
        });
    });

    it('should return an array of item objects', done => {
      api
        .get('/search?searchTerm=camera&lat=51.948&lng=0.172943')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body)
            .and.be.an('array')
            .and.have.property(0)
            .and.have.all.keys([
              'item_name',
              'lat',
              'lng',
              'item_url',
              'img_urls',
              'relevance'
            ]);
          done();
        });
    });

    it('should return an array of twenty items', done => {
      api
        .get('/search?searchTerm=camera&lat=51.948&lng=0.172943')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body)
            .and.be.an('array')
            .and.have.length(20);
          done();
        });
    });
  });
  
  describe('GET /search?searchTerm=Campervan: VW Volkswagen Transporter T5&lat=54.6455383&lng=-3.4644773', () => {
    it('should return 200', done => {
      api
        .get('/search?searchTerm=Campervan: VW Volkswagen Transporter T5&lat=54.6455383&lng=-3.4644773')
        .set('Accept', 'application/json')
        .expect(200, done);
    });

    it('should be in carlisle', done => {
      api
        .get('/search?searchTerm=Campervan: VW Volkswagen Transporter T5&lat=54.6455383&lng=-3.4644773')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body[0].item_url).to.have.string('carlisle');
          done();
        });
    });

    it('should item name Campervan: VW Volkswagen Transporter T5', done => {
      api
        .get('/search?searchTerm=Campervan: VW Volkswagen Transporter T5&lat=54.6455383&lng=-3.4644773')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body[0].item_name).to.equal('Campervan: VW Volkswagen Transporter T5');
          done();
        });
    });
  });

  describe('GET /search?searchTerm=Canon 5D ii&lat=55.8610725&lng=-4.22567892', () => {
    it('should return 200', done => {
      api
        .get('/search?searchTerm=Canon 5D ii&lat=55.8610725&lng=-4.22567892')
        .set('Accept', 'application/json')
        .expect(200, done);
    });

    it('should be in glasgow', done => {
      api
        .get('/search?searchTerm=Canon 5D ii&lat=55.8610725&lng=-4.22567892')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body[0].item_url).to.have.string('glasgow');
          done();
        });
    });

    it('should item name Canon 5D ii', done => {
      api
        .get('/search?searchTerm=Canon 5D ii&lat=55.8610725&lng=-4.22567892')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body[0].item_name).to.equal('Canon 5D ii');
          done();
        });
    });

    it('should return a relevance of 4 (exact match)', done => {
      api
        .get('/search?searchTerm=Canon 5D ii&lat=55.8610725&lng=-4.22567892')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body[0].relevance).to.equal(4);
          done();
        });
    });
  });

  describe('GET /random_url', () => {
    it('should return 404', done => {
      api
        .get('/random_url')
        .set('Accept', 'application/json')
        .expect(404, done);
    });

    it('should return a message not found', done => {
      api
        .get('/random_url')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body.message).and.to.equal('Not Found');
          done();
        });
    });
  });


});
