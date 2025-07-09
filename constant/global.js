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
      // image: 'https://media.licdn.com/dms/image/C5103AQGJt2JaLFoqvw/profile-displayphoto-shrink_100_100/0/1581474432542?e=1692230400&v=beta&t=UrF5muoSuYYaiOWB0dG4QL3TJt8YsogMHpgc7vOu8Qk',
      text: "I highly recommend Thoriq Dharmawan for the Front End Developer position. I have been working with Thoriq Dharmawan for a long time on several projects and the presence of Thoriq greatly helped me. And Thoriq is very fast in developing a feature or module and no doubt in his expertise in Front End.",
      name: "Khaerul Umam",
    },
  ],
  [
    {
      // image: 'https://media.licdn.com/dms/image/C5603AQEJ8SOcSfVt-w/profile-displayphoto-shrink_100_100/0/1612131539456?e=1692230400&v=beta&t=X0XXUvjm-1FF38XX-utf3NOEzD870zGR4W8aqgNaswc',
      text: "Thoriq Darmawan is a great co-worker as a frontend web developer, very knowledgeable about new technologies and works effectively and efficiently, and is very enthusiastic at work, Thoriq Darmawan will be the person I would recommend.",
      name: "Mohamad Azka Julda Suparman",
    },
    {
      // image: "https://media.licdn.com/dms/image/C4E03AQFNRu29njAkDg/profile-displayphoto-shrink_100_100/0/1628062716923?e=1692230400&v=beta&t=VWmb3D8z40wPs-_1WEZlyYszWv3jQqNUVXl4MBDx7IM",
      text: "Great coworker, very awesome to work with as fellow developers!",
      name: "Prana Adiwira",
    },
  ],
  [
    {
      // image: "https://media.licdn.com/dms/image/D5603AQFovwjF-_GOGw/profile-displayphoto-shrink_100_100/0/1681441876518?e=1692230400&v=beta&t=cxiofbTUyPsshhWGYEqXgiPoCIWElYzJYYQaI6VazKU",
      text: "Been a while working in the same team with Thoriq as a Frontend Developer. I would be happy to recommend him as he is always delivers as fast as he can while maintaining a clean and good code, also a comfortable person to work as a team with. As a Frontend developer, Thoriq Darmawan is a fast learner, always open to explore a new thing, especially in a Frontend coding trends.",
      name: "Muhammad Fauzani Shah Allam",
    },
  ],
  [
    {
      // image: "https://media.licdn.com/dms/image/D4E03AQHz1NWCgiP9Og/profile-displayphoto-shrink_100_100/0/1663950818643?e=1692230400&v=beta&t=xISUGkZNRvuR7StWU3k86xBONFLI7OBdzNgAa5XzvPU",
      text: "programmer",
      name: "Neng Yessi Novamonika Eksiroka",
    },
    {
      // image: "https://media.licdn.com/dms/image/D5603AQGA0UTMDwVmeA/profile-displayphoto-shrink_100_100/0/1679650720664?e=1692230400&v=beta&t=YdtAolJjkZB5K7AcmVluDEqhWIWYL1CG9JeQkKOt7j0",
      text: "Thoriq is a detail-oriented developer with a strong ability to collaborate effectively with other team members, including designers and developers. Their technical expertise, problem-solving abilities, and commitment to delivering high-quality work make them an outstanding candidate for any project.",
      name: "Israr Fahmi Lazuardi",
    },
  ],
  [
    {
      // image: "https://media.licdn.com/dms/image/D5603AQHR_yKKExUGIA/profile-displayphoto-shrink_100_100/0/1683220122079?e=1692230400&v=beta&t=9RPtbE8NXrDHyCLHZrJxayj66T1kDeajpDa0GHtRiSI",
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
    createdAt: "2025-06-01",
    thumbnails: [
      "/projects/tn_project_expese-tracker.svg",
      "/projects/tn_project_expese-tracker2.svg",
    ],
    slug: "expese-tracker",
    name: "Expense Tracker (React Native)",
    description:
      "Expense Tracker is a mobile application built with React Native that helps users manage their finances by tracking income and expenses. It allows users to categorize transactions, set budgets, and visualize spending patterns through charts and graphs. The app supports multiple currencies and provides features for recurring expenses, reminders, and financial reports. Users can also export their data for further analysis or sharing.",
    role: "Mobile Developer",
    technologies: [
      {
        src: "/skills/ic_skill_react.svg",
        name: "React Native",
      },
      {
        src: "/skills/ic_skill_ts.svg",
        name: "Typescript",
      },
      {
        src: "/skills/ic_skill_rn-reanimated.svg",
        name: "React Native Reanimated",
      },
      {
        src: "/skills/ic_skill_rn-gesture-handler.svg",
        name: "React Native Gesture Handler",
      },
      {
        src: "/skills/ic_sklill_supabase.svg",
        name: "Supabase",
      },
      {
        src: "/skills/ic_skill_n8n.svg",
        name: "n8n",
      },
    ],
  },
  {
    createdAt: "2025-05-01",
    thumbnails: [
      "https://raw.githubusercontent.com/thoriqdharmawan/meme-generator/refs/heads/main/src/assets/screenshot/android.png",
    ],
    slug: "meme-generator-rn",
    name: "Meme Generator (React Native)",
    description:
      "Meme Generator is a mobile app built with React Native, Reanimated, and Gesture Handler. It allows users to create and share memes easily on their phones. Users can upload images, add text, and customize memes with gestures (drag, pinch, rotate). The app supports various image formats and provides tools for resizing, cropping, and applying filters. Users can browse and share memes, fostering a mobile meme community.",
    role: "React Native Developer",
    technologies: [
      {
        src: "/skills/ic_skill_react.svg",
        name: "React Native",
      },
      {
        src: "/skills/ic_skill_ts.svg",
        name: "Typescript",
      },
      {
        src: "/skills/ic_skill_rn-reanimated.svg",
        name: "React Native Reanimated",
      },
      {
        src: "/skills/ic_skill_rn-gesture-handler.svg",
        name: "React Native Gesture Handler",
      },
    ],
    url: "https://github.com/thoriqdharmawan/meme-generator-rn/",
  },
  {
    createdAt: "2024-05-01",
    thumbnails: [
      "/projects/tn_project_changle1.svg",
      "/projects/tn_project_changle2.svg",
    ],
    slug: "changle-online-travel-agent",
    name: "Changle - Online Travel Agent",
    description:
      "As a frontend developer, I contributed to the development of an Online Travel Agent (OTA) platform that enables users to seamlessly book flights, hotels, and other travel services. I focused on creating a user-friendly, responsive interface using React, TypeScript, and Next.js, while also working closely with backend teams to integrate APIs for real-time booking, payment processing, and inventory management, ensuring a smooth and efficient end-to-end experience for users across devices.",
    role: "Frontend Developer",
    responsibility: [
      "Collaborate with backend developers to integrate APIs for real-time booking and payment processing",
      "Optimize application performance to ensure fast loading times and smooth user interactions",
      "Implement a user-friendly, responsive interface for flight and hotel bookings",
    ],
    technologies: [
      {
        src: "/skills/ic_skill_next.svg",
        name: "Next.js",
      },
      {
        src: "/skills/ic_skill_ts.svg",
        name: "Typescript",
      },
      {
        src: "/skills/ic_skill_tailwind.svg",
        name: "Tailwind",
      },
      {
        src: "/skills/ic_skill_react-hook-form.svg",
        name: "React Hook Form",
      },
      {
        src: "/skills/ic_skill_redux.svg",
        name: "Redux",
      },
    ],
  },
  {
    createdAt: "2024-02-19",
    thumbnails: [
      "/projects/tn_project_edot3.svg",
      "/projects/tn_project_edot2.svg",
      "/projects/tn_project_edot1.svg",
    ],
    slug: "edot-business-erp-e-commerce-dan-logistik-untuk-semua-industri",
    name: "eDOT: ERP, E-Commerce and Logistics",
    description:
      "As a Frontend Developer at eDOT, I contributed to the development of a comprehensive web platform offering integrated ERP, e-commerce, and logistics solutions for various industries. Using modern frameworks and best practices, I implemented features for real-time inventory tracking, order management, and business operations optimization. My role also involves collaborating with the backend team to integrate cloud-based solutions and provide 24/7 support capabilities, enhancing overall business efficiency and growth.",
    role: "Frontend Developer",
    url: "https://edot.id/",
    responsibility: [
      "Designed and implemented responsive and intuitive UI components for the ERP, e-commerce, and logistics platform.",
      "Worked closely with backend developers to integrate APIs and ensure seamless data flow and functionality",
      "Enhanced website performance and loading times through code optimization and efficient use of resources",
      "Conducted thorough testing and debugging to ensure cross-browser compatibility and fix any issues",
      "Stayed updated with the latest frontend technologies and best practices to continually improve the user experience",
    ],
    technologies: [
      {
        src: "/skills/ic_skill_next.svg",
        name: "Next.js",
      },
      {
        src: "/skills/ic_skill_ts.svg",
        name: "Typescript",
      },
      {
        src: "/skills/ic_skill_shadcn.svg",
        name: "Shadcn UI",
      },
      {
        src: "/skills/ic_skill_tailwind.svg",
        name: "Tailwind",
      },
      {
        src: "/skills/ic_skill_react-hook-form.svg",
        name: "React Hook Form",
      },
    ],
  },
  {
    createdAt: "2023-06-01",
    thumbnails: [
      "/projects/tn_project_mofi1.svg",
      "/projects/tn_project_mofi3.svg",
      "/projects/tn_project_mofi2.svg",
    ],
    slug: "moladin-moladin-finance-indonesia",
    name: "Moladin: Moladin Finance Indonesia",
    description:
      "This project aims to develop the frontend of the MOFI.ID website, a platform providing financial and investment-related information and services to the public. Focusing on frontend development, the project will revamp the website's appearance and user experience to enhance user engagement, intuitive navigation, and responsiveness across various devices. The project involves thorough analysis of the existing website, UI/UX design, frontend development, performance optimization, content integration, testing, debugging, and eventual launch and maintenance. The ultimate goal is to improve user experience, facilitate easier access to financial information, and establish the website as a reliable resource for the community.",
    role: "Frontend Developer",
    url: "https://mofi.id/",
    responsibility: [
      "Dynamically register microfrontends using Single SPA, allowing for the modular addition and removal of features.",
      "Design an RBAC model that fits the organizational structure and security policies",
      "Utilizes lazy loading for optimized component loading and improved application performance.",
      "Leverage TypeScript for enhanced code maintainability and type safety.",
      "Implement Next.js for optimized server-side rendering and enhanced web page performance.",
      "Optimize the website for search engines using Next SEO and Next Sitemap.",
      "Ensure a responsive design for seamless user experiences across devices.",
      "Conduct code reviews to maintain code quality and share knowledge among the team.",
      "Write unit tests using Jest for components, actions, and reducers",
      "Document any configuration settings, build processes, or important decisions.",
    ],
    technologies: [
      {
        src: "/skills/ic_skill_next.svg",
        name: "Next.js",
      },
      {
        src: "/skills/ic_skill_ts.svg",
        name: "Typescript",
      },
      {
        src: "/skills/ic_skill_redux.svg",
        name: "Redux",
      },
      {
        src: "/skills/ic_skill_bootstrap.svg",
        name: "Bootstrap",
      },
      {
        src: "/skills/ic_skill_jest.svg",
        name: "Jest",
      },
      {
        src: "/skills/ic_skill_react-testing-library.svg",
        name: "React Testing Library",
      },
    ],
  },
  {
    createdAt: "2023-12-28",
    thumbnails: [
      "/projects/tn_project_nusa1.svg",
      "/projects/tn_project_nusa2.svg",
      "/projects/tn_project_nusa3.svg",
    ],
    slug: "international-freight-forwarding",
    name: "International Freight Forwarding",
    description:
      "Nusa International Logistics is a web-based company profile page that specializes in import forwarding in Indonesia on an All-In and Door-to-Door basis. There are home, about, order tracking features that are integrated with admin, service, news, and contact us pages",
    role: "Frontend Developer",
    // url: "https://nusalogistics.com/",
    responsibility: [
      "Discuss with the team regarding the business process and design that will be realized",
      "Implement the discussion results into a user-friendly web application",
      "Ensure the application runs smoothly and well",
      "ensure getting good SEO",
    ],
    technologies: [
      {
        src: "/skills/ic_skill_next.svg",
        name: "Next.js",
      },
      {
        src: "/skills/ic_skill_js.svg",
        name: "Javascript",
      },
      {
        src: "/skills/ic_skill_headless-ui.svg",
        name: "Headless UI",
      },
      {
        src: "/skills/ic_skill_tailwind.svg",
        name: "Tailwind",
      },
      {
        src: "/skills/ic_skill_restapi.svg",
        name: "RestAPI",
      },
    ],
  },
  {
    createdAt: "2020-12-28",
    thumbnails: [
      "/projects/tn_project_sasn2.svg",
      "/projects/tn_project_sasn1.svg",
    ],
    slug: "smart-asn",
    name: "PANRB: SmartASN - Kolaborasi ASN Indonesia",
    description:
      "SmartASN is a digital platform designed for the collaboration and management of Indonesian Civil Servants (ASN). It offers various features to facilitate learning activities, mentoring, performance planning, collaboration, feedback, and talent and career development for ASNs. Developed by the Ministry of Administrative and Bureaucratic Reform, SmartASN aims to enhance the effectiveness and efficiency of services and professional development of ASNs through an integrated digital approach.",
    role: "Frontend Developer",
    url: "https://smartasn.go.id/",
    responsibility: [
      "Write clean, scalable, and maintainable code using React, MaterialUI, Tailwindcss",
      "Work closely with backend developers, designers, and product managers to deliver cohesive and efficient solutions",
      "Conduct thorough testing of the frontend components to ensure functionality and responsiveness",
      "Gather and analyze user feedback to inform ongoing improvements and new features",
      "Maintain comprehensive documentation for frontend code, ensuring ease of understanding and future development",
      "Translate design wireframes into high-quality, responsive user interfaces",
      "Ensure getting good SEO",
    ],
    technologies: [
      {
        src: "/skills/ic_skill_next.svg",
        name: "Next.js",
      },
      {
        src: "/skills/ic_skill_ts.svg",
        name: "TypeScript",
      },
      {
        src: "/skills/ic_skill_graphql.svg",
        name: "GraphQL",
      },
      {
        src: "/skills/ic_skill_mui.svg",
        name: "MaterialUI",
      },
      {
        src: "/skills/ic_skill_jest.svg",
        name: "Jest",
      },
      {
        src: "/skills/ic_skill_react-testing-library.svg",
        name: "React Testing Library",
      },
    ],
  },
  {
    createdAt: "2023-12-28",
    thumbnails: [
      "/projects/tn_project_mugupas2.svg",
      "/projects/tn_project_mugupas1.svg",
    ],
    slug: "museum-application",
    name: "Parangtritis Geomaritime: Museum Gumuk Pasir",
    description:
      "Explore the rich cultural heritage and natural wonders of the Gumuk Pasir region with Gumuk Pasir Museum's immersive web experience. Dive into a virtual journey through this unique museum, discovering captivating exhibits showcasing the history, geography, and folklore of the iconic sand dunes. With engaging multimedia content and interactive displays, the website offers a fascinating glimpse into the cultural significance and environmental importance of Gumuk Pasir. Whether you're a history enthusiast, nature lover, or curious explorer, this online museum promises an enlightening and enriching experience for visitors of all ages.",
    role: "Frontend Developer",
    urlLabel: "https://www.mugupas.my.id/",
    url: "https://museum-gumuk-pasir.vercel.app/",
    technologies: [
      {
        src: "/skills/ic_skill_react.svg",
        name: "React",
      },
      {
        src: "/skills/ic_skill_next.svg",
        name: "NextJS",
      },
      {
        src: "/skills/ic_skill_tailwind.svg",
        name: "Tailwindcss",
      },
    ],
  },
  {
    createdAt: "2023-12-28",
    thumbnails: [
      "/projects/tn_project_fluffy-admin1.svg",
      "/projects/tn_project_fluffy-admin2.svg",
    ],
    slug: "point-of-sales-application-application",
    name: "Fluffy: Point of Sales Application (POS)",
    description:
      "Fluffy Point of Sales (POS) presents both a web interface and a desktop application to streamline sales and inventory management. Built with Next.js, the web interface offers easy navigation and efficient transaction handling, while the desktop application, developed using Electron.js, provides a seamless, cross-platform experience. This comprehensive solution includes functionalities such as product management, employee tracking, sales analytics, and transaction history, making it ideal for modern retail operations.",
    role: "Fullstack Developer",
    url: "https://fluffy-mantine-next.vercel.app/",
    responsibility: [
      "Create business processes that are in line with application objectives",
      "Create an attractive and easy-to-understand design for users",
      "Create views of product lists, shopping carts, checkout processes, transaction history, and more",
      "Create product list views, add products, change products, sales dashboards, employee lists, and more",
      "Ensures the app is responsive on all screen sizes",
    ],
    technologies: [
      {
        src: "/skills/ic_skill_next.svg",
        name: "Next.js",
      },
      {
        src: "/skills/ic_skill_electron.svg",
        name: "ElectronJs",
      },
      {
        src: "/skills/ic_skill_ts.svg",
        name: "TypeScript",
      },
      {
        src: "/skills/ic_skill_mantine.svg",
        name: "Mantine",
      },
      {
        src: "/skills/ic_skill_hasura.svg",
        name: "Hasura",
      },
      {
        src: "/skills/ic_skill_graphql.svg",
        name: "GraphQL",
      },
      {
        src: "/skills/ic_skill_firebase.svg",
        name: "Firebase",
      },
    ],
  },
  {
    createdAt: "2023-12-28",
    thumbnails: [
      "/projects/tn_project_bioskop.svg",
      "/projects/tn_project_bioskop2.svg",
    ],
    slug: "cinema-film-booking-application",
    name: "Cinema Film Booking Application",
    description:
      "The UI/UX design for the cinema booking application focuses on creating an intuitive, seamless, and engaging user experience. The design process began with in-depth user research, including interviews and competitive analysis, to understand user needs and pain points. The interface features a visually appealing homepage with quick access to featured movies, popular categories, and a robust search function. Detailed movie pages offer comprehensive information, including trailers, reviews, and ratings, ensuring users can make informed decisions. The showtimes and seat selection screens are designed for clarity and ease of use, featuring an interactive seating chart and clear availability indicators. A streamlined checkout process supports multiple payment options and saves user preferences for quick transactions. Overall, the design emphasizes simplicity, speed, and accessibility, ensuring a pleasant and efficient booking experience.",
    role: "UI/UX Designer",
    technologies: [
      {
        src: "/skills/ic_skill_figma.svg",
        name: "Figma",
      },
      {
        src: "/skills/ic_skill_photoshop.svg",
        name: "Photoshop",
      },
    ],
  },
  // {
  //   createdAt: "2023-12-28",
  //   thumbnails: ["/projects/tn_project_note.svg"],
  //   src: "/projects/tn_project_note.svg",
  //   slug: "online-note-taking",
  //   name: "Online Note-taking",
  //   description:
  //     "The online note-taking application is designed to provide users with a seamless and efficient way to create, organize, and manage their notes. Featuring a clean and intuitive interface, the app allows users to easily jot down ideas, to-do lists, and important information. Key features include customizable note categories, tagging for easy searchability, real-time synchronization across devices, and secure cloud storage to ensure notes are always accessible and safe. Additional functionalities such as reminders, collaborative note sharing, and multimedia support enhance productivity and user engagement. This application aims to be the ultimate tool for anyone looking to streamline their note-taking process and stay organized in both personal and professional settings.",
  //   role: "Frontend Developer",
  //   technologies: [
  //     {
  //       src: "/skills/ic_skill_react.svg",
  //       name: "React",
  //     },
  //     {
  //       src: "/skills/ic_skill_firebase.svg",
  //       name: "Firebase",
  //     },
  //     {
  //       src: "/skills/ic_skill_react-router.svg",
  //       name: "React Router",
  //     },
  //     {
  //       src: "/skills/ic_skill_redux.svg",
  //       name: "Redux",
  //     },
  //     {
  //       src: "/skills/ic_skill_styledcomponent.svg",
  //       name: "Styled Component",
  //     },
  //   ],
  // },
  {
    createdAt: "2023-12-28",
    thumbnails: ["/projects/tn_project_manajemen.svg"],
    slug: "student-data-management",
    name: "Student Data Management",
    description:
      "The student data management application is designed to streamline the process of organizing and accessing student information for educational institutions. This robust application features a user-friendly interface that allows administrators, teachers, and students to efficiently manage academic records, enrollment details, and personal information. Key functionalities include real-time data updates, secure access controls, comprehensive reporting tools, and integration with existing school systems. With capabilities for tracking attendance, grades, and extracurricular activities, the app ensures that all relevant data is easily accessible and manageable. This application aims to enhance the efficiency and accuracy of student data management, ultimately improving the overall administrative experience for educational institutions.",
    role: "Frontend Developer",
    technologies: [
      {
        src: "/skills/ic_skill_react.svg",
        name: "React",
      },
      {
        src: "/skills/ic_skill_firebase.svg",
        name: "Firebase",
      },
      {
        src: "/skills/ic_skill_react-router.svg",
        name: "React Router",
      },
      {
        src: "/skills/ic_skill_redux.svg",
        name: "Redux",
      },
      {
        src: "/skills/ic_skill_bootstrap.svg",
        name: "Bootstrap",
      },
    ],
  },
];

