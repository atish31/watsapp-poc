const { Client } = require('whatsapp-web.js');

// Create a new client instance
const client = new Client();

// Event fired when the client is ready
client.on('ready', () => {
  console.log('Client is ready!');

  // Replace the array of phone numbers with the desired recipients in international format
  const phoneNumbers = ['9620662262', '9643731032'];

  // Send messages to each recipient
  phoneNumbers.forEach((phoneNumber) => {
    client.sendMessage(phoneNumber, 'test message for watsapp code integration; please ignore')
      .then(() => {
        console.log(`Message sent successfully to ${phoneNumber}`);
      })
      .catch((error) => {
        console.error(`Error sending message to ${phoneNumber}:`, error);
      });
  });

  client.destroy(); // Close the client connection after sending all the messages
});

// Event fired when a QR code is received and needs to be scanned
client.on('qr', (qrCode) => {
  // Display the QR code for scanning
  console.log('Scan the QR code below:');
  console.log(qrCode);
  getQRimage(qrCode);
});

// Event fired when authentication is successful
client.on('authenticated', (session) => {
  console.log('Authenticated!');
  console.log('Saving session data...');
  // Save the session data for reuse
  // You can serialize and store the session object in a file or database
  // This way, you won't need to authenticate again on future runs
  // For simplicity, we'll just print the session data in this example
  console.log(session);
});

// Initialize the client
client.initialize();


function getQRimage(code) {
  console.log('here');
  const qr = require('qrcode');
const fs = require('fs');

// Replace 'Hello, World!' with the string of characters you want to encode as a QR code
const text = 'Hello, World!';

// Generate the QR code
qr.toFile('qrcode.png', code, (err, _) => {
  if (err) {
    console.error('Error generating QR code:', err);
    return;
  }

  console.log('QR code generated successfully!');
});
}
