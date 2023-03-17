# Group Functions

##### Here, `to` can be `<phone Number>@c.us` or `<phone Number>-<groupId>@g.us` or `<phone Number><groupId>@g.us`

[to use these functions it is necessary to initialize the bot, click and learn more.](../Getting%20Started/start_bot.html)

## Summary
 - [createGroup](#creategroup)
 - [addParticipant](#addparticipant)
 - [setGroupDescription](#setgroupdescription)
 - [setGroupImage](#setgroupimage)

### createGroup

Create group

```javascript
await client.createGroup('Group name',  ['111111111111@c.us', '222222222222@c.us'])
.then((result) => {
    console.log(result); // message result
}).catch((error) => {
    console.log(error); // message error
});
```

### addParticipant

Add participant

```javascript
await client.addParticipant('00000000-000000@g.us',  ['111111111111@c.us', '222222222222@c.us'])
.then((result) => {
    console.log(result); // message result
}).catch((error) => {
    console.log(error); // message error
});
```

### setGroupDescription

Change group description

```javascript
await client.setGroupDescription('00000000-000000@g.us', 'group description')
.then((result) => {
    console.log(result); // message result
}).catch((error) => {
    console.log(error); // message error
});
```

### setGroupImage

Change group image

```javascript
await client.setGroupImage('00000000000000@g.us', './file.jpg')
.then((result) => {
    console.log(result); // message result
}).catch((error) => {
    console.log(error); // message error
});
```


