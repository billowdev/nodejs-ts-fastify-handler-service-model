<h3 align="center">nodejs-app-structure-init</h3>


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
App starter REST API With Node.js Fastify MongoDB - Typescript
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
 ┃ ┃ ┣ 📜auth.error.ts
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂handlers
 ┃ ┃ ┣ 📂__tests__
 ┃ ┃ ┣ 📜auth.handler.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜users.handler.ts
 ┃ ┣ 📂helpers
 ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📂__tests__
 ┃ ┃ ┣ 📜auth.hook.ts
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂interfaces
 ┃ ┃ ┗ 📂types
 ┃ ┃ ┃ ┣ 📂handlers
 ┃ ┃ ┃ ┃ ┗ 📜auth.types.handler.ts
 ┃ ┃ ┃ ┣ 📂hooks
 ┃ ┃ ┃ ┃ ┗ 📜auth.types.hook.ts
 ┃ ┃ ┃ ┗ 📂models
 ┃ ┃ ┃ ┃ ┗ 📜Users.types.model.ts
 ┃ ┣ 📂models
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜users.model.ts
 ┃ ┣ 📂public
 ┃ ┣ 📂redis
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜redisClient.ts
 ┃ ┣ 📂routes
 ┃ ┃ ┣ 📜auth.route.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜users.route.ts
 ┃ ┣ 📂services
 ┃ ┃ ┣ 📂__tests__
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜users.service.ts
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
* [MongoDB](https://www.mongodb.com/)
* [Fastify](https://www.fastify.io/)
* [Jest](https://jestjs.io/)
* [Swagger](https://swagger.io/)
* [redis](https://redis.io/)

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
    PORT=
	MONGO_URI=
	JWT_SECRET=
	NODE_ENV=
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

