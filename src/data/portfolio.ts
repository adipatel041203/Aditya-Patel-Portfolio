export type ProjectCategory = 'analytics' | 'apps'

export interface SkillGroup {
  title: string
  description: string
  icon: string
  items: string[]
}

export interface PortfolioProject {
  number: string
  title: string
  category: ProjectCategory
  categoryLabel: string
  description: string
  tools: string[]
  visual: 'lavender' | 'peach' | 'mint' | 'blue' | 'violet'
  symbol: string
  githubUrl: string
  demoUrl?: string
  image?: string
  imageGallery?: string[]
  highlight?: string
}

export interface ExperienceItem { role: string; organization: string; location: string; period: string; summary: string; highlights: string[]; skills: string[] }
export interface EducationItem { qualification: string; institution: string; location: string; period: string }
export interface CertificationItem { name: string; issuer: string; period: string; detail: string }

export const portfolioLinks = {
  github: 'https://github.com/adipatel041203',
  linkedin: 'https://www.linkedin.com/in/aditya-patel-514643237/',
  email: 'adityapatel8c@gmail.com',
  resume: '/Aditya-Patel-Resume.pdf',
  portrait: '/aditya_patel.webp',
} as const

export const rotatingRoles = [
  'Aspiring Data Analyst',
  'SQL · Python · Power BI',
  'Turning data into insight',
] as const

