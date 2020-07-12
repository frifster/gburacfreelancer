import { faMagic, faUser, faSuitcase, faClipboard, faBug, faUsers } from '@fortawesome/free-solid-svg-icons'

export const PERSONAL_INFO = {
  quote: '"Without continual growth and progress, such words as improvement, achievement, \nand success have no meaning.” — B.Franklin',
  userHeader: 'GHIA BURAC, RND',
  firstName: 'Ghia',
  lastName: 'Burac',
  country: 'PH',
  birthDate: 'April 04',
  job: 'Content Creator | SEO Specialist | Operations Manager',
  nationality: 'Filipino',
  availability: 'Available',
  email: 'ghiburac2020@gmail.com',
  school: 'University of the Philippines - Los Baños',
  contactNumber: '+63 936 043 2765',
  address: 'Manila, Philippines',
  userPic: '/assets/images/user_pic.jpg',
  aboutMe: 'I am currently building my digital career as I expand my client base in different countries at the comfort of my own home. I love that my work experience revolved around the core of every business - operations, digital and content marketing, and people management.',
  fbLink: 'https://www.facebook.com/ghia.burac',
  linkedIn: 'https://www.linkedin.com/in/ghia-b-779a7a1a4/',
  twitter: 'https://twitter.com/Ghi79067455'
}

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
    dateRange: '2020',
    label: 'SEO SPECIALIST',
    location: 'UPWORK',
    desc: 'Created original SEO-optimized web content e.g. articles, Wikipedia entries. Constructed written materials for business operation e.g. app tutorial, manual, announcement.'
  },
  {
    dateRange: '2020',
    label: 'CONTENT CREATOR',
    location: 'UPWORK',
    desc: 'Composed SEO-optimized articles based on client’s topic, preferred tone, and word count. On-time content submission and with 4.5/5 rating.'
  },
  {
    dateRange: '2020',
    label: 'EMAIL MANAGEMENT',
    location: 'UPWORK',
    desc: 'Created original SEO-optimized web content e.g. articles, Wikipedia entries. Constructed written materials for business operation e.g. app tutorial, manual, announcement.'
  },
  {
    dateRange: '2019',
    label: 'OPERATIONS MANAGER',
    location: 'MEDGROCER',
    desc: 'Led pharmaceutical operations focusing on systems development and operations efficiency. Supervised end-to-end of operations including quality control, people management, reports and documentation.'
  },
  {
    dateRange: '2018',
    label: 'STORE OPERATIONS MANAGER•',
    location: 'BANAPPLE',
    desc: 'Managed store operations not limited to sales, marketing, quality control, sanitation, stocks purchasing and inventory management, cash handling, people management, reports and documentation.'
  },
  {
    dateRange: '2017',
    label: 'FOOD AND BEVERAGE OFFICER',
    location: 'UNITED LABORATORIES, INC.',
    desc: 'Fulfilled room service and catering requests with 250 pax per day. Assisted in menu development, and monitored food service operations from production to service.'
  },
  {
    dateRange: '2014',
    label: 'ACCOUNT MANAGER',
    location: 'CONCENTRIX (FORMERLY CONVERGYS)',
    desc: 'Processed correspondence through email and outbound calls. Handled customer inquiries and complaints not limited to billing, general inquiry and retention of clients.'
  }
]

export const SKILLS_LIST = [
  {
    key: 'articleContent',
    icon: faMagic,
    label: 'Article Content',
    desc: 'Lorem ipsum dolor sit amet, consect adipisic elit, sed do eiusmod tempor incididunt ut labore et d magna aliqua Ut enim ad sed do sit...'
  },
  {
    key: 'graphicContent',
    icon: faUsers,
    label: 'Graphic Content',
    desc: 'Lorem ipsum dolor sit amet, consect adipisic elit, sed do eiusmod tempor incididunt ut labore et d magna aliqua Ut enim ad sed do sit...'
  },
  {
    key: 'seo',
    icon: faSuitcase,
    label: 'SEO Optimization',
    desc: 'Lorem ipsum dolor sit amet, consect adipisic elit, sed do eiusmod tempor incididunt ut labore et d magna aliqua Ut enim ad sed do sit...'
  },
  {
    key: 'customer',
    icon: faClipboard,
    label: 'Customer Service',
    desc: 'Lorem ipsum dolor sit amet, consect adipisic elit, sed do eiusmod tempor incididunt ut labore et d magna aliqua Ut enim ad sed do sit...'
  },
  {
    key: 'ecommerce',
    icon: faBug,
    label: 'E-commerce Operations',
    desc: 'Lorem ipsum dolor sit amet, consect adipisic elit, sed do eiusmod tempor incididunt ut labore et d magna aliqua Ut enim ad sed do sit...'
  },
  {
    key: 'email',
    icon: faUser,
    label: 'Email Management',
    desc: 'Lorem ipsum dolor sit amet, consect adipisic elit, sed do eiusmod tempor incididunt ut labore et d magna aliqua Ut enim ad sed do sit...'
  }
]

export const SKILL_CARDS = [
  {
    image: '',
    label: 'Email Manage 01',
    key: 'email'
  },
  {
    image: '',
    label: 'Email Manage 02',
    key: 'email'
  },
  {
    image: '',
    label: 'Article Content 01',
    key: 'articleContent'
  },
  {
    image: '',
    label: 'SEO 01',
    key: 'seo'
  },
  {
    image: '',
    label: 'Ecommerce 01',
    key: 'ecommerce'
  },
  {
    image: '',
    label: 'Ecommerce 02',
    key: 'ecommerce'
  }
]
