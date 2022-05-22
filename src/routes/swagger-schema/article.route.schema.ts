export const getArticleRouteSchema = {
	tags: ["article"],
	security: [{ apiKey: [] }],
	querystring: {
		id: {
			type: 'string',
			description: "article id for query"
		}
	},
	response: {
		200: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					format: 'id'
				},
				title: {
					type: 'string',
					format: 'string',
				},
				text: {
					type: 'string',
					format: 'string',
				},
				UserId: {
					type: 'string',
					format: 'id',
				},
				createdAt: {
					type: 'string',
					format: 'date',
				},
				updatedAt: {
					type: 'string',
					format: 'date',
				},
			}
		}
	},
	
}

export const createArticleRouteSchema = {
	tags: ["article"],
	security: [{ apiKey: [] }],
	body: {
		type: 'object',
		properties: {
			title: {
				type: 'string',
			},
			text: {
				type: 'string',
			},
			type: {
				type: 'string',
			},
		}
	},
	response: {
		200: {
			type: 'object',
			properties: {
				id: {
					type: 'string',
					format: 'id'
				},
				title: {
					type: 'string',
					format: 'string',
				},
				text: {
					type: 'string',
					format: 'string',
				},
				UserId: {
					type: 'string',
					format: 'id',
				},
				createdAt: {
					type: 'string',
					format: 'date',
				},
				updatedAt: {
					type: 'string',
					format: 'date',
				},
			}
		}
	},
	
}

export const updateArticleRouteSchema = {
	tags: ["article"],
	security: [{ apiKey: [] }],
	params: {
		type: 'object',
		properties: {
			id: {
				type: 'string',
				description: 'the article identifier, as id'
			}
		},
		required: ['id']
	},
}
export const deleteArticleRouteSchema = {
	tags: ["article"],
	security: [{ apiKey: [] }],
	params: {
		type: 'object',
		properties: {
			id: {
				type: 'string',
				description: 'the article identifier, as id'
			}
		},
		required: ['id']
	},
}


export default {
	getArticleRouteSchema,
	createArticleRouteSchema,
	updateArticleRouteSchema,
	deleteArticleRouteSchema
}
