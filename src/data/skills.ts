export interface SkillGroup {
	category: string
	items: string[]
}

export const skills: SkillGroup[] = [
	{
		category: 'Frontend',
		items: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'HTML / CSS'],
	},
	{
		category: 'Backend',
		items: ['NestJS', 'FastAPI', 'Flask', 'Node.js', 'Python'],
	},
	{
		category: 'Bases de datos',
		items: ['PostgreSQL', 'MongoDB'],
	},
	{
		category: 'Infraestructura & Tools',
		items: ['Docker', 'AWS S3', 'GitHub Actions', 'Git', 'RabbitMQ'],
	},
	{
		category: 'Mobile',
		items: ['React Native'],
	},
]
