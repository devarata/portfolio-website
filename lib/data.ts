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
      "I completed my four-year degree (BE) in Computer Engineering and immediately embarked on my professional journey at Deutsche Bank, where I began my career as a Software Engineer.",
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

export const projectsData = [
  {
    title: "Walk these ways",
    description:"Implemented reinforcement learning-based locomotion policy for a robotic dog in Isaac Gym, focusing on efficient and collision-free navigation",
      
    tags: ["PyTorch", "Isaac Gym Simulator", "Reinforcement Learning"],
    imageUrl: walkthesewaysImg,
  },
  {
    title: "Question Answering System",
    description:"Question-Answering system for low-resource languages, enhancing performance with fine-tuned BERT models​",
    tags: ["ReactJS", "PyTorch", "BERT", "Natural Language Processing"],
    imageUrl: qasystem,
  },
  {
    title: "Music Recommender System",
    description:"Music recommendation system using Annoy and TensorFlow, achieving fast and accurate music suggestions​",
    tags: ["Tensorflow", "Python", "ANNOY", "Docker"],
    imageUrl: musicrecsy,
  },
  {
    title: "Youtube Data Analysis",
    description:"Analyzed a large YouTube trends dataset, transforming data and developing AWS Glue crawlers & ETL jobs​",
    tags: ["Python", "Pandas", "SQL", "AWS"],
    imageUrl: ytanalysis,
  },
  {
    title: "ZEST",
    description:"Collaborative productivity app with features like video calling, note-taking, chat, project planning",
    tags: ["ReactJS", "ExpressJS", "NodeJS", "Firebase", "WebRTC", "JavaScript", "Material UI", "HTML", "CSS"],
    imageUrl: zest,
  },
  {
    title: "Audiophile Delight",
    description:"Video-to-MP3 conversion system with RabbitMQ, including a real-time notification system and user authentication",
    tags: ["Python", "Kubernetes", "MySQL", "JWT", "RabbitMQ", "Flask", "Docker"],
    imageUrl: audiophile,
  },
  {
    title: "Maze Solver",
    description:"Web-based maze solver implementing various A-star algorithms (repeated, backward, and adaptive) using React for frontend and Python (Flask) backend.",
    tags: ["ReactJS", "JavaScript", "Python"],
    imageUrl: mazesolver,
  },
  {
    title: "Covid Tracker",
    description:"COVID-19 tracking website providing global and country-wise statistics with map visualization of affected areas",
    tags: ["ReactJS", "JavaScript", "Context API", "React Hooks", "Material UI", "Chart.js"],
    imageUrl: covidtracker,
  },
  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
