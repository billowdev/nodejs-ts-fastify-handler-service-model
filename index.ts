import { FastifyServerOptions } from "fastify"
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
const app = App(options)
dbConfig(app)
app.listen(config.port)