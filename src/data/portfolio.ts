const img = (file: string) => `${import.meta.env.BASE_URL}images/${file}`

export const profile = {
  name: 'Arthur Francisco de Lima',
  shortName: 'Arthur Lima',
  role: 'Desenvolvedor Full Stack',
  headline: 'Júnior na Talk2buy · lidero o time de desenvolvimento',
  location: 'São Paulo, Brasil',
  photo: img('arthur.jpg'),
  summary:
    'Cursando DSM na FATEC Zona Leste e trabalhando na Talk2buy, onde saí do estágio para júnior e hoje lidero os estagiários do time. Gosto de fechar o ciclo: interfaces em React/Next, APIs em Node e .NET, bancos SQL/NoSQL, testes e deploy. Busco código limpo, entregas previsíveis e produtos que realmente funcionem em produção.',
  email: 'arthurlima121213@gmail.com',
  phone: '+55 11 93210-9703',
  whatsapp: 'https://wa.me/5511932109703',
  github: 'https://github.com/ArthKnov',
  githubLabel: 'github.com/ArthKnov',
  linkedin: 'https://www.linkedin.com/in/arthur-lima-7a8b93279/',
  linkedinLabel: 'linkedin.com/in/arthur-lima-7a8b93279',
}

export type Education = {
  degree: string
  institution: string
  location: string
  start: string
  end: string
  status: string
  description: string
}

export const education: Education[] = [
  {
    degree: 'Tecnólogo em Desenvolvimento de Software Multiplataforma',
    institution: 'FATEC Zona Leste',
    location: 'São Paulo, Brasil',
    start: '01/2024 (1º semestre de 2024)',
    end: '12/2026 (previsão)',
    status: 'Cursando o 6º semestre',
    description:
      'Graduação tecnológica com ênfase em software para web, mobile e serviços. Cada semestre gera um projeto integrador — os cinco estão detalhados mais abaixo.',
  },
  {
    degree: 'Técnico em Automação Industrial',
    institution: 'ETEC Martin Luther King',
    location: 'São Paulo, Brasil',
    start: '01/2021',
    end: '12/2023',
    status: 'Concluído',
    description:
      'Base técnica em lógica, sensores, CLPs e sistemas de controle. Foi o caminho que me levou à programação e, depois, ao desenvolvimento de software.',
  },
]

export type Role = {
  title: string
  start: string
  end?: string
  current?: boolean
  description: string
  highlights?: string[]
}

export type Job = {
  company: string
  start: string
  end?: string
  location: string
  roles: Role[]
  tags: string[]
}

