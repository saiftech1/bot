# Example Postman
Use Postman to test routes!
[Postman example](https://github.com/jonalan7/Hydra-bot/blob/master/Postman/postman_collection.json)
[Download Postman](https://www.postman.com/downloads/)

### Commands for administration via terminal

To start the administration interface use:

```bash
> yarn admin
```

Install yarn Ubuntu:

```bash
> curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
> echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
> sudo apt update && sudo apt install yarn
> yarn
```

#### what is an administrator for?
Administrators will be able to manage API users via Webhook.

List of commands in the terminal:

| Command       | Description                                      |
|---------------|--------------------------------------------------|
| `/create`     | Create user                                      |
| `/delete`     | Delete user                                      |
| `/selectid`   | Show user by id                                  |
| `/selectname` | Select user by name                              |
| `/getall`     | List all users                                   |
| `/deactivate` | Disable user                                     |
| `/activate`   | Activate User                                    |
| `/changename` | Change username                                  |
| `/password`   | Change user password                             |
| `/cls`        | Clear screen/terminal                            |
| `/help`       | List all commands for administration in terminal |
| `/exit`       | Exit manager                                     |


### Administration via Webhook
Routes for handling and querying users.
List of commands using `REST API`
All user wheels have a pattern of `Headers`, to be able to access them, to create a administrador:

```json
{
    "Content-Type" : "application/json",
    "admin" : "admin",
    "admin_pass" : "admin"
}
```

### List of routes for user management: 

With an [administrator](#commands-for-administration-via-terminal) (there is a default administrator, the username and password as admin), he can access via Web Service with the following routes:

| Type | Route to browser         | Description          | Body                                                |
|------|--------------------------|----------------------|-----------------------------------------------------|
| POST | `/create_user`           | Create user          | `{"name":"USE","password":"USER PASSWORD"}`         |
| DEL  | `/delete_user/ID_USE`    | Delete user          | `EMPTY`                                             |
| GET  | `/get_user_by_id/ID_USE` | Show user by ID      | `EMPTY`                                             |
| GET  | `/get_all_users`         | List all users       | `EMPTY`                                             |
| PUT  | `/deactivate_user`       | Disable user         | `{"id":"USER ID"}`                                  |
| PUT  | `/activate_user`         | Activate User        | `{"id":"USER ID"}`                                  |
| PUT  | `/change_name`           | Change username      | `{"id":"USER ID","name":"NEW USERNAME"}`            |
| PUT  | `/change_password`       | Change user password | `{"id":"USER ID","password":"NEW SECURE PASSWORD"}` |
