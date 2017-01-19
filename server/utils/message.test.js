const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    const from = 'from';
    const text = 'text';
    const message = generateMessage(from, text);
    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    const from = 'from';
    const latitude = '1';
    const longitude = '2';
    var url = 'https://www.google.com/maps?q=1,2'
    const locationMessage = generateLocationMessage(from, latitude, longitude);
    expect(locationMessage.createdAt).toBeA('number');
    expect(locationMessage).toInclude({from, url});
  })
})
