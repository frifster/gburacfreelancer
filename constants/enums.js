import { faMagic, faClipboard, faUsers, faPen, faComments, faCogs } from '@fortawesome/free-solid-svg-icons'

export const PERSONAL_INFO = {
  quote: '"Without continual growth and progress, such words as improvement, achievement, \nand success have no meaning.” — B.Franklin',
  userHeader: 'GHIA BURAC, RND',
  firstName: 'Ghia',
  lastName: 'Burac',
  country: 'PH',
  birthDate: 'April 04',
  job: 'Operations Manager | Executive Assistant | SEO Specialist | Content Creator',
  nationality: 'Filipino',
  availability: 'Available',
  email: 'ghiburac2020@gmail.com',
  school: 'University of the Philippines - Los Baños',
  contactNumber: '+63 936 043 2765',
  address: 'Manila, Philippines',
  userPic: '/assets/images/user_pic.webp',
  aboutMe: 'Experienced operations manager capable of various administrative tasks supporting local and international brands. Provide quality output thru written correspondence and social media content, reports and documentation, sales and customer service, marketing outreach, vendor and supplier negotiation. Vast work history in health & wellness, pharmaceutical, entertainment, technology and communication industries.',
  fbLink: 'https://www.facebook.com/ghia.burac',
  linkedIn: 'https://www.linkedin.com/in/ghia-b-779a7a1a4/',
  twitter: 'https://twitter.com/Ghi79067455',
  upworkLink: 'https://www.upwork.com/freelancers/~01c6ae03e3cba2663d'
}

export const SENGRID_SENDER = 'avilaeugeneb@gmail.com'

export const EDUCATIONS = [
  {
    dateRange: '2016',
    label: 'Bachelor of Science in Nutrition'.toUpperCase(),
    location: PERSONAL_INFO.school.toUpperCase(),
    desc: ''
  },
  {
    dateRange: '2006',
    label: 'SALUTATORIAN',
    location: 'MUNTINLUPA NATIONAL HIGH SCHOOL',
    desc: ''
  }
]

export const AFFILIATIONS = [
  {
    dateRange: '2020',
    label: 'Philippine Society of Nutritionist-Dietitians'.toUpperCase(),
    location: 'PHILIPPINES',
    desc: ''
  },
  {
    dateRange: '2020',
    label: 'Filipino Virtual Assistance - Academy'.toUpperCase(),
    location: 'PHILIPPINES',
    desc: ''
  },
  {
    dateRange: '2009',
    label: 'Haring-Ibon UPLB'.toUpperCase(),
    location: PERSONAL_INFO.school.toUpperCase(),
    desc: ''
  },
  {
    dateRange: '2008',
    label: 'Filipiniana Dance Troupe'.toUpperCase(),
    location: PERSONAL_INFO.school.toUpperCase(),
    desc: ''
  }
]

export const EXPERIENCES = [
  {
    dateRange: '2021 - 2022',
    label: 'EXECUTIVE ASSISTANCE & PROJECT MANAGEMENT',
    location: 'UPWORK',
    desc: "Supported the business growth by providing admin support to the CEO with variety of tasks and responsibilities. Increased operations productivity with creative solutions and systems improvement.Assisted with projects and marketing campaigns from planning to execution resulting to an increased in the brand's bookings and sales by 5x the usual rate."
  },
  {
    dateRange: '2020',
    label: 'SEO SPECIALIST',
    location: 'UPWORK',
    desc: 'Increased website traffic and achieved higher rank in SERP with different SEO techniques implemented within two months. Performed SEO strategies to improve and correct website page errors resulted from analysis and SEO page audits.'
  },
  {
    dateRange: '2020',
    label: 'CONTENT CREATOR',
    location: 'UPWORK',
    desc: 'Composed SEO-optimized articles for different niches. On-time content submission and with 4.8/5 rating in quality output. Improved click-through-rate and page ranking with quality, relevant, original content written materials. Grew brand presence with social media graphic content and scheduled posting. '
  },
  {
    dateRange: '2020',
    label: 'EMAIL MARKETING & MANAGEMENT',
    location: 'UPWORK',
    desc: 'Managed a high volume of emails and correspondence including general inquiries up to complaints handling. Processed email marketing which increased conversion of leads into customers by 42% than the usual metric.'
  },
  {
    dateRange: '2019',
    label: 'OPERATIONS MANAGER',
    location: 'MEDGROCER',
    desc: 'Led pharmaceutical operations focusing on systems development and operations efficiency. Supervised end-to-end of operations including quality control, people management, reports and documentation. Streamlined operational procedures that gained 5x efficiency within 3 months and increased monthly sales volume by 10x.'
  },
  {
    dateRange: '2018',
    label: 'STORE OPERATIONS MANAGER•',
    location: 'BANAPPLE',
    desc: 'Supervised store operations not limited to sales, marketing, quality control, sanitation, stocks purchasing and inventory management, cash handling, people management, reports and documentation. Increased sales by 12% with strategies implemented along with the marketing department.'
  },
  {
    dateRange: '2017',
    label: 'FOOD AND BEVERAGE OFFICER',
    location: 'UNITED LABORATORIES, INC.',
    desc: 'Fulfilled room service and catering requests with 250 pax per day for the leading pharmaceutical company in the Philippines. Assisted in menu development, and monitored foodservice operations from production to service.'
  },
  {
    dateRange: '2014',
    label: 'ACCOUNT MANAGER',
    location: 'CONCENTRIX (FORMERLY CONVERGYS)',
    desc: 'Processed correspondence through email and outbound calls. Handled customer inquiries and complaints not limited to billing, general inquiry and retention of clients. Awarded as cluster’s top performer with consistent quality output, perfect attendance, and exemplary KPIs.'
  }
]

