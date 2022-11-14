# Dokumentasi REST API

API ini digunakan untuk melakukan basic CRUD. API ini dibuat dengan menggunakan framework ExpressJS dan MongoDB. API ini juga menggunakan JWT untuk melakukan autentikasi. 

## Endpoint Auth
Endpoint ini digunakan untuk melakukan autentikasi user. User yang sudah terdaftar di database dapat melakukan login dengan mengirimkan username dan password. Jika berhasil, maka akan mendapatkan token yang dapat digunakan untuk mengakses API lainnya. User juga dapat melakukan register dengan mengirimkan username, password, dan name. Jika berhasil, maka akan mendapatkan token yang dapat digunakan untuk mengakses API lainnya.

Untuk lebih lengkapnya dapat dilihat pada [dokumentasi](documentation/auth/readme.md)

## Endpoint User
Endpoint ini digunakan untuk melakukan CRUD user. User yang sudah terdaftar di database dapat melakukan login dengan mengirimkan username dan password. Jika berhasil, maka akan mendapatkan token yang dapat digunakan untuk mengakses API lainnya.

Untuk lebih lengkapnya dapat dilihat pada [dokumentasi](documentation/user/readme.md)

## Endpoint Todo
Endpoint ini digunakan untuk melakukan CRUD todo. User yang sudah terdaftar di database dapat melakukan login dengan mengirimkan username dan password. Jika berhasil, maka akan mendapatkan token yang dapat digunakan untuk mengakses API lainnya dan dapat digunakan untuk mengakses API lainnya.

Untuk lebih lengkapnya dapat dilihat pada [dokumentasi](documentation/todo/readme.md)

## Endpoint Token
Endpoint ini digunakan untuk melakukan CRUD token berupa refresh token. Untuk lebih lengkapnya dapat dilihat pada [dokumentasi](documentation/token/readme.md)


# Dokumentasi Postman
Untuk lebih lengkapnya dapat dilihat pada [dokumentasi](https://documenter.getpostman.com/view/21505080/2s8YmEyRiz)

atau dapat diimport melalui link berikut: https://www.getpostman.com/collections/d4b90e14822d39fa52c9