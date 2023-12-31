import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import walkthesewaysImg from "@/public/walk-these-ways.png";
import qasystem from "@/public/qasystem.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import musicrecsy from "@/public/musicrecsy.png";
import ytanalysis from "@/public/ytanalysis.png";
import zest from "@/public/zest.png";
import audiophile from "@/public/audiophile.png";
import mazesolver from "@/public/mazesolver.png";
import covidtracker from "@/public/covidtracker.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "MS in Computer Science - Rutgers University",
    location: "New Brunswick, NJ, USA",
    description:
      "Currently pursuing Master of Science in Computer Science at Rutgers University, graduating in May 2024 and actively seeking full-time opportunities",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2022 - Present",
  },
  {
    title: "Software Engineer - Deutsche Bank",
    location: "Pune, MH, India",
    description:"At Deutsche Bank, I developed and optimized machine learning-based invoice classification system and improved big data processing using technologies like PySpark, Apache Hadoop, and Apache Hive. My role also included leading data migration projects and enhancing data pipeline efficiency through innovative solutions.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2019 - July 2022",
  },
  {
    title: "BE in Computer Engineering - Mumbai University",
    location: "Mumbai, MH, India",
    description:
      "I completed my four-year degree (BE) in Computer Engineering and immediately embarked on my professional journey at Deutsche Bank, where I began my career as a Software Engineer.",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2015 - May 2019",
  },
] as const;

const projectsData = [
  {
    title: "Walk these ways",
    description:"Reinforcement learning-based locomotion policy for a robotic dog in Isaac Gym, focusing on efficient and collision-free navigation",
    tags: ["PyTorch", "Isaac Gym Simulator", "Reinforcement Learning"],
    imageUrl: walkthesewaysImg,
    githubUrl:"https://github.com/devarata/walk-these-ways",
    projectStartDate: "2023-11-08",
    tag:"Machine Learning",
  },
  {
    title: "Question Answering System",
    description:"Question-Answering system for low-resource languages, enhancing performance with fine-tuned BERT models​",
    tags: ["ReactJS", "PyTorch", "BERT", "Natural Language Processing"],
    imageUrl: qasystem,
    githubUrl:"https://github.com/devarata/Question-Answering-System",
    projectStartDate: "2023-03-01",
    tag:"Machine Learning",
  },
  {
    title: "Music Recommender System",
    description:"Music recommendation system using Annoy and TensorFlow, achieving fast and accurate music suggestions​",
    tags: ["Tensorflow", "Python", "ANNOY", "Docker"],
    imageUrl: musicrecsy,
    githubUrl:"https://github.com/devarata/Music-Recommender-System",
    projectStartDate: "2021-07-01",
    tag:"Machine Learning",
  },
  {
    title: "Youtube Data Analysis",
    description:"Analyzed YouTube trends dataset, transforming data and developing AWS Glue crawlers & ETL jobs​",
    tags: ["Python", "Pandas", "SQL", "AWS"],
    imageUrl: ytanalysis,
    githubUrl:"https://github.com/devarata/youtube-analysis-project",
    projectStartDate: "2023-06-01",
    tag:"Data Analysis",
  },
  {
    title: "ZEST",
    description:"Collaborative productivity app with features like video calling, note-taking, chat, project planning",
    tags: ["ReactJS", "ExpressJS", "NodeJS", "Firebase", "WebRTC", "JavaScript", "Material UI", "HTML", "CSS"],
    imageUrl: zest,
    githubUrl:"https://github.com/devarata/ZEST",
    projectStartDate: "2020-08-01",
    tag:"Software Engineering",
  },
  {
    title: "Audiophile Delight",
    description:"Video-to-MP3 conversion system with RabbitMQ, including a real-time notification system and user authentication",
    tags: ["Python", "Kubernetes", "MySQL", "JWT", "RabbitMQ", "Flask", "Docker"],
    imageUrl: audiophile,
    githubUrl:"https://github.com/devarata/audiophile-delight",
    projectStartDate: "2023-06-01",
    tag:"Software Engineering",
  },
  {
    title: "Maze Solver",
    description:"Web-based maze solver implementing various A-star algorithms (repeated, backward, and adaptive) using React for frontend and Python (Flask) backend.",
    tags: ["ReactJS", "JavaScript", "Python"],
    imageUrl: mazesolver,
    githubUrl:"https://github.com/devarata/a_star_maze_solver",
    projectStartDate: "2022-11-01",
    tag:"Software Engineering",
  },
  {
    title: "Covid Tracker",
    description:"COVID-19 tracking website providing global and country-wise statistics with map visualization of affected areas",
    tags: ["ReactJS", "JavaScript", "Context API", "React Hooks", "Material UI", "Chart.js"],
    imageUrl: covidtracker,
    githubUrl:"https://github.com/devarata/covid-tracker",
    projectStartDate: "2020-07-25",
    tag:"Software Engineering",
  },
  
] ;

export const sortedProjectsData = projectsData.sort((a, b) => {
  return b.projectStartDate.localeCompare(a.projectStartDate);
});

export const skillsData = [
  "Python",
  "JavaScript",
  "SQL",
  "C++",
  "Shell script",
  "PyTorch",
  "TensorFlow",
  "BERT",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "scikit-learn",
  "NLTK",
  "spaCy",
  "ReactJS",
  "ExpressJS",
  "NodeJS",
  "Firebase",
  "Apache Spark",
  "Apache Hive",
  "Apache Hadoop",
  "MapReduce",
  "PySpark",
  "Airflow",
  "Raspberry Pi",
  "Reinforcement Learning",
  "Natural Language Processing",
  "Computer Vision",
  "Machine Learning",
  "Big Data Technologies",
] as const;
