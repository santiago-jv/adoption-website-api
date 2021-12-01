# REST API of Adoption Website
  This api will be consumed by the following project: https://github.com/LoreA-dev/Adoption-WebSite
  #### Server: https://adoption-website-api.herokuapp.com

## Endpoints

### 1. Owners endpoints

|Endpoint|Method|Description|
|:---:|:---:|:---:|
| /api/owners/login |POST| User login |
| /api/owners/register |POST| User register | 

  
### 2. Pets endpoints
  This part requires a Bearer type access token in the request header ('Authorization').
|Endpoint|Method|Description|
|:---:|:---:|:---:|
| /api/pets |GET| Obtain the pets associated with the user registered in the access token provided |
| /api/pets |POST| Create a pet with the owner associated with the user registered in the provided access token |
| /api/pets/:id |DELETE| Delete a pet by providing the pet's id through the url |

## Input data definition

  #### /api/owners/login
  ```
  {
    "email":Required,
    "password":Required
  }
  ```
  
  #### /api/owners/register
  ```
  {
    "name":Required,
    "phoneNumber":Required,
    "address":Required,
    "email":Required,
    "password":Required
  }
  ```
  
  #### /api/pets (POST)
  ```
  {
    "name":Required,
    "photo":(base 64 image) Required,
    "age":Required,
    "gender":Required,
    "personality":Required
  }
  ```
  
## How to start the server
  In a terminal pointing to the root of the project, type the following command to install the dependencies: `npm install`
  
### Development mode
  
  `npm run dev`
  

### For production
  ```
    npm run build
    npm start
  ```
 
## Database configuration

  In this project mongoDB is being used as the database. You can use mongodb locally or copy a URL from a database configured in your MONGO ATLAS account.
