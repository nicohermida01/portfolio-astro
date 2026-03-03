export interface Experience {
	role: string
	company: string
	companyUrl: string
	dateStart: string
	dateEnd: string
	description: string
	achievement: string
	stack: string[]
}

export const experience: Experience[] = [
	{
		role: 'Fullstack Developer Jr.',
		company: 'Autoinspector',
		companyUrl: 'https://autoinspector.ai',
		dateStart: 'Nov 2021',
		dateEnd: 'Nov 2022',
		description:
			'Desarrollé features fullstack en una plataforma SaaS de inspecciones digitales potenciada por IA. Trabajé tanto en el backend (microservicios con NestJS) como en el frontend de un dashboard web para clientes, con tareas asignadas de forma iterativa por el equipo de producto.',
		achievement:
			'Me asignaron el desarrollo del backoffice interno de la organización. Partiendo de una base con muy pocos componentes, construí los módulos de visualización de datos y estadísticas para el control y gestión del negocio, cubriendo las principales métricas operativas de la plataforma.',
		stack: [
			'NestJS',
			'Next.js',
			'TypeScript',
			'TailwindCSS',
			'MongoDB',
			'RabbitMQ',
			'AWS S3',
			'Docker',
			'GitHub Actions',
		],
	},
]
