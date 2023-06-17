const wbm = require('wbm');

wbm.start().then(async () => {
    const phones = ['96********', '96********'];
    const message = 'test for bulk whatsapp message sending; please ignore';
    await wbm.send(phones, message);
    await wbm.end();
}).catch(err => console.log(err));
