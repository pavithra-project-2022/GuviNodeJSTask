# GuviNodeJSTask
1.SignUp

https://guvinodejstask.herokuapp.com/api/users/signup

hit this url with below demo data

{
    "name":"xxxxxx",
    "email":"xxxxxxxxxxx@gmail.com",
    "password":"xxxxx"
}

you will get registration success message

{
    "message": "Registered Successfully",
    "user": {
        "name": "xxxx",
        "email": "xxxxx",
        "password": "$2b$10$w9InGe57sBXNQz82axawDensl0.nejpfutMebkK3xCA0etZIsXe/6",
        "_id": "63620c525aa1dca4395fc6df",
        "__v": 0
    }
}

2.Login

https://guvinodejstask.herokuapp.com/api/auth/login

hit this url with below demo data

{
   
   "email":"xxxxxxxxxxx@gmail.com",
   "password":"xxxxx"
}

you will get logged in success message with token

{
    "data": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzYyMGM1MjVhYTFkY2E0Mzk1ZmM2ZGYiLCJpYXQiOjE2NjczNzAyMzMsImV4cCI6MTY2Nzk3NTAzM30.ICLyDHqM7GulIrX3eJctYtkbJkUdAh_1KxVbwFakMmo",
    "message": "logged in successfully"
}

3.Password Reset

https://guvinodejstask.herokuapp.com/api/password-reset/

hit this url with below demo data

{
    "email":"xxxxxxxxxxx@gmail.com"
}

you will get reset mail sent message

{
    "message": "Password reset link sent to your email account"
}

after getting success message check you mail box and use random password for next login

WELCOME TO THE MAIL SENDER APP.
Email:xxxxxxxxxxxx@gmail.com
Password:Reset@1234


4.Send Mail

https://guvinodejstask.herokuapp.com/api/send-mail/

hit this url with below demo data

{
    "email":"shankar.pavithra92@gmail.com",  // sender mailid
   "emailid":"pavithrasethuraman92@gmail.com", //receiver mail id
   "text1":"hello"    // message
}

you will get mail sent success message

{
    "message": "Mail Successfully sent"
}

WELCOME TO THE MAIL SENDER APP.
Content:hello





