const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const { stripeMock, paypalMock } = require('../utils/mockPayment');

chai.use(chaiHttp);
chai.should();

describe('Payment API', () => {
  before(() => {
  
    stripeMock;
    paypalMock;
  });

  it('should process a payment with Stripe', (done) => {
    chai.request(app)
      .post('/api/v1/payments/stripe')
      .send({
        amount: 1000,
        currency: 'usd',
        source: 'tok_visa'
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('id');
        res.body.should.have.property('status').eql('succeeded');
        done();
      });
  });

  it('should process a payment with PayPal', (done) => {
    chai.request(app)
      .post('/api/v1/payments/paypal')
      .send({
        amount: 1000,
        currency: 'usd',
        source: 'paypal'
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('id');
        res.body.should.have.property('state').eql('approved');
        done();
      });
  });
});
