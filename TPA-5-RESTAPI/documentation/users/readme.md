# Endpoint User

## **GET - localhost:3000/users**
Endpoint ini digunakan untuk mendapatkan semua user yang terdaftar di database. 

### Authorization
```
Bearer Token (Admin Only)
```
### Request Body
```
None
```
### Response
```
{
    "message": "Successfully get all user",
    "data": [
        {
            "id": "integer",
            "name": "string",
            "username": "string",
            "role": "string",
            "createdAt": "date",
            "updatedAt": "date"
        },
        {
            "id": "integer",
            "name": "string",
            "username": "string",
            "role": "string"
            "createdAt": "date",
            "updatedAt": "date"
        },...
    ]
}
```
### Status Code
```
200: OK
401: Unauthorized (Invalid Token)
403: Forbidden (Not Admin)
500: Internal Server Error
```

## **GET - localhost:3000/users/:id**
Endpoint ini digunakan untuk mendapatkan user berdasarkan id yang dimasukkan. Endpoint ini dapat digunakan oleh admin dan user. Ketika user mengakses endpoint ini, maka user hanya dapat melihat data dirinya sendiri.

### Authorization
```
Bearer Token (Admin and User)
```
### Request Body
```
None
```
### Response
```
{
    "message": "Successfully get user",
    "data": {
        "id": "integer",
        "name": "string",
        "username": "string",
        "role": "string",
        "createdAt": "date",
        "updatedAt": "date"
    }
}
```
### Status Code
```
200: OK
401: Unauthorized (Invalid Token)
403: Forbidden (Not Admin Or  User Retrieve Data Other User)
404: Not Found (User Not Found)
500: Internal Server Error
```

## **POST - localhost:3000/users**
Endpoint ini digunakan untuk membuat user baru. Endpoint ini hanya dapat digunakan oleh admin.

### Authorization
```
Bearer Token (Admin Only)
```
### Request Body
```
{
    "name" : "string",
    "username": "string",
    "password": "string",
    "role": "string" (Optional)
}
```
### Response
```
{
    "message": "User created successfully",
    "data": {
        "id": "integer",
        "name": "string",
        "username": "string",
        "role": "string"
    }
}
```
### Status Code
```
201: Created
400: Bad Request (Not Unique, Null Value)
401: Unauthorized (Invalid Token)
403: Forbidden (Not Admin)
500: Internal Server Error
```

## **PUT - localhost:3000/users/:id**
Endpoint ini digunakan untuk mengubah data user berdasarkan id yang dimasukkan. Endpoint ini dapat digunakan oleh admin dan user. Ketika user mengakses endpoint ini, maka user hanya dapat mengubah data dirinya sendiri.

### Authorization
```
Bearer Token (Admin and User)
```
### Request Body
```
{
    "name" : "string" (Optional),
    "username": "string" (Optional)
}
```
### Response
```
{
    "message": "Successfully updated user",
    "data": {
        "id": "integer",
        "name": "string",
        "username": "string",
        "role": "string",
        "createdAt": "date",
        "updatedAt": "date"
    }
}
```
### Status Code
```
200: OK
401: Unauthorized (Invalid Token)
403: Forbidden (Not Admin Or User Update Data Other User)
404: Not Found (User Not Found)
500: Internal Server Error
```

## **DELETE - localhost:3000/users/:id**
Endpoint ini digunakan untuk menghapus user berdasarkan id yang dimasukkan. Endpoint ini dapat digunakan oleh admin dan user. Ketika user mengakses endpoint ini, maka user hanya dapat menghapus dirinya sendiri.

### Authorization
```
Bearer Token (Admin and User)
```
### Request Body
```
None
```
### Response
```
{
    "message": "Successfully deleted user"
}
```
### Status Code
```
200: OK
401: Unauthorized (Invalid Token)
403: Forbidden (Not Admin Or User Delete Data Other User)
404: Not Found (User Not Found)
500: Internal Server Error
```

[Back](../../readme.md)
