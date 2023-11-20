# Foodbook API

### **Base URL**: https://foodbook-api-nodejs.vercel.app/api

## Usage

## User : /user +

-   /login : POST(email, password)
-   /register: POST(email, password, username)
-   / : GET -> get all user
-   /:id : GET -> get user have id
-   /:id : DELETE -> delete user have id
-   /lock/:id : PATCH -> lock/unlock user have id

## Category: /category +

-   / : GET -> get all category
-   /:id : GET -> get category have id
-   /:id : DELETE -> delete user have id
-   / : POST(name, description) -> new category
-   /:id : PUT(name, description) -> update category

...

## Recipe: /recipe +

-   /check: GET -> get all check of all user
-   /uncheck: GET -> get all uncheck of all user
-   /:userId: GET -> get all of user have id
-   /:id : GET -> get one recipe have id
-   / : POST(userId, categoryId, name, image,...) -> new recipe
-   /:id: DELETE -> delete category have id
-   /:id : PATCH -> check category have id
