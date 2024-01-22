const nacl = require('tweetnacl');
const naclUtil = require('tweetnacl-util');

exports.handler = async (event) => {
  // Retrieve the message from the event object
  const message = event.message || 'Hello EVRC!';

  // Generate a new key pair
  const keyPair = nacl.sign.keyPair();

  // Sign a message
  const messageUint8 = naclUtil.decodeUTF8(message);
  const signature = nacl.sign.detached(messageUint8, keyPair.secretKey);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message,
      signature: naclUtil.encodeBase64(signature),
      publicKey: naclUtil.encodeBase64(keyPair.publicKey),
    }),
  };
};