export const jobs: Job[] = [
  {
    company: 'Talk2buy',
    start: '05/2025',
    location: 'São Paulo, Brasil',
    roles: [
      {
        title: 'Líder da Equipe de Desenvolvimento',
        start: '03/2026',
        current: true,
        description:
          'Liderei o time de desenvolvimento sem sair do código. Continuo entregando features e resolvendo problemas em front, back, banco, integrações e Azure — e ainda oriento os estagiários em cada uma dessas frentes.',
        highlights: [
          'Organizo as sprints no Scrum: quebro demandas, priorizo backlog e acompanho o burndown até a entrega.',
          'Faço code review diário e mentoria técnica dos estagiários (React/Vite, C#/.NET, MySQL e Azure).',
          'Defino padrões de código, estrutura de pastas, nomenclatura e boas práticas (Clean Code, SOLID e padrões de projeto).',
          'Desenho e reviso fluxos de integração entre APIs .NET, Windows Services e sistemas externos.',
          'Acompanho deploys, App Settings, connection strings e permissões no Azure para evitar surpresa em produção.',
          'Atuo como ponte entre produto e desenvolvimento: traduzo necessidade de negócio em tarefa técnica clara.',
          'Ajudo a investigar incidentes em produção (logs, banco, serviço parado, falha de integração) e documentar a correção.',
        ],
      },
      {
        title: 'Desenvolvedor Júnior I',
        start: '19/12/2025',
        current: true,
        description:
          'Depois da efetivação passei a tocar entregas completas sozinho: da tela à API, do Windows Service ao MySQL e às configs no Azure. É o dia a dia de quem mexe em absolutamente tudo no produto.',
        highlights: [
          'Desenvolvo e evoluo fronts em React + Vite (e Next.js quando o projeto pede), com TypeScript, componentes reutilizáveis e layout responsivo.',
          'Crio e mantenho APIs REST em C# / .NET 6: controllers, services, DTOs, autenticação/autorização e regras de negócio.',
          'Integro o front com as APIs (fetch/axios), trato erros, loading states e contratos de request/response.',
          'Implemento Windows Services em C# para jobs agendados, sincronizações e integrações que rodam em background no Windows Server.',
          'Modelo tabelas, índices e procedures no MySQL; otimizo queries lentas e ajusto schema conforme novas features.',
          'Quando a demanda pede, também trabalho com PostgreSQL e MongoDB no mesmo ecossistema.',
          'Configuro e opero recursos no Azure: App Service, bancos, storage, variáveis de ambiente, slots, permissões e monitoramento básico.',
          'Monto e acompanho pipelines no Azure DevOps (build, release, variáveis por ambiente).',
          'Escrevo e executo testes unitários, funcionais e de carga; valido a feature antes de liberar para produção.',
          'Faço troubleshooting de ponta a ponta: UI, API, serviço Windows, connection string e dado no banco.',
        ],
      },
      {
        title: 'Estagiário de Desenvolvimento de Software',
        start: '05/2025',
        end: '12/2025',
        description:
          'Entre maio e dezembro de 2025 entrei no ciclo completo de desenvolvimento da Talk2buy. Comecei apoiando front e docs e fui assumindo APIs .NET, MySQL, integrações e publicações no Azure até a efetivação.',
        highlights: [
          'Construí e corrigi telas em React/Vite e Next.js, consumindo as APIs do time e alinhando com o design.',
          'Implementei endpoints e regras em APIs .NET sob supervisão, aprendendo a estrutura do projeto e os padrões do time.',
          'Participei de fluxos de integração que rodavam em background e depois foram evoluídos para Windows Services em C#.',
          'Escrevi e ajustei queries MySQL, apoiei mudanças de schema e validei dados em homologação.',
          'Ajudei em publicações e configurações no Azure (App Service, variáveis, connection strings) e no Azure DevOps.',
          'Documentei APIs, fluxos e passos de deploy para o time e para quem ia consumir os serviços.',
          'Executei testes funcionais e de desempenho, abri bugs com repro e ajudei a fechar o ciclo da sprint.',
          'Participei das dailies e reviews, pegando cada vez mais ownership das tarefas até a promoção a júnior.',
        ],
      },
    ],
    tags: [
      'React',
      'Vite',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'C#',
      '.NET 6',
      'Windows Services',
      'APIs RESTful',
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'Azure',
      'Azure App Service',
      'Azure DevOps',
      'AWS',
      'Scrum',
      'Testes unitários, funcionais e de carga',
      'Clean Code',
      'SOLID',
      'Integrações',
    ],
  },
]

export type Course = {
  name: string
  institution: string
  location: string
  hours: number
  start?: string
  end?: string
  description: string
  tags: string[]
}

export const courses: Course[] = [
  {
    name: 'Formação React',
    institution: 'Rocketseat',
    location: 'Online',
    hours: 90,
    description:
      'Trilha prática de React: componentes, hooks, roteamento, consumo de APIs e padrões modernos de front-end.',
    tags: ['React', 'Front-end'],
  },
]

export type Language = { name: string; level: string; percent: number }

export const languages: Language[] = [
  { name: 'Português', level: 'Nativo', percent: 100 },
  { name: 'Inglês', level: 'Avançado', percent: 80 },
  { name: 'Espanhol', level: 'Básico', percent: 35 },
]

