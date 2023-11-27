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
-   /:id : PUT(username, password): update user have id

## Category: /category +

-   / : GET -> get all category
-   /:id : GET -> get category have id
-   /:id : DELETE -> delete category have id
-   / : POST(name, description) -> new category
-   /:id : PUT(name, description) -> update category

...

## Recipe: /recipe +

-   /check: GET -> get all recipe check of all user
-   /uncheck: GET -> get all recipe uncheck of all user
-   /user/:userId: GET -> get all of recipe of user have id
-   /:id : GET -> get one recipe have id
-   / : POST(userId, categoryId, name, image,...) -> new recipe
-   /:id : DELETE -> delete recipe have id
-   /:id : PATCH -> handle check recipe have id
-   /favorite/:userId/:id : PATCH -> handle favorite recipe have id
-   /unfavorite/:userId/:id : PATCH -> handle unfavorite recipe have id
-   /favorite/:userId : GET -> get all favorite recipe of user have id
