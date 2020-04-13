
# Demo Blog App 

## Description
- Demo bog application using React for front end and graphql for back end 
- The code is based on https://github.com/atulmy/crate.  

## Setup and Running
1. Prerequisites
    - Node
    - MySQL
2. Clone repo
3. Using terminal, go to `code` directory
4. Configurations
    - api
        - Modify `/api/src/config/database.json` for database configuration
        - Modify `/api/.env` for PORT (optional)
    - web app
        - Modify `/web/.env` for PORT / API URL (optional)
5. Setup
    - API : Install packages and database setup (migrations and seed) `cd api` and `npm run setup`
    - Webapp : Install packages `cd web` and `npm install`
6. Development
    - Run API `cd api` and `npm start`, browse GraphiQL at http://localhost:8001/
    - Run Webapp `cd web` and `npm start`, browse webapp at http://localhost:3001/
    - Use following prepared account to login as an administrator
        - Admin
            - id:admin@moca.com
            - pass: pass
