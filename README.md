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

![image](https://user-images.githubusercontent.com/104934300/199478630-1d5f6312-14d1-47fb-b056-8f91bbe32350.png)


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

![image](https://user-images.githubusercontent.com/104934300/199478741-eabb385d-d81b-400b-bd93-e43af9a9a014.png)


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
![image](https://user-images.githubusercontent.com/104934300/199478814-c1513c0f-ac61-4d4a-a235-74b7171cb7cf.png)
![image](https://user-images.githubusercontent.com/104934300/199478923-f1dc2094-d9f1-4d3c-b06d-729c39b0ca96.png)


4.Send Mail

https://guvinodejstask.herokuapp.com/api/send-mail/

hit this url with below demo data

{
    "email":"shankar.pavithra92@gmail.com",  // sender mailid
   "emailid":"pavithrasethuraman92@gmail.com", //receiver mail id
   "text1":"hello"    // message
}

in Headers we have to set token = Bearer "paste a token when logged in" 
if you are not setting Headers it will show "your are not authenticated"
otherwise it will send a mail to receivers mail id with content

you will get mail sent success message

{
    "message": "Mail Successfully sent"
}

WELCOME TO THE MAIL SENDER APP.


Content:hello

![image](https://user-images.githubusercontent.com/104934300/199479100-27697587-3cd7-455f-875a-60bd405f91c7.png)
![image](https://user-images.githubusercontent.com/104934300/199479152-d066ace1-0eec-4e23-8106-c9027fdea8ae.png)
![image](https://user-images.githubusercontent.com/104934300/199479215-1082ede3-fb41-43ff-bb29-f6fb6a013909.png)
![image](https://user-images.githubusercontent.com/104934300/199479291-41ac2804-192d-40e9-8da9-cbfc7778cdc5.png)




