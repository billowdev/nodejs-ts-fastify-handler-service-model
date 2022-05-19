import { FastifyInstance, FastifyServerOptions } from "fastify"
import App from "./src/app"
import { config, dbConfig } from "./src/config"

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
// config database
dbConfig(app)
// serve
const PORT: string | number = config.port
app.listen(PORT)