export const SKILL_PAIRS = {
  articleContent: 'Article writing',
  contentCreation: 'Content creation',
  seo: 'SEO optimization',
  customer: 'Customer service',
  operations: 'Operations management',
  admin: 'Administrative tasks'
}

export const SKILLS_LIST = [
  {
    key: 'operations',
    icon: faUsers,
    label: SKILL_PAIRS.operations,
    desc: 'Create effective and efficient operational procedures for your business and team with systems development. Let’s plan better ways to provide products and services to your customers without compromising your quality and budget. '
  },
  {
    key: 'admin',
    icon: faClipboard,
    label: SKILL_PAIRS.admin,
    desc: 'Maximize your time and productivity by allowing me to do administrative tasks from order taking, inventory management, to reports and documentation. '
  },
  {
    key: 'articleContent',
    icon: faPen,
    label: SKILL_PAIRS.articleContent,
    desc: 'Build customer loyalty while increasing website traffic with quality article contents. Let’s create informative and relevant content for your business to convert leads and maintain a solid online presence.'
  },
  {
    key: 'contentCreation',
    icon: faMagic,
    label: SKILL_PAIRS.contentCreation,
    desc: 'Grow your brand’s presence with quality content that gets the attention of your clients. Let’s turn your information into a simple, easy to understand and valuable content to connect with your target audience. '
  },
  {
    key: 'seo',
    icon: faCogs,
    label: SKILL_PAIRS.seo,
    desc: 'Increase leads, conversion rate, and website traffic with combined efforts of SEO optimization strategies. From website analysis to planning and execution, we can push your website up the list into the top spot.'
  },
  {
    disable: true,
    key: 'customer',
    icon: faComments,
    label: SKILL_PAIRS.customer,
    desc: 'Provide exemplary customer service to build a good relationship with your customers. Let’s create a lasting impression with the customers by giving relevant and helpful product or services information, resolving their issues, and handling complaints as quickly as possible.'
  }
]

export const SKILL_CARDS = [
  {
    image: '/assets/images/soc-med-1.webp',
    label: 'Social media content - Ecommerce',
    key: 'contentCreation'
  },
  {
    image: '/assets/images/soc-med-2.webp',
    label: 'Social media content - Ecommerce 3',
    key: 'contentCreation'
  },
  {
    image: '/assets/images/soc-med-3.webp',
    label: 'Social media content - Ecommerce 2',
    key: 'contentCreation'
  },
  {
    image: '/assets/images/soc-med-4.webp',
    label: 'Infographic 2',
    key: 'contentCreation'
  },
  {
    image: '/assets/images/soc-med-5.webp',
    label: 'Online Ordering process',
    key: 'operations'
  },
  {
    image: '/assets/images/soc-med-6.webp',
    label: 'Infographic 1',
    key: 'contentCreation'
  },
  {
    image: '/assets/images/admin-task-1.webp',
    label: 'Booking Events',
    key: 'admin'
  },
  {
    image: '/assets/images/admin-task-2.webp',
    label: 'Email Marketing',
    key: 'admin'
  },
  {
    image: '/assets/images/seo-task-1.webp',
    label: 'Off-page optimization',
    key: 'seo'
  },
  {
    image: '/assets/images/seo-task-2.webp',
    label: 'SEO Website analysis and planning',
    key: 'seo'
  },
  {
    image: '/assets/images/seo-task-3.webp',
    label: 'Keyword research 2',
    key: 'seo'
  },
  {
    image: '/assets/images/seo-task-4.webp',
    label: 'Business Branding',
    key: 'seo'
  },
  {
    image: '/assets/images/seo-task-5.webp',
    label: 'Keyword research',
    key: 'seo'
  },
  {
    image: '/assets/images/seo-task-6.webp',
    label: 'Business registration and listing',
    key: 'seo'
  },
  {
    image: '/assets/images/seo-task-7.webp',
    label: 'Google analytics',
    key: 'seo'
  },
  {
    image: '/assets/images/seo-task-8.webp',
    label: 'On-page optimization',
    key: 'seo'
  },
  {
    image: '/assets/images/seo.webp',
    label: 'SEO writing optimization',
    key: 'seo'
  },
  {
    image: '/assets/images/opera-1.webp',
    label: 'Return Processing',
    key: 'operations'
  },
  {
    image: '/assets/images/opera-2.webp',
    label: 'Operations metrics',
    key: 'operations'
  },
  {
    image: '/assets/images/opera-3.webp',
    label: 'Product description 2',
    key: 'operations'
  },
  {
    image: '/assets/images/opera-4.webp',
    label: 'Product description 1',
    key: 'operations'
  },
  {
    image: '/assets/images/article-5.webp',
    label: 'Article 5',
    key: 'articleContent'
  },
  {
    image: '/assets/images/article-4.webp',
    label: 'Article 4',
    key: 'articleContent'
  },
  {
    image: '/assets/images/article-3.webp',
    label: 'Article 3',
    key: 'articleContent'
  },
  {
    image: '/assets/images/article-2.webp',
    label: 'Article 2',
    key: 'articleContent'
  },
  {
    image: '/assets/images/article-1.webp',
    label: 'Article 5',
    key: 'articleContent'
  },
  {
    image: '/assets/images/article-6.webp',
    label: 'Announcement',
    key: 'articleContent'
  }
]
