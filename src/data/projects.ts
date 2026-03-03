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
		name: 'Home Services Platform',
		description:
			'Professional platform to connect clients with home service providers. Multi-app architecture: REST API with FastAPI, React Native mobile app for clients and providers, and a Next.js backoffice for management and administration.',
		stack: ['FastAPI', 'PostgreSQL', 'React Native', 'Next.js', 'TypeScript'],
		/* image: '/projects/servicios-hogar.png', */
		badge: { label: 'In Progress', type: 'wip' },
		featured: true,
	},
	{
		name: 'Bit by Bit',
		description:
			'Bit by Bit is a web platform I created with the goal of helping people learn programming step by step. Through a collection of self-written articles, users can explore key programming concepts in a clear and approachable way, without needing prior experience.',
		stack: ['Astro', 'TypeScript', 'TailwindCSS'],
		image: '/projects/bit-by-bit.png',
		badge: { label: 'Personal', type: 'personal' },
		featured: true,
		repoUrl: 'https://github.com/nicohermida01/bit-by-bit',
		liveUrl: 'https://bit-by-bit-theta.vercel.app/',
	},
	{
		name: 'AlquilAppCar',
		description:
			'Vehicle rental system with two separate applications: a backoffice for operational management and control, and a client web app for bookings and profile management. Formal university project with defined requirements and team development.',
		stack: ['Next.js', 'TypeScript', 'TailwindCSS'],
		/* image: '/projects/alquilappcar.png', */
		repoUrl: 'https://github.com/nicohermida01/alquilappcar',
		badge: { label: 'University', type: 'university' },
		featured: true,
	},
	{
		name: 'Sitios Históricos de Argentina',
		description:
			"Platform with two applications: a backoffice for data and user management, and a public portal to explore and visualize historical sites across Argentina. Developed as a team following the course's formal methodology.",
		stack: ['Next.js', 'TypeScript', 'TailwindCSS'],
		/* image: '/projects/sitios-historicos.png', */
		badge: { label: 'University', type: 'university' },
		featured: true,
		repoPrivate: true,
	},
]
