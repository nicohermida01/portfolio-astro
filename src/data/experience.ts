export interface Experience {
	role: string
	company: string
	companyUrl: string
	dateStart: string
	dateEnd: string
	description: string
	achievement: string
	stack: string[]
	image?: string
}

export const experience: Experience[] = [
	{
		role: 'Fullstack Developer Jr.',
		company: 'Autoinspector',
		companyUrl: 'https://autoinspector.ai',
		dateStart: 'Nov 2021',
		dateEnd: 'Nov 2022',
		description:
			'I developed fullstack features on an AI-powered digital inspections SaaS platform. I worked on both the backend (microservices with NestJS) and the frontend of a client-facing web dashboard, with tasks assigned iteratively by the product team.',
		achievement:
			"I was assigned the development of the organization's internal backoffice. Starting from a base with very few components, I built the data visualization and statistics modules for business control and management, covering the platform's main operational metrics.",
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
	{
		role: 'Freelance Web Developer',
		company: 'CEPA Argentina',
		companyUrl: 'https://www.cepaargentina.org.ar',
		dateStart: 'Mar 2024',
		dateEnd: 'Nov 2024',
		description:
			'Designed and developed the institutional website for CEPA Argentina, an evacuation and first aid NGO. Worked independently through the full development cycle, from design decisions to deployment.',
		achievement:
			'Delivered a complete production website as a solo developer. Integrated Decap CMS so the NGO team can manage content autonomously without technical assistance, making the solution fully self-sufficient after handoff.',
		stack: [
			'Astro',
			'React',
			'TailwindCSS',
			'Framer Motion',
			'Decap CMS',
			'HeroUI',
			'Vercel',
		],
		image: '/experience/cepa.png',
	},
]
