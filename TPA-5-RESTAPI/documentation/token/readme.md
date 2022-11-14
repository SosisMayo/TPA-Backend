# Endpoint Token

## **GET - localhost:3000/token/refresh**
Endpoint ini digunakan untuk melakukan refresh token. User dapat melakukan refresh token dengan mengirimkan refresh token yang didapat saat login. Jika berhasil, maka akan mendapatkan token baru yang dapat digunakan untuk mengakses API lainnya.

### Authorization
```
Bearer Token
```
### Request Body
```
None
```
### Response
```
{
    "message": "Successfully refresh token",
    "data": {
        "accessToken": "string",
        "refreshToken": "string"
    }
}
```
### Status Code
```
200: OK
401: Unauthorized (Invalid Token)
500: Internal Server Error
```

[Back](../../readme.md)