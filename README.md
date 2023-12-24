# Ecommerce Cart with Auth

### Technology Stack:

- Used TypeScript as the programming language.
- Used Express.js as the web framework.
- Used Mongoose as the Object Data Modeling (ODM) and validation library for MongoDB.
- Used Zod as for the schema validation
- Used JSON Web Token for authentication & authorization

### Live Link: https://clasic-frontend.vercel.app/

### Frontend: https://github.com/tusharahmmed/cart-frontend

### Application Routes:

#### User

- api/v1/auth/login (POST)
- api/v1/auth/signup (POST)

#### Auth (User)

- api/v1/auth/login (POST)
  Request body:

```json
{
  "email": "example@gmail.com",
  "password": "password@@"
}
```

Response Sample Pattern:

```json
{
  "success": true,
  "message": "User logged in successfully",
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGUzMzMwM2FhNDI1OTZlODVlZTk5NjIiLCJlbWFpbCI6InR1c2hhcmVlQGdtYWlsLmNvbSIsImlhdCI6MTY5MjYxMTMzMSwiZXhwIjoxNjkyNjk3NzMxfQ.SgbnKgJygB4x6-r_sc6br506a27FQSPY6br6XAXheaM",
    "user": {
      "email": "user@gmail.com",
      "fullName": "user_name",
      "_id": "64e33303aa42596e85ee9962",
      "createdAt": "2023-08-21T09:48:51.010Z",
      "updatedAt": "2023-08-21T09:48:51.010Z",
      "__v": 0
    }
  }
}
```

- api/v1/auth/signup (POST)

```json
{
  "email": "example@gmail.com",
  "password": "password@@"
  "fullName": "full_name"
}
```

Response Sample Pattern:

```json
{
  "success": true,
  "message": "User logged in successfully",
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGUzMzMwM2FhNDI1OTZlODVlZTk5NjIiLCJlbWFpbCI6InR1c2hhcmVlQGdtYWlsLmNvbSIsImlhdCI6MTY5MjYxMTMzMSwiZXhwIjoxNjkyNjk3NzMxfQ.SgbnKgJygB4x6-r_sc6br506a27FQSPY6br6XAXheaM",
    "user": {
      "email": "user@gmail.com",
      "fullName": "user_name",
      "_id": "64e33303aa42596e85ee9962",
      "createdAt": "2023-08-21T09:48:51.010Z",
      "updatedAt": "2023-08-21T09:48:51.010Z",
      "__v": 0
    }
  }
}
```

- api/v1/auth/refresh-token (POST)

#### Products

- api/v1/products (GET)

##### Sample Data: (Product)

```json
{
  "title": "TEST 4",
  "image": "image",
  "color": ["#fff", "#111"],
  "size": "SM,MD,XL",
  "price": 99
}
```

#### CARTLIST

- api/v1/cart/add-new (POST)

Request body:

```json
{
  "userId": "64db85be15900eab59d3bf19", // user reference _id
  "items": [
    {
      "productId": "64da6466eabc67877d055555", // product reference _id
      "size": "XL",
      "color": "#fff",
      "quantity": 3
    }
  ]
}
```

Response Sample Pattern:

```json
{
  "success": true,
  "message": "cart added successfully",
  "data": {
    "userId": "64e33926c3df734ff8edc4e1", // user ref id
    "items": [
      {
       "productId": "64da6466eabc67877d055555", // product reference _id
      "size": "XL",
      "color": "#fff",
      "quantity": 3
        "_id": "64e33942c3df734ff8edc4ea"
      }
    ],
    "_id": "64e33942c3df734ff8edc4e9"
  }
}
```

- api/v1/cart/userId (GET) - get user cartList

- api/v1/wish-lists/remove/userId (PATCH) - remove item from cartlist
  Request Body:

```json
{
  "success": true,
  "message": "Wishlist created successfully",
  "data": {
    "userId": "64e33926c3df734ff8edc4e1",
    "books": [
      {
        "bookId": "64e338fbcda1eb11263c02b9",
        "status": "currently reading",
        "_id": "64e33942c3df734ff8edc4ea" // need to pass this id in body
      }
    ],
    "_id": "64e33942c3df734ff8edc4e9"
  }
}
```

As:

```json
{
  "_id": "64dbb0321ce81c70f2c150ee"
}
```

Response Sample Pattern:

```json
{
  "success": true,
  "message": "Successfully removed item from cartlist",
  "data": {
    "userId": "64e33926c3df734ff8edc4e1", // user ref id
    "books": [],
    "_id": "64e33942c3df734ff8edc4e9"
  }
}
```

### Note:

You need to hit all the routes with an authorization token

Request header:

```json
{
  "authorization": "accessToken"
}
```
