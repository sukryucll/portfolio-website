import {
  Settings,
  Engineering,
  Analytics,
  CropRotate,
  ViewInAr,
  PieChart,
  Code,
  BarChart,
  CloudOutlined,
  FavoriteBorder,
  Public,
  PersonOutlined,
  AddLocationAltOutlined,
  PhoneIphone,
  EmailOutlined,
  Facebook,
  Twitter,
  Instagram,
  YouTube,
} from "@mui/icons-material";

export const navlink = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/about",
    text: "About",
  },
  {
    url: "/services",
    text: "Services",
  },
  {
    url: "/portfolio",
    text: "Portfolio",
  },
  {
    url: "/testimonials",
    text: "Testimonials",
  },
  {
    url: "/blog",
    text: "Blog",
  },
  {
    url: "/contact",
    text: "Contact",
  },
];
export const home = [
  {
    text: "Hello, I'm",
    name: "SUKRU",
    post: "Computer Scientist",
    design: "AI & Development Specialist",
    desc: "I am a dedicated computer scientist with a focus on artificial intelligence and development. Specializing in cutting-edge AI technologies and software development to create innovative solutions. My expertise spans across designing intelligent systems, data analysis, and building scalable applications to drive technological advancement and efficiency.",
  },
];

export const about = [
  {
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    desc1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    cover: "./images/man.png",
  },
];
export const services = [
  {
    id: 1,
    icon: <Settings />,
    title: "Artificial Intelligence and Machine Learning Consulting",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 2,
    icon: <CropRotate />,
    title: "Data Analysis and Visualization",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 3,
    icon: <ViewInAr />,
    title: "Custom Software Development",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 4,
    icon: <PieChart />,
    title: "Automation and Robotic Process Automation",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 5,
    icon: <Code />,
    title: "Natural Language Processing (NLP) Solutions",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    id: 6,
    icon: <BarChart />,
    title: "Cloud-Based Solutions and Infrastructure Management",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
];
export const project = [
  {
    id: 1,
    icon: <CloudOutlined />,
    num: "150",
    title: "PROJECTS DELIVERED",
  },
  {
    id: 2,
    icon: <Engineering />,
    num: "75",
    title: "AI SOLUTIONS IMPLEMENTED",
  },
  {
    id: 3,
    icon: <Analytics />,
    num: "300",
    title: "DATA ANALYSES CONDUCTED",
  },
  {
    id: 4,
    icon: <Code />,
    num: "1200",
    title: "LINES OF CODE WRITTEN",
  },
];
export const portfolio = [
  {
    id: 1,
    cover: "../images/port/port1.jpg",
    name: "Brand",
    category: "marketing",
    title: "Brex Logo",
  },
  {
    id: 2,
    cover: "../images/port/port2.jpg",
    name: "Brand",
    category: "design",
    title: "Brex Logo",
  },
  {
    id: 3,
    cover: "../images/port/port3.jpg",
    name: "Brand",
    category: "development",
    title: "Brex Logo",
  },
  {
    id: 4,
    cover: "../images/port/port4.jpg",
    name: "Brand",
    category: "marketing",
    title: "Brex Logo",
  },
  {
    id: 5,
    cover: "../images/port/port5.jpg",
    name: "Brand",
    category: "design",
    title: "Brex Logo",
  },
  {
    id: 6,
    cover: "../images/port/port6.jpg",
    name: "Brand",
    category: "development",
    title: "Brex Logo",
  },
];
export const testimonials = [
  {
    id: 1,
    text: "Exceptional work! The project exceeded our expectations and delivered on time. Highly recommend for top-notch AI solutions and software development.",
    image: "./images/testimonials/team-1.png",
    name: "Jordan Smith",
    post: "Product Manager",
  },
  {
    id: 2,
    text: "The integration of machine learning algorithms significantly improved our data processing. Professional and efficient service.",
    image: "./images/testimonials/team-2.png",
    name: "Taylor Lee",
    post: "Data Scientist",
  },
  {
    id: 3,
    text: "A brilliant developer with a deep understanding of React and modern web technologies. Delivered high-quality code and insightful recommendations.",
    image: "./images/testimonials/team-3.png",
    name: "Morgan Taylor",
    post: "Senior Web Developer",
  },
];

export const blog = [
  {
    id: 1,
    title: "Harnessing AI for Business Growth",
    date: "July 15, 2024",
    author: "Alex Johnson",
    desc: "Explore how artificial intelligence can drive innovation and growth in your business. From automating tasks to enhancing decision-making, AI offers transformative benefits.",
    cover: "./images/blog/b1.png",
  },
  {
    id: 2,
    title: "Top 5 Trends in Software Development",
    date: "July 22, 2024",
    author: "Jordan Smith",
    desc: "Stay ahead of the curve with the latest trends in software development. Discover new technologies and methodologies shaping the future of coding and application design.",
    cover: "./images/blog/b2.png",
  },
  {
    id: 3,
    title: "Optimizing Data Analysis with Modern Tools",
    date: "August 5, 2024",
    author: "Taylor Lee",
    desc: "Learn how to leverage cutting-edge tools and techniques for effective data analysis. Enhance your ability to extract insights and make data-driven decisions with advanced analytics.",
    cover: "./images/blog/b3.png",
  },
];

export const contact = [
  {
    icon: <AddLocationAltOutlined />,
    text1: "1234 Silicon Valley Blvd, Suite 567",
    text2: "Mountain View, CA, 94043",
  },
  {
    icon: <PhoneIphone />,
    text1: "+1 (123) 456-7890",
    text2: "+1 (098) 765-4321",
  },
  {
    icon: <EmailOutlined />,
    text1: "info@techsolutions.com",
    text2: "support@techsolutions.com",
  },
];
export const social = [
  {
    icon: <Facebook />,
  },
  {
    icon: <Twitter />,
  },
  {
    icon: <Instagram />,
  },
  {
    icon: <YouTube />,
  },
];
