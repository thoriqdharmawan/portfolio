export const testimonialCarousel = {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: false,
  speed: 1000,
  centeredSlides: false,
  autoHeight: true,
  autoplay: {
    waitForTransition: false,
    delay: 4000,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
};

export const TESTIMONIALS_DATA = [
  [
    {
      image: 'https://media.licdn.com/dms/image/C5103AQGJt2JaLFoqvw/profile-displayphoto-shrink_100_100/0/1581474432542?e=1692230400&v=beta&t=UrF5muoSuYYaiOWB0dG4QL3TJt8YsogMHpgc7vOu8Qk',
      text: "I highly recommend Thoriq Dharmawan for the Front End Developer position. I have been working with Thoriq Dharmawan for a long time on several projects and the presence of Thoriq greatly helped me. And Thoriq is very fast in developing a feature or module and no doubt in his expertise in Front End.",
      name: "Khaerul Umam",
    },
  ],
  [
    {
      image: 'https://media.licdn.com/dms/image/C5603AQEJ8SOcSfVt-w/profile-displayphoto-shrink_100_100/0/1612131539456?e=1692230400&v=beta&t=X0XXUvjm-1FF38XX-utf3NOEzD870zGR4W8aqgNaswc',
      text: "Thoriq Darmawan is a great co-worker as a frontend web developer, very knowledgeable about new technologies and works effectively and efficiently, and is very enthusiastic at work, Thoriq Darmawan will be the person I would recommend.",
      name: "Mohamad Azka Julda Suparman",
    },
    {
      image: "https://media.licdn.com/dms/image/C4E03AQFNRu29njAkDg/profile-displayphoto-shrink_100_100/0/1628062716923?e=1692230400&v=beta&t=VWmb3D8z40wPs-_1WEZlyYszWv3jQqNUVXl4MBDx7IM",
      text: "Great coworker, very awesome to work with as fellow developers!",
      name: "Prana Adiwira",
    },
  ],
  [
    {
      image: "https://media.licdn.com/dms/image/D5603AQFovwjF-_GOGw/profile-displayphoto-shrink_100_100/0/1681441876518?e=1692230400&v=beta&t=cxiofbTUyPsshhWGYEqXgiPoCIWElYzJYYQaI6VazKU",
      text: "Been a while working in the same team with Thoriq as a Frontend Developer. I would be happy to recommend him as he is always delivers as fast as he can while maintaining a clean and good code, also a comfortable person to work as a team with. As a Frontend developer, Thoriq Darmawan is a fast learner, always open to explore a new thing, especially in a Frontend coding trends.",
      name: "Muhammad Fauzani Shah Allam",
    },
  ],
  [
    {
      image: "https://media.licdn.com/dms/image/D4E03AQHz1NWCgiP9Og/profile-displayphoto-shrink_100_100/0/1663950818643?e=1692230400&v=beta&t=xISUGkZNRvuR7StWU3k86xBONFLI7OBdzNgAa5XzvPU",
      text: "programmer",
      name: "Neng Yessi Novamonika Eksiroka",
    },
    {
      image: "https://media.licdn.com/dms/image/D5603AQGA0UTMDwVmeA/profile-displayphoto-shrink_100_100/0/1679650720664?e=1692230400&v=beta&t=YdtAolJjkZB5K7AcmVluDEqhWIWYL1CG9JeQkKOt7j0",
      text: "Thoriq is a detail-oriented developer with a strong ability to collaborate effectively with other team members, including designers and developers. Their technical expertise, problem-solving abilities, and commitment to delivering high-quality work make them an outstanding candidate for any project.",
      name: "Israr Fahmi Lazuardi",
    },
  ],
  [
    {
      image: "https://media.licdn.com/dms/image/D5603AQHR_yKKExUGIA/profile-displayphoto-shrink_100_100/0/1683220122079?e=1692230400&v=beta&t=9RPtbE8NXrDHyCLHZrJxayj66T1kDeajpDa0GHtRiSI",
      text: "Thoriq always give his best performance in every challenge & explore the best way possible to solve it in efficient ways. Thoriq is a great co-worker as a frontend web developer, very knowledgeable about new technologies and works effectively and efficiently, and is very enthusiastic at work, Thoriq will be the person I would recommend.",
      name: "Eva Aisah HW",
    },
  ],
];

export const LIBRARIES = [
  {
    title: "element-helpers",
    description: "Lorem Ipsum is standard dummy text ever since the 150",
    url: "https://www.npmjs.com/package/element-helpers",
  },
  {
    title: "jquery-lite-thq",
    description: "Lorem Ipsum is standard dummy text ever since the 150",
    url: "https://www.npmjs.com/package/jquery-lite-thq",
  },
  {
    title: "react-filter-component",
    description: "Lorem Ipsum is standard dummy text ever since the 150",
    url: "https://www.npmjs.com/package/react-filter-component",
  },
];

export const PROJECTS = [
  {
    createdAt: '2023-12-28',
    thumbnails: [
      '/projects/tn_project_nusa1.svg',
      '/projects/tn_project_nusa2.svg',
      '/projects/tn_project_nusa3.svg',
    ],
    slug: 'international-freight-forwarding-application',
    name: "International Freight Forwarding Application",
    description: "Nusa International Logistics is a web-based company profile page that specializes in import forwarding in Indonesia on an All-In and Door-to-Door basis. There are home, about, order tracking features that are integrated with admin, service, news, and contact us pages",
    role: 'Frontend Developer',
    url: 'https://nusalogistics.com/',
    responsibility: [
      'Discuss with the team regarding the business process and design that will be realized',
      'Implement the discussion results into a user-friendly web application',
      'Ensure the application runs smoothly and well',
      'ensure getting good SEO',
    ],
    technologies: [
      {
        src: '/skills/ic_skill_react.svg',
        name: 'React'
      },
      {
        src: '/skills/ic_skill_js.svg',
        name: 'Javascript'
      },
      {
        src: '/skills/ic_skill_next.svg',
        name: 'NextJs'
      },
      {
        src: '/skills/ic_skill_headless-ui.svg',
        name: 'Headless UI'
      },
      {
        src: '/skills/ic_skill_tailwind.svg',
        name: 'Tailwind'
      },
      {
        src: '/skills/ic_skill_restapi.svg',
        name: 'RestAPI'
      },
    ]
  },
  {
    thumbnails: [
      '/projects/tn_project_bioskop.svg',
      '/projects/tn_project_bioskop2.svg'
    ],
    slug: 'cinema-application',
    name: "Cinema application",
    description: "Lorem Ipsum is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type s",
    role: 'UI/UX Designer',
    technologies: [
      {
        src: '/skills/ic_skill_figma.svg',
        name: 'Figma'
      },
      {
        src: '/skills/ic_skill_photoshop.svg',
        name: 'Photoshop'
      },
    ]
  },
  {
    thumbnails: [
      '/projects/tn_project_note.svg',
    ],
    src: '/projects/tn_project_note.svg',
    slug: 'online-notes-application',
    name: "Online Notes Application",
    description: "Lorem Ipsum is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type s",
    role: 'Frontend Developer',
    technologies: [
      {
        src: '/skills/ic_skill_react.svg',
        name: 'React'
      },
      {
        src: '/skills/ic_skill_firebase.svg',
        name: 'Firebase'
      },
      {
        src: '/skills/ic_skill_react-router.svg',
        name: 'React Router'
      },
      {
        src: '/skills/ic_skill_redux.svg',
        name: 'Redux'
      },
    ]
  },
  {
    thumbnails: [
      '/projects/tn_project_manajemen.svg',
    ],
    slug: 'data-management-application',
    name: "Data Management Application",
    description: "Lorem Ipsum is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type s",
    role: 'Frontend Developer',
    technologies: [
      {
        src: '/skills/ic_skill_react.svg',
        name: 'React'
      },
      {
        src: '/skills/ic_skill_firebase.svg',
        name: 'Firebase'
      },
      {
        src: '/skills/ic_skill_react-router.svg',
        name: 'React Router'
      },
      {
        src: '/skills/ic_skill_redux.svg',
        name: 'Redux'
      },
    ]
  },
  {
    thumbnails: [
      '/projects/tn_project_fluffy-admin1.svg',
      '/projects/tn_project_fluffy-admin2.svg',
      '/projects/tn_project_fluffy-admin3.svg',
      '/projects/tn_project_fluffy-admin4.svg',
    ],
    slug: 'point-of-sales-application-application',
    name: "Point of Sales Application Side",
    description: "Lorem Ipsum is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type s",
    role: 'Frontend Developer',
    technologies: [
      {
        src: '/skills/ic_skill_react.svg',
        name: 'React'
      },
      {
        src: '/skills/ic_skill_ts.svg',
        name: 'Typescript'
      },
      {
        src: '/skills/ic_skill_mantine.svg',
        name: 'Mantine'
      },
      {
        src: '/skills/ic_skill_hasura.svg',
        name: 'Hasura'
      },
      {
        src: '/skills/ic_skill_firebase.svg',
        name: 'Firebase'
      },
    ]
  },
  {
    thumbnails: [
      '/projects/tn_project_mugupas1.svg',
      '/projects/tn_project_mugupas2.svg',
    ],
    slug: 'museum-application',
    name: "Museum Application",
    description: "Lorem Ipsum is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type s",
    role: 'Frontend Developer',
    url: 'https://www.mugupas.my.id/',
    technologies: [
      {
        src: '/skills/ic_skill_react.svg',
        name: 'React'
      },
      {
        src: '/skills/ic_skill_next.svg',
        name: 'NextJS'
      },
    ]
  },
]

export const NAVIGATIONS = [
  {
    label: 'Home',
  },
  {
    label: 'Skills',
  },
  {
    label: 'Projects',
  },
]

export const SKILLS = [
  {
    name: "ReactJs",
    src: "/skills/ic_skill_react.svg",
    bgColor: '#1793b5'
  },
  {
    name: "Javscript",
    src: "/skills/ic_skill_js.svg",
    bgColor: '#B7A61D'
  },
  {
    name: "Typescript",
    src: "/skills/ic_skill_ts.svg",
    bgColor: '#1c5ca2'
  },
  {
    name: "NextJs",
    src: "/skills/ic_skill_next.svg",
    bgColor: '#23231f'
  },
  {
    name: "Redux",
    src: "/skills/ic_skill_redux.svg",
    bgColor: '#54259c'
  },
  {
    name: "Vite",
    src: "/skills/ic_skill_vite.svg",
    bgColor: '#dfb115'
  },
  {
    name: "MaterialUI",
    src: "/skills/ic_skill_mui.svg",
    bgColor: '#0a67c5'
  },
  {
    name: "AntDesign",
    src: "/skills/ic_skill_antd.svg",
    bgColor: '#0553C8'
  },
  {
    name: "Tailwind",
    src: "/skills/ic_skill_tailwind.svg",
    bgColor: '#189eb5'
  },
  {
    name: "Styled Component",
    src: "/skills/ic_skill_styledcomponent.svg",
    bgColor: '#FED85D'
  },
  {
    name: "React Router",
    src: "/skills/ic_skill_react-router.svg",
    bgColor: '#09A1BC'
  },
  {
    name: "Hasura",
    src: "/skills/ic_skill_hasura.svg",
    bgColor: '#09A1BC'
  },
  {
    name: "Graphql",
    src: "/skills/ic_skill_graphql.svg",
    bgColor: '#09A1BC'
  },
  {
    name: "Formik",
    src: "/skills/ic_skill_formik.svg",
    bgColor: '#09A1BC'
  },
  {
    name: "React Hook Form",
    src: "/skills/ic_skill_react-hook-form.svg",
    bgColor: '#09A1BC'
  },
  {
    name: "Express.js",
    src: "/skills/ic_skill_express.svg",
    bgColor: '#09A1BC'
  },
  {
    name: "Figma",
    src: "/skills/ic_skill_figma.svg",
    bgColor: '#09A1BC'
  },
  {
    name: "SQL",
    src: "/skills/ic_skill_sql.svg",
    bgColor: '#09A1BC'
  },
];
