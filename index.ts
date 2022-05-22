import { FastifyInstance, FastifyServerOptions } from "fastify"
import App from "./src/app"
import { config } from "./src/config"
import db from "./src/models"

const options: FastifyServerOptions = {
	logger: {
		prettyPrint:
			config.env === 'development'
				? {
					translateTime: 'HH:MM:ss Z',
					ignore: 'pid,hostname'
				}
				: false
	}
}

// Application
const app: FastifyInstance = App(options)

// serve
const PORT: string | number = config.port
db.sequelize.sync().then(() => {
	app.listen(PORT)
})
