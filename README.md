<h3 align="center">nodejs-app-structure-init</h3>
<h4 align="center">REST API</h4>
<br />

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
   
  </ol>
</details>


## About The Project
<br />
<!-- [![Product Name Screen Shot][product-screenshot]]() -->
App starter rest-api with node.js fastify sequelize postgresql redis-cache - typescript
</p>
<p align="right">(<a href="#top">back to top</a>)</p>

### Structure
#### Routes-Handlers-Servicess-Structure
```
📦nodejs-app-structure-init
 ┣ 📂src
 ┃ ┣ 📂config
 ┃ ┃ ┣ 📂swagger
 ┃ ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┃ ┗ 📜swagger.option.ts
 ┃ ┃ ┣ 📜config.ts
 ┃ ┃ ┣ 📜database.config.ts
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂errors
 ┃ ┃ ┣ 📜article.errors.ts
 ┃ ┃ ┣ 📜auth.errors.ts
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂handlers
 ┃ ┃ ┣ 📜article.handler.ts
 ┃ ┃ ┣ 📜auth.handler.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜user.handler.ts
 ┃ ┣ 📂helpers
 ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📜auth.hook.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜protectedRoutes.hook.ts
 ┃ ┣ 📂interfaces
 ┃ ┃ ┗ 📂types
 ┃ ┃ ┃ ┣ 📂handlers
 ┃ ┃ ┃ ┃ ┣ 📜article.handler.types.ts
 ┃ ┃ ┃ ┃ ┗ 📜auth.handler.types.ts
 ┃ ┃ ┃ ┣ 📂hooks
 ┃ ┃ ┃ ┃ ┗ 📜auth.hook.types.ts
 ┃ ┃ ┃ ┗ 📂models
 ┃ ┃ ┃ ┃ ┣ 📜article.model.types.ts
 ┃ ┃ ┃ ┃ ┗ 📜user.model.types.ts
 ┃ ┣ 📂models
 ┃ ┃ ┣ 📜article.model.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜users.model.ts
 ┃ ┣ 📂redis
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜redisClient.ts
 ┃ ┣ 📂routes
 ┃ ┃ ┣ 📂swagger-schema
 ┃ ┃ ┃ ┣ 📜article.route.schema.ts
 ┃ ┃ ┃ ┣ 📜auth.route.schema.ts
 ┃ ┃ ┃ ┗ 📜users.route.schema.ts
 ┃ ┃ ┣ 📜article.route.ts
 ┃ ┃ ┣ 📜auth.route.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜users.route.ts
 ┃ ┣ 📂services
 ┃ ┃ ┣ 📜article.service.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜user.service.ts
 ┃ ┣ 📂utils
 ┃ ┃ ┣ 📜custom-error.ts
 ┃ ┃ ┗ 📜logger.ts
 ┃ ┣ 📜app.spec.ts
 ┃ ┗ 📜app.ts
 ┣ 📜.env
 ┣ 📜.eslintrc.ts
 ┣ 📜.gitignore
 ┣ 📜.prettierrc.ts
 ┣ 📜index.ts
 ┣ 📜jest.config.ts
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┣ 📜tsconfig.json
 ┣ 📜yarn.lock
 ┗ 📜[.]env
```

### Built With

* [NodeJs](https://nodejs.org/)
* [Sequelize](https://sequelize.org/)
* [Postgres](https://www.postgresql.org/)
* [Fastify](https://www.fastify.io/)
* [Jest](https://jestjs.io/)
* [Swagger](https://swagger.io/)
* [Redis](https://redis.io/)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

* models - The schema definition of the Model

* routes - The API routes maps to the handlers

* handlers - The handlers handles all the logic behind validating request parameters, query, Sending Responses with correct codes.

* services - The services contains the database queries and returning objects or throwing errors

* interfaces/types - typescript interfaces

* errors - Error type definitions

* utils - Frequently used utility functions

[Ref.route-controller-service-structure-for-expressjs](https://sodocumentation.net/node-js/topic/10785/route-controller-service-structure-for-expressjs)


### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/billowdev/nodejs-app-structure-init.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter your ENV in `.env`
```
  PORT=5000 | Your port
  JWT_SECRET=YourJWTSecret
  NODE_ENV=development
  CLIENT_URL=localhost

  REDIS_HOST=localhost
  REDIS_PORT=6379
  REDIS_USERNAME=default
  REDIS_PASSWORD=REDISPASSWORD
  REDIS_DATABASE=0
  REDIS_BIND=0.0.0.0

  DB_USERNAME= Your username for database
  DB_PASSWORD= Your password for database
  DB_DATABASE_DEVELOPMENT= database name for development
  DB_DATABASE_PRODUCTION= database name for production
  DB_DATABASE_TEST= database name for test
  DB_HOST=localhost | your host
  DB_DIALECT=postgres | mysql | your dialect

```

<p align="right">(<a href="#top">back to top</a>)</p>

