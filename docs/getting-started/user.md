# Example Postman
Use Postman to test routes!
[Postman example](https://github.com/jonalan7/Hydra-bot/blob/master/Postman/postman_collection.json)
[Download Postman](https://www.postman.com/downloads/)

### List of routes for managing whatsapp: 

All whatsapp connection wheels have a pattern of `Headers` of user.
The headers must be parameterized as :

```json
{
    "Content-Type" : "application/json",
    "user" : "user",
    "user_pass" : "user"
}
```
## Summary
 - [Methods POST](#methods-post)
 - [Methods GET](#methods-get)

# Using Webhook

if you want to receive a callback on a specific url, pass the url parameter in the connect route.

### Methods POST

| Type | Route to browser | Description                    | Body                                             |
|------|------------------|--------------------------------|--------------------------------------------------|
| POST | `/connect`       | Start connection with Whatsapp | `{ "url": "http://localhost:8080/webhooktest" }` |
| POST | `/sendtext`      | Send a text to a number        | `{ "to": "contact number", "body": "message"}`   |
| POST | `/sendFile`      | Send file to a number          | `{ "to": "contact number",  "file_path": "https://docs.marklogic.com/guide/node-dev.pdf", "file_name": "node.js" }` |
| POST | `/sendAudio`     | Send audio                     | `{ "to": "contact number",  "url_mp3": "https://cdn.freesound.org/previews/620/620094_4935038-lq.mp3" }` |
| POST | `/sendImage`     | Send image message             | `{ "to": "contact number",  "url_img": "https://i.pinimg.com/564x/a9/b1/18/a9b118761788b1ab260aae2835c468cd.jpg" }` |
| POST | `/disconnect`     | Disconnecting from the server            | EMPTY             |
| POST | `/check_user`     | Check if the entered user exists           | EMPTY             |

### Methods GET

|Type| Route to browser         | Description                                                     | Body                                                         |
|----| ----------------         | ----------------------------------------------------------------|--------------------------------------------------------------|
|GET | `/get_all_contacts`      | Retrieve contacts                                               | `EMPTY`                                                      |
| GET  | `/check_connect`    | check if the client is connected | `EMPTY` |
| GET  | `/last_qrcode`      | Check if the QR-Code is active | `EMPTY` |