export interface SkillGroup {
	category: string
	items: string[]
}

export const skills: SkillGroup[] = [
	{
		category: 'Frontend',
		items: [
			'Next.js',
			'React',
			'Astro',
			'TypeScript',
			'TailwindCSS',
			'HTML / CSS',
		],
	},
	{
		category: 'Backend',
		items: ['NestJS', 'FastAPI', 'Flask', 'Django', 'Node.js', 'Python'],
	},
	{
		category: 'Databases',
		items: ['PostgreSQL', 'MongoDB', 'MySQL'],
	},
	{
		category: 'Infrastructure & Tools',
		items: ['Docker', 'AWS S3', 'GitHub Actions', 'Git', 'RabbitMQ', 'Redis'],
	},
	{
		category: 'Mobile',
		items: ['React Native'],
	},
]
