# FoodApp

Web App in JavaScript to find recipes, filter them by diets, sort them by score and other filters. Users can also post their own recipes storing them in the project's own Postgres database through a CRUD with server routes and testing. Some recipes come from consuming an external food API.

## Technologies used:

## Frontend:

- React.js
- Redux.js
- CSS

## Backend:

- Node.js
- Express
- PostgreSQL
- Sequelize

- Testing: JTest, Mocha, Chai


## To run this project:

- Create an SQL database named food
- Get an API key on https://spoonacular.com/food-api/
- Create an .env file in the folder api with the next variables:
- DB_USER= your_user
- DB_PASSWORD=your_pass
- DB_HOST=localhost(database host)
- API_KEY=your_api_key
- Run npm i on the api and the client to install the necessary dependencies
- Run npm start on the api and the client