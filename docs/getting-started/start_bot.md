## Getting started bot (the bot in raw form, without using a Web Services).
If you want to work in free mode, using only the bot, dry the necessary information!

```javascript

const hydraBot = require('hydra-bot');

(async () => {
    let client;
    // start bot service
    const ev = await hydraBot.initServer();

    // return to current whatsapp interface
    ev.on('interfaceChange', (change) => {
        console.log("interfaceChange: ", change);
    });

    // return qrcode parameters
    ev.on('qrcode', (qrcode) => {
        console.log('qrcode: ', qrcode);
    });

    // return connection information
    ev.on('connection', async (conn) => {

        // browser information!
        if (conn.statusFind === 'browser') {
            console.log('info Browser: ', conn.text);
        }

        // Was connected to whatsapp chat
        if (conn.connect) {
            // send a text message
            client = conn.client;
            await client.sendMessage({
                to: "0000000000@c.us", // you can pass the contact number or group number
                body: "hi i'm hydra bot", // message text
                options: {
                    type: 'sendText', // shipping type
                }
            }).then((result) => {
                console.log(result); // message result
            }).catch((error) => {
                console.log(error); // message error
            });

        }
    });

    // return receive new messages
    ev.on('newMessage', async (newMsg) => {
        // when is received
        if (!newMsg.result.isSentByMe) {
            // message received!
            console.log('NewMessageReceived: ', newMsg.result);
        }
        // when is it sent
        if (!!newMsg.result.isSentByMe) {
            // Message sent
            console.log('NewMessageSent: ', newMsg.result);
        }
    });

    // returns the status of each message
    ev.on('newOnAck', async (event) => {
        console.log('id Message: ', event.result.id._serialized); // message id  
        console.log('Status Message: ', event.result.ack); // -7 = MD_DOWNGRADE, -6 = INACTIVE, -5 = CONTENT_UNUPLOADABLE, -4 = CONTENT_TOO_BIG, -3 = CONTENT_GONE, -2 = EXPIRED, -1 = FAILED, 0 = CLOCK, 1 = SENT, 2 = RECEIVED, 3 = READ, 4 = PLAYED
        console.log('From Message: ', event.result.from); // from message
        console.log('To Message: ', event.result.to); // to message
    });

})();
```