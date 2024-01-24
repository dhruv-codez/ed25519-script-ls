const nacl = require('tweetnacl');
const naclUtil = require('tweetnacl-util');

exports.handler = async (event) => {
  let body;
  try {
    // Retrieve the message from the event object
    body = JSON.parse(event.body);
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Body is not valid JSON" }),
    };
  }

  const message = JSON.stringify(body);
  const messageUint8 = naclUtil.decodeUTF8(message);

  // Generate a new key pair
  const keyPair = nacl.sign.keyPair();

  // Sign a message
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