export const experience: ExperienceItem[] = [
  {
  role: 'Software Engineer Intern',
  organization: 'Wappzo Infonet Private Ltd.',
  location: 'Navsari, Gujarat',
  period: 'Jun 2026 – Present',
  summary: 'Contribute to software and web development projects while gaining hands-on experience in data analysis, database management, and business intelligence.',
  highlights: [
    'Develop and maintain responsive web applications using React and TypeScript, focusing on reusable components and user-friendly interfaces',
    'Assist in software development activities, including implementing application features, debugging, and improving existing functionality',
    'Perform data analysis using Excel and Power BI to explore datasets, identify trends, and generate meaningful insights',
    'Write SQL queries to retrieve, manage, and analyze structured data for application and reporting requirements',
    'Support database management and reporting activities as part of software development and analytical workflows'
  ],
  skills: [
    'React',
    'TypeScript',
    'Software Development',
    'Web Development',
    'SQL',
    'Excel',
    'Power BI',
    'Data Analysis'
  ]
},
  { role: 'Frontend Developer Intern', organization: 'Tech-Fusion Technologies', location: 'Navsari, Gujarat', period: 'Dec 2025', summary: 'Developed responsive web interfaces using React and core frontend technologies.', highlights: ['Built responsive user interfaces with HTML, CSS, JavaScript, and React', 'Applied component-based patterns, props, state, and event handling'], skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive UI'] },
]

export const education: EducationItem[] = [
  { qualification: 'Bachelor of Computer Application', institution: 'S.S. Agrawal College', location: 'Navsari, Gujarat', period: 'Jun 2023 – Feb 2026' },
]

export const certifications: CertificationItem[] = [
  { name: 'Frontend Developer (Trainee)', issuer: 'Ek Pehel Organisation (Goldenmence IT Solutions)', period: 'Nov 2022 – Feb 2023', detail: 'Frontend training in HTML, CSS, and Bootstrap, with project work alongside senior developers.' },
  { name: 'Certificate in C Programming', issuer: 'Multi Dimensional Activity Centre (MDAC), Bilimora', period: 'Mar 2022', detail: 'C programming fundamentals and practical development; 188/200 (94%), A+ grade.' },
]

export const skillGroups: SkillGroup[] = [
  { title: 'Data Analytics', description: 'Prepare datasets and investigate customer and business questions.', icon: '01', items: ['SQL', 'Python', 'Pandas', 'Data cleaning', 'Exploratory analysis', 'Feature engineering', 'RFM analysis'] },
  { title: 'Business Intelligence', description: 'Turn analysis into clear dashboards and decision-ready reporting.', icon: '02', items: ['Power BI', 'Dashboard design', 'KPI analysis', 'Data storytelling', 'Excel'] },
  { title: 'Frontend Engineering', description: 'Build responsive interfaces with reusable, typed components.', icon: '03', items: ['TypeScript', 'JavaScript', 'React', 'HTML', 'CSS', 'Bootstrap', 'Redux Toolkit', 'React Router'] },
  { title: 'Backend & Data Stores', description: 'Connect applications to APIs, services, and databases.', icon: '04', items: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Axios', 'PostgreSQL', 'MySQL', 'Local storage'] },
  { title: 'Programming & Tools', description: 'Work across programming fundamentals, analysis, and version control.', icon: '05', items: ['C Programming', 'Git', 'GitHub', 'Vite', 'Jupyter Notebook', 'VS Code'] },
  { title: 'Professional Skills', description: 'Ways of working that support clear, dependable collaboration.', icon: '06', items: ['Problem-solving', 'Team collaboration', 'Communication'] },
]

export const projects: PortfolioProject[] = [
  {
    number: '01',
    title: 'IKEA Customer & RFM Analytics',
    category: 'analytics',
    categoryLabel: 'CUSTOMER ANALYTICS · FEATURED',
    description: 'An end-to-end retail analytics project: SQL data cleaning, Python RFM segmentation, and a custom Power BI dashboard for customer, revenue, retention, and churn analysis.',
    tools: ['SQL', 'Python', 'Pandas', 'Power BI'],
    visual: 'blue',
    symbol: 'IKEA',
    githubUrl: 'https://github.com/adipatel041203/IKEA-Customer-Analytics',
    image: '/projects/ikea-business-overview.png',
    imageGallery: ['/projects/ikea-business-overview.png', '/projects/ikea-rfm-analysis.png'],
    highlight: '5,881 customers · $17M revenue · 6 RFM segments',
  },
  {
    number: '02',
    title: 'Netflix Data Analysis',
    category: 'analytics',
    categoryLabel: 'SUBSCRIPTION & CONTENT ANALYSIS',
    description: 'Cleaned a customer viewing dataset in Python, then used SQL to analyze plan revenue, active accounts, popular genres, viewing hours, devices, and customer engagement for a Power BI report.',
    tools: ['Python', 'Pandas', 'SQL', 'Power BI'],
    visual: 'violet',
    symbol: 'N',
    githubUrl: 'https://github.com/adipatel041203/Netflix-Data-Analysis',
  },
  {
    number: '03',
    title: 'Customer Shopping Behavior',
    category: 'analytics',
    categoryLabel: 'RETAIL · CUSTOMER INSIGHTS',
    description: 'An end-to-end retail case study using Python for cleaning and feature engineering, SQL for business questions, and Power BI for dashboarding. The presentation highlights purchase patterns, customer segments, and subscription behavior.',
    tools: ['Python', 'SQL', 'Power BI', 'Pandas'],
    visual: 'mint',
    symbol: '↗',
    githubUrl: 'https://github.com/adipatel041203/customer_behavior_analysis',
    highlight: '3,900 purchases · subscribers spend 68% more',
  },
  {
    number: '04',
    title: 'TaskFlow',
    category: 'apps',
    categoryLabel: 'TASK MANAGEMENT WEB APP',
    description: 'A responsive task manager with authentication, task creation and updates, priority filters, status tracking, profile editing, and image uploads.',
    tools: ['React', 'TypeScript', 'Redux Toolkit', 'REST API'],
    visual: 'lavender',
    symbol: '✓',
    githubUrl: 'https://github.com/adipatel041203/TaskFlow',
    demoUrl: 'https://task-flow-lemon-pi-72.vercel.app',
  },
  {
    number: '05',
    title: 'MediaVault',
    category: 'apps',
    categoryLabel: 'MEDIA SEARCH & COLLECTION APP',
    description: 'A photo and video discovery app that searches Unsplash and Pexels, then saves favorites to a persistent personal collection.',
    tools: ['React', 'Vite', 'Redux Toolkit', 'Unsplash API', 'Pexels API'],
    visual: 'peach',
    symbol: '▧',
    githubUrl: 'https://github.com/adipatel041203/MediaVault',
    demoUrl: 'https://media-vault-eight.vercel.app',
  },
]