export const NAVIGATIONS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Skills",
    href: "/skills",
  },
  {
    label: "Projects",
    href: "/projects",
  },
];

export const SKILLS = [
  {
    name: "Typescript",
    src: "/skills/ic_skill_ts.svg",
    bgColor: "#1c5ca2",
  },
  {
    name: "NextJs",
    src: "/skills/ic_skill_next.svg",
    bgColor: "#23231f",
  },
  {
    name: "Tailwind",
    src: "/skills/ic_skill_tailwind.svg",
    bgColor: "#189eb5",
  },
  {
    name: "ReactJs",
    src: "/skills/ic_skill_react.svg",
    bgColor: "#1793b5",
  },
  {
    name: "Redux",
    src: "/skills/ic_skill_redux.svg",
    bgColor: "#54259c",
  },
  {
    name: "Javscript",
    src: "/skills/ic_skill_js.svg",
    bgColor: "#B7A61D",
  },
  {
    name: "Vite",
    src: "/skills/ic_skill_vite.svg",
    bgColor: "#dfb115",
  },
  {
    name: "MaterialUI",
    src: "/skills/ic_skill_mui.svg",
    bgColor: "#0a67c5",
  },
  {
    name: "AntDesign",
    src: "/skills/ic_skill_antd.svg",
    bgColor: "#0553C8",
  },
  {
    name: "Tailwind",
    src: "/skills/ic_skill_tailwind.svg",
    bgColor: "#189eb5",
  },
  {
    name: "Styled Component",
    src: "/skills/ic_skill_styledcomponent.svg",
    bgColor: "#FED85D",
  },
  {
    name: "React Router",
    src: "/skills/ic_skill_react-router.svg",
    bgColor: "#09A1BC",
  },
  {
    name: "Hasura",
    src: "/skills/ic_skill_hasura.svg",
    bgColor: "#09A1BC",
  },
  {
    name: "Graphql",
    src: "/skills/ic_skill_graphql.svg",
    bgColor: "#09A1BC",
  },
  {
    name: "Formik",
    src: "/skills/ic_skill_formik.svg",
    bgColor: "#09A1BC",
  },
  {
    name: "React Hook Form",
    src: "/skills/ic_skill_react-hook-form.svg",
    bgColor: "#09A1BC",
  },
  {
    name: "Express.js",
    src: "/skills/ic_skill_express.svg",
    bgColor: "#09A1BC",
  },
  {
    name: "Figma",
    src: "/skills/ic_skill_figma.svg",
    bgColor: "#09A1BC",
  },
  {
    name: "SQL",
    src: "/skills/ic_skill_sql.svg",
    bgColor: "#09A1BC",
  },
];
