# Endpoint Auth

## **POST - localhost:3000/auth/register**
Endpoint untuk melakukan registrasi user baru

### Authorization
```
None
```
### Request Body
```
{
    "name" : "string",
    "username": "string",
    "password": "string",
}
```

### Response
```
{
    "message": "User created successfully",
    "data": {
        "user": {
            "id": "integer",
            "name": "string",
            "username": "string",
            "role": "string"
        },
        "token": {
            "accessToken": "string",
            "refreshToken": "string"
        }
    }
}
```

### Status Code
```
200: OK
400: Bad Request (Null Value, Not Unique)
500: Internal Server Error
```

## **POST - localhost:3000/auth/login**
Endpoint untuk user melakukan login

### Authorization
```
None
```
### Request Body
```
{
    "username": "string",
    "password": "string",
}
```
### Response
```
{
    "message": "User logged in successfully",
    "data": {
        "user": {
            "id": "integer",
            "name": "string",
            "username": "string",
            "role": "string"
        },
        "token": {
            "accessToken": "string",
            "refreshToken": "string"
        }
    }
}
```

### Status Code
```
200: OK
400: Bad Request (Null Value, Not Contain Password, Invalid Username or Password)
500: Internal Server Error
```

[Back](../../readme.md)