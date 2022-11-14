# Endpoint Todos

## **GET - localhost:3000/todos**
Endpoint ini digunakan untuk mendapatkan semua data todo list yang ada pada database. Endpoint ini hanya dapat digunakan oleh admin.

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
    "message": "Successfully get all todo",
    "data": [
        {
            "id": "integer",
            "title": "string",
            "date": "date",
            "user_id": "integer",
            "createdAt": "date",
            "updatedAt": "date"
        },
        {
            "id": "integer",
            "title": "string",
            "date": "date",
            "user_id": "integer",
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
404: Not Found
500: Internal Server Error
```

## **GET - localhost:3000/todos/:id**
Endpoint ini digunakan untuk mendapatkan data todo list berdasarkan id yang dimasukkan. Endpoint dapat digunakan oleh admin dan user. Ketika user mengakses endpoint ini, maka user hanya akan mendapat response sukses ketika todo dengan id yang dimaksud adalah miliknya sendiri.

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
    "message": "Successfully get todo",
    "data": {
        "id": "integer",
        "title": "string",
        "date": "date",
        "user_id": "integer",
        "createdAt": "date",
        "updatedAt": "date"
    }
}
```
### Status Code
```
200: OK
401: Unauthorized (Invalid Token)
403: Forbidden (Not Admin and User is not the owner of the todo)
404: Not Found
500: Internal Server Error
```

## **GET - localhost:3000/todos/user/:id**
Endpoint ini digunakan untuk mendapatkan data todo list berdasarkan id user yang dimasukkan. Endpoint dapat digunakan oleh admin dan user. Ketika user mengakses endpoint ini, maka user hanya akan mendapat response sukses ketika id user yang dimaksud adalah miliknya sendiri.

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
    "message": "Successfully get all todo by user id",
    "data": [
        {
            "id": "integer",
            "title": "string",
            "date": "date",
            "user_id": "integer",
            "createdAt": "date",
            "updatedAt": "date"
        },
        {
            "id": "integer",
            "title": "string",
            "date": "date",
            "user_id": "integer",
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
403: Forbidden (Not Admin and User Is Retrieve Other User's Todo)
404: Not Found
500: Internal Server Error
```

## **POST - localhost:3000/todos**
Endpoint ini digunakan untuk membuat todo baru. Endpoint ini dapat digunakan oleh admin dan user.

### Authorization
```
Bearer Token (Admin and User)
```
### Request Body
```
{
    "title": "string",
    "date": "date"
}
```
### Response
```
{
    "message": "Todo created successfully",
    "data": {
        "id": "integer",
        "title": "string",
        "date": "date",
        "user_id": "integer",
        "updatedAt": "date",
        "createdAt": "date"
    }
}
```
### Status Code
```
201: Created
400: Bad Request (Null Value)
401: Unauthorized (Invalid Token)
500: Internal Server Error
```

## **PUT - localhost:3000/todos/:id**
Endpoint ini digunakan untuk mengubah data todo list berdasarkan id yang dimasukkan. Endpoint ini dapat digunakan oleh admin dan user. Ketika user mengakses endpoint ini, maka user hanya akan mendapat response sukses ketika todo dengan id yang dimaksud adalah miliknya sendiri.

### Authorization
```
Bearer Token (Admin and User)
```
### Request Body
```
{
    "title": "string",
    "date": "date"
}
```
### Response
```
{
    "message": "Successfully update todo",
    "data": {
        "id": "integer",
        "title": "string",
        "date": "date",
        "user_id": "integer",
        "createdAt": "date",
        "updatedAt": "date"
    }
}
```
### Status Code
```
200: OK
401: Unauthorized (Invalid Token)
403: Forbidden (Not Admin and User is not the owner of the todo)
404: Not Found
500: Internal Server Error
```

## **DELETE - localhost:3000/todos/user/:id**
Endpoint ini digunakan untuk menghapus semua data todo list berdasarkan id user yang dimasukkan. Endpoint ini dapat digunakan oleh admin dan user. Ketika user mengakses endpoint ini, maka user hanya akan mendapat response sukses ketika id yang dimaksud adalah id miliknya sendiri.

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
    "message": "Successfully delete all todo by user id",
    "data": [
        {
            "id": "integer",
            "title": "string",
            "date": "date",
            "user_id": "integer",
            "createdAt": "date",
            "updatedAt": "date"
        },
        {
            "id": "integer",
            "title": "string",
            "date": "date",
            "user_id": "integer",
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
403: Forbidden (Not Admin and User Is Delete Other User's Todo)
404: Not Found
500: Internal Server Error
```

## **DELETE - localhost:3000/todos/:id**
Endpoint ini digunakan untuk menghapus data todo list berdasarkan id yang dimasukkan. Endpoint ini dapat digunakan oleh admin dan user. Ketika user mengakses endpoint ini, maka user hanya akan mendapat response sukses ketika todo dengan id yang dimaksud adalah miliknya sendiri.

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
    "message": "Successfully delete todo",
    "data": {
        "id": "integer",
        "title": "string",
        "date": "date",
        "user_id": "integer",
        "createdAt": "date",
        "updatedAt": "date"
    }
}
```
### Status Code
```
200: OK
401: Unauthorized (Invalid Token)
403: Forbidden (Not Admin and User is not the owner of the todo)
404: Not Found
500: Internal Server Error
```

## **DELETE - localhost:3000/todos**
Endpoint ini digunakan untuk menghapus semua data todo list. Endpoint ini hanya dapat digunakan oleh admin.

### Authorization
```
Bearer Token (Admin)
```
### Request Body
```
None
```
### Response
```
{
    "message": "Successfully delete all todo"
    "data": [
        {
            "id": "integer",
            "title": "string",
            "date": "date",
            "user_id": "integer",
            "createdAt": "date",
            "updatedAt": "date"
        },
        {
            "id": "integer",
            "title": "string",
            "date": "date",
            "user_id": "integer",
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
404: Not Found
500: Internal Server Error
```

[Back](../../readme.md)