export const skills: { group: string; items: string[] }[] = [
  { group: 'Escrevo código em', items: ['JavaScript', 'TypeScript', 'C#', 'Java', 'Python', 'SQL'] },
  {
    group: 'No servidor',
    items: ['Node.js', '.NET', 'C#', 'Windows Services', 'Spring Boot', 'Express.js', 'APIs RESTful', 'Microsserviços'],
  },
  {
    group: 'Na interface',
    items: ['HTML5', 'CSS3', 'React', 'Vite', 'Next.js', 'React Native', 'Bootstrap', 'Tailwind CSS'],
  },
  { group: 'Persistência', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL', 'NoSQL'] },
  { group: 'Qualidade', items: ['Jest', 'Postman', 'K6', 'Testes unitários e funcionais'] },
  {
    group: 'Deploy e cloud',
    items: ['Azure', 'AWS', 'Render', 'Vercel', 'Netlify', 'MongoDB Atlas'],
  },
  {
    group: 'Fluxo de trabalho',
    items: ['Git', 'GitHub', 'Azure DevOps', 'Scrum', 'VSCode', 'IntelliJ', 'Eclipse'],
  },
]

export type RepoLink = { label: string; url: string }

export type Project = {
  slug: string
  name: string
  subtitle: string
  semester: string
  period: string
  cover: string
  screenshots: { src: string; caption: string }[]
  description: string[]
  features: string[]
  techGroups: { group: string; items: string[] }[]
  tags: string[]
  repos: RepoLink[]
  demo?: string
  participation: string[]
  myTech: string[]
}

export const projects: Project[] = [
  {
    slug: 'senior-conecta',
    name: 'Sênior Conecta',
    subtitle: 'Reinserção de profissionais 60+ no mercado',
    semester: 'Semestre 1',
    period: '2024/1',
    cover: img('senior-conecta.png'),
    screenshots: [{ src: img('senior-conecta.png'), caption: 'Landing page do Sênior Conecta' }],
    description: [
      'O Sênior Conecta é um projeto acadêmico voltado para a integração de profissionais aposentados (60+) no mercado de trabalho. O objetivo é conectar esses profissionais experientes com empresas que buscam conhecimento especializado, promovendo a reintegração sênior ao mundo corporativo.',
      'Nesta etapa foi desenvolvida a landing page web, com uma interface intuitiva e acessível que valoriza a experiência sênior e apresenta a proposta da plataforma para empresas e profissionais.',
    ],
    features: [
      'Landing page institucional com apresentação da proposta',
      'Layout pensado para acessibilidade e leitura confortável',
      'Seções de chamada para ação para empresas e profissionais',
    ],
    techGroups: [{ group: 'Front-end', items: ['HTML5', 'CSS3', 'JavaScript'] }],
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Git/GitHub'],
    repos: [{ label: 'Repositório', url: 'https://github.com/ArthKnov/Projeto-Senior-Conecta' }],
    participation: [
      'Atuei no desenvolvimento completo da landing page, da estrutura HTML semântica à estilização em CSS e às interações em JavaScript.',
      'Fui responsável pela construção do layout, pela organização das seções e pelo versionamento do projeto no GitHub.',
    ],
    myTech: ['HTML5', 'CSS3', 'JavaScript', 'Git', 'GitHub'],
  },
  {
    slug: 'patty-nails',
    name: 'Patty Nails',
    subtitle: 'Plataforma de agendamento de manicure',
    semester: 'Semestre 2',
    period: '2024/2',
    cover: img('patty-nails.png'),
    screenshots: [{ src: img('patty-nails.png'), caption: 'Página inicial da Patty Nails' }],
    description: [
      'A Patty Nails é uma aplicação web para facilitar o agendamento de sessões de manicure, voltada tanto para clientes que realizam seus agendamentos quanto para administradores que os gerenciam.',
      'O sistema oferece um gerenciamento de horários seguro e funcional: clientes agendam, visualizam e cancelam sessões, enquanto administradores têm controle total dos horários e agendamentos, com um sistema automático de alertas por e-mail.',
    ],
    features: [
      'Cadastro e login com autenticação JWT e Passport',
      'Seleção de serviço, profissional, data e horário (limite de três agendamentos por horário)',
      'Perfil do cliente com histórico e cancelamento de agendamentos',
      'Painel administrativo para criar, editar e remover horários',
      'Notificações automáticas por e-mail com Nodemailer',
    ],
    techGroups: [
      {
        group: 'Front-end',
        items: ['HTML5', 'CSS3', 'JavaScript (ES6)', 'Tailwind CSS', 'Bootstrap', 'FullCalendar', 'SweetAlert2'],
      },
      { group: 'Back-end', items: ['Node.js', 'Express.js', 'Handlebars', 'EJS', 'JWT', 'Passport', 'bcrypt', 'Nodemailer'] },
      { group: 'Banco de dados', items: ['MySQL', 'Sequelize ORM', 'XAMPP'] },
    ],
    tags: ['Node.js', 'Express', 'MySQL', 'Sequelize', 'Handlebars/EJS', 'Tailwind', 'JWT'],
    repos: [{ label: 'Repositório', url: 'https://github.com/ArthKnov/Patty-Nails' }],
    demo: 'http://patty-nails-production.up.railway.app',
    participation: [
      'Atuei como desenvolvedor full stack: modelei o banco MySQL com Sequelize, criei as rotas e regras de negócio em Express e implementei a autenticação com JWT e Passport.',
      'No front-end, construí as telas com Handlebars, Tailwind e Bootstrap, incluindo o calendário de horários com FullCalendar e os alertas com SweetAlert2.',
      'Também implementei o envio de e-mails automáticos com Nodemailer e cuidei do deploy da aplicação.',
    ],
    myTech: ['Node.js', 'Express.js', 'MySQL', 'Sequelize', 'JWT', 'Passport', 'Handlebars', 'Tailwind CSS', 'Bootstrap', 'Nodemailer'],
  },
  {
    slug: 'center-pet',
    name: 'Center Pet',
    subtitle: 'Web + API para ONGs gerenciarem pets e adoções',
    semester: 'Semestre 3',
    period: '2025/1',
    cover: img('center-pet-web.png'),
    screenshots: [{ src: img('center-pet-web.png'), caption: 'Página inicial do Center Pet Web' }],
    description: [
      'O Center Pet é uma plataforma que conecta ONGs de proteção animal a pessoas interessadas em adotar. As ONGs cadastram e gerenciam seus pets, e os adotantes navegam pelo catálogo, conhecem as ONGs e manifestam interesse na adoção.',
      'O projeto foi dividido em uma aplicação web em React e uma API REST em Node.js com MongoDB, que depois foi reaproveitada na versão mobile.',
    ],
    features: [
      'Catálogo de pets disponíveis com filtros e destaque das ONGs',
      'Cadastro e autenticação de adotantes e ONGs com JWT',
      'Painel da ONG com gestão de pets e dashboards em gráficos (Chart.js)',
      'Exportação de relatórios em PDF e Excel',
      'Recursos de acessibilidade: tema escuro e ajuste do tamanho da fonte',
      'Notificações por e-mail e monitoramento com New Relic',
    ],
    techGroups: [
      {
        group: 'Web',
        items: ['React', 'Vite', 'React Router', 'Material UI', 'Tailwind CSS', 'Chart.js', 'Swiper', 'jsPDF', 'XLSX', 'SweetAlert2'],
      },
      {
        group: 'API',
        items: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'bcrypt', 'Firebase Admin', 'Nodemailer', 'New Relic'],
      },
    ],
    tags: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'MUI'],
    repos: [
      { label: 'Repositório Web', url: 'https://github.com/Center-Pet/center-pet-web' },
      { label: 'Repositório API', url: 'https://github.com/Center-Pet/center-pet-api' },
    ],
    participation: [
      'Atuei como desenvolvedor full stack nas duas frentes do projeto.',
      'Na API, modelei as coleções com Mongoose, criei os endpoints REST em Express, a autenticação com JWT e bcrypt, o envio de e-mails e a integração com Firebase Admin.',
      'Na web, desenvolvi telas e componentes em React com Material UI e Tailwind, o consumo da API, os dashboards com Chart.js e a exportação de relatórios em PDF e Excel.',
    ],
    myTech: ['React', 'Vite', 'Material UI', 'Tailwind CSS', 'Chart.js', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'Firebase Admin'],
  },
  {
    slug: 'swaply',
    name: 'Swaply',
    subtitle: 'Cursos e aulas pagos com créditos (1 crédito = 1 hora)',
    semester: 'Semestre 4',
    period: '2025/2',
    cover: img('swaply.png'),
    screenshots: [{ src: img('swaply.png'), caption: 'Catálogo de cursos do Swaply' }],
    description: [
      'No Swaply você ensina e aprende no mesmo lugar: cada crédito vale uma hora de aula. Quem dá aula acumula créditos para gastar em outros cursos.',
      'Tem catálogo por categoria, agendamento (individual ou em grupo), avaliações e calendário. Front em React e API em Node.js, com Stripe, Zoom e Cloudinary.',
    ],
    features: [
      'Catálogo de cursos por categoria com favoritos',
      'Sistema de créditos para pagar aulas e ganhar ao ensinar',
      'Agendamento de aulas individuais ou em grupo com videoconferência (Zoom API)',
      'Login com e-mail/senha e Google OAuth',
      'Compra de créditos com Stripe e upload de imagens com Cloudinary',
      'Avaliações de cursos e instrutores e notificações por e-mail',
    ],
    techGroups: [
      { group: 'Web', items: ['React', 'Axios', 'Phosphor Icons', 'Vercel'] },
      {
        group: 'API',
        items: ['Node.js', 'Express', 'MongoDB Atlas', 'Mongoose', 'JWT', 'Passport (Google OAuth)', 'Stripe', 'Cloudinary', 'Zoom API', 'Nodemailer', 'Helmet', 'Joi', 'Docker'],
      },
    ],
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Stripe', 'Cloudinary', 'Docker'],
    repos: [
      { label: 'Repositório Web', url: 'https://github.com/Swaply-Conhecimento/swaply-web' },
      { label: 'Repositório API', url: 'https://github.com/Swaply-Conhecimento/swaply-api' },
    ],
    demo: 'https://swaply-web.vercel.app',
    participation: [
      'Atuei como desenvolvedor full stack no front-end e no back-end da plataforma.',
      'Na API, desenvolvi controllers, models e rotas em Express com MongoDB, a autenticação com JWT e Google OAuth, a validação com Joi, a segurança com Helmet e rate limit e as integrações com Stripe, Cloudinary e Zoom.',
      'Na web, construí as telas em React (catálogo, detalhes do curso, agendamento e perfil) consumindo a API com Axios, e publiquei a aplicação na Vercel.',
    ],
    myTech: ['React', 'Axios', 'Node.js', 'Express', 'MongoDB Atlas', 'JWT', 'Google OAuth', 'Stripe', 'Cloudinary', 'Zoom API', 'Docker'],
  },
  {
    slug: 'center-pet-mobile',
    name: 'Center Pet Mobile',
    subtitle: 'App React Native + Expo consumindo a API do Center Pet',
    semester: 'Semestre 5',
    period: '2026/1',
    cover: img('center-pet-mobile.png'),
    screenshots: [{ src: img('center-pet-mobile.png'), caption: 'Tela inicial do Center Pet Mobile' }],
    description: [
      'No 5º semestre levamos o Center Pet para o celular: app em React Native com Expo que consome a mesma API do semestre anterior, sem reinventar o backend.',
      'Pelo app dá para ver pets, ONGs em destaque e seguir com a adoção no Android e no iOS.',
    ],
    features: [
      'Carrossel de destaque e catálogo de pets disponíveis',
      'ONGs em destaque e detalhes de cada pet',
      'Autenticação com contexto global e sessão persistida com AsyncStorage',
      'Upload de imagens pela câmera ou galeria (Expo Image Picker)',
      'Configuração de ambientes (desenvolvimento, teste e produção) via variáveis do Expo',
      'Monitoramento do app com New Relic',
    ],
    techGroups: [
      {
        group: 'Mobile',
        items: ['React Native', 'Expo', 'NativeWind', 'React Navigation', 'AsyncStorage', 'Expo Image Picker', 'New Relic'],
      },
      { group: 'API (reaproveitada)', items: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT'] },
    ],
    tags: ['React Native', 'Expo', 'NativeWind', 'React Navigation', 'AsyncStorage', 'Node.js'],
    repos: [
      { label: 'Repositório Mobile', url: 'https://github.com/Center-Pet/center-pet-mobile' },
      { label: 'Repositório API', url: 'https://github.com/Center-Pet/center-pet-api' },
    ],
    participation: [
      'Atuei como desenvolvedor full stack na migração do Center Pet para mobile.',
      'No app, desenvolvi telas em React Native com NativeWind, a navegação com React Navigation, o contexto de autenticação com persistência em AsyncStorage e a camada de serviços HTTP para consumir a API.',
      'Na API, fiz os ajustes necessários para atender o aplicativo, mantendo a compatibilidade com a versão web.',
    ],
    myTech: ['React Native', 'Expo', 'NativeWind', 'React Navigation', 'AsyncStorage', 'Node.js', 'Express', 'MongoDB'],
  },
]
