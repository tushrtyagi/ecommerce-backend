const nock = require('nock');

const stripeMock = nock('https://api.stripe.com')
  .post('/v1/charges')
  .reply(200, { id: 'ch_1J2Y3Z4A5B6C7D8E9F0G', status: 'succeeded' });

const paypalMock = nock('https://api.paypal.com')
  .post('/v1/payments/payment')
  .reply(200, { id: 'PAY-1AB23456CD789012EF34GHIJ', state: 'approved' });

module.exports = { stripeMock, paypalMock };
