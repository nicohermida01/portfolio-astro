export interface Project {
	name: string
	description: string
	stack: string[]
	image?: string
	repoUrl?: string
	liveUrl?: string
	badge?: {
		label: string
		type: 'wip' | 'university' | 'personal'
	}
	featured: boolean
	repoPrivate?: boolean
}

export const projects: Project[] = [
	{
		name: 'Plataforma de Servicios para el Hogar',
		description:
			'Plataforma profesional para conectar clientes con prestadores de servicios del hogar. Arquitectura multi-app: API REST con FastAPI, app mobile con React Native para clientes y prestadores, y backoffice en Next.js para gestión y administración.',
		stack: ['FastAPI', 'PostgreSQL', 'React Native', 'Next.js', 'TypeScript'],
		image: '/projects/servicios-hogar.png',
		badge: { label: 'En desarrollo', type: 'wip' },
		featured: true,
	},
	{
		name: 'AlquilAppCar',
		description:
			'Sistema de alquiler de vehículos con dos aplicaciones separadas: un backoffice para gestión y control operativo, y una web de cliente para reservas y administración de perfil. Proyecto universitario formal con requerimientos definidos y desarrollo en equipo.',
		stack: ['Next.js', 'TypeScript', 'TailwindCSS'],
		image: '/projects/alquilappcar.png',
		repoUrl: 'https://github.com/nicohermida01/alquilappcar',
		badge: { label: 'Universidad', type: 'university' },
		featured: true,
	},
	{
		name: 'Sitios Históricos de Argentina',
		description:
			'Plataforma con dos aplicaciones: un backoffice para gestión de datos y usuarios, y un portal público para explorar y visualizar sitios históricos de Argentina. Desarrollado en equipo con metodología formal de la cátedra.',
		stack: ['Next.js', 'TypeScript', 'TailwindCSS'],
		image: '/projects/sitios-historicos.png',
		badge: { label: 'Universidad', type: 'university' },
		featured: true,
		repoPrivate: true,
	},
]
