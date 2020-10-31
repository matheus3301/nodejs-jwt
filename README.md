# Node JS - JWT Authentication
Simple JSON Web Token authentication feature

Requirements:
 - MongoDB (for saving users)

## Setting up

First, you have to set the environement variables.I gave a .env.example file, you can just clone it and set the variables, then you will get something like this:

```
DATABASE_URL=<yourdatabaseurl>
APP_SECRET=<yourappkey>
```

The APP_SECRET is used for creating the JWT, you can use what you want to.

Now, you have to install the dependencies, open the repository folder and, on the terminal, type:
```
yarn 
```
or
```
npm install
```

Finally, to start the application, use:
```
yarn dev
```
or
```
npm run dev
```

Then, you will get:
```
yarn run v1.22.10
$ nodemon src/index.js
[nodemon] 2.0.6
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node src/index.js`
app online on http://localhost:3333
```

## Usage
You can use Insomnia, Postman or even build a application to communicate with the server😀

There are those endpoints to use:

### POST /users

body:
```json
{
  "username":"matheus3301",
  "password":"myawesomepassword",
}
```
this endpoint encrypts the user password and finally saving it on the database. It will return the user id, like this:
```json
{
  "_id": "5f9dd043aee96074d9acbbd7"
}
```

### POST /session
body:
```json
{
  "username":"matheus3301",
  "password":"myawesomepassword",
}
```
This one check the user existence and if the password is correct, then it will generate a JWT that expires in 7 days, the JWT will be necessary to use the next endpoint:
```json
{       "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9yJ1c2VySWQiOiI1ZjlkZDA0M2FlZTk2MDc0ZDlhY2JiZDciLCJpYXQiOjE2MDQxODA5NjUsImV4cCI6MTYwNDc4NTc2NX0.XoYgdAMp4HF1pY0alZ9K83Y2rkH5N7NfgJj0K15n414"
}
```
### GET /data
Finally, this endpoint requires on the header the token, like this:
```json
{
"authorization":"Bearer yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjlkZDA0M2FlZTk2MDc0ZDlhY2JiZDciLCJpYXQiOjE2MDQxODIzNTksImV4cCI6MTYwNDc4NzE1OX0._MnpQzWErRQuzem9zl7W1NvajQhX1MALm0Z3ufPXPpw"
}
```

It will return a fake data just to confirm that the user is authenticated.

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Matheus Rocha- [@mrocha_oficial](https://instagram.com/mrocha_oficial) - monteiromatheus.rocha@gmail.com

Project Link: [https://github.com/matheus3301/nodejs-jwt](https://github.com/matheus3301/nodejs-jwt)