"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
    Currently pursuing <span className="font-medium">Master of Science in Computer Science</span> at Rutgers University, graduating in May 2024, I have navigated through diverse roles in <span className="font-medium">software development, machine learning, and data engineering</span>. 
    My academic journey, starting with a Bachelor's in Computer Engineering from Mumbai University, has been complemented by professional experiences like my impactful role as a <span className="italic">Senior Analyst</span> at Deutsche Bank and a <span className="italic">Research Assistant</span> at Rutgers. I <span className="underline">thrive</span> on the challenges of tech, specializing in <span className="font-medium">Python, C++, Big Data technologies, and machine learning.</span>  With a profound interest in all things <span className="italic">data-related</span>, I have efficiently utilized <span className="font-medium">PySpark, Apache Hadoop, and Apache Hive</span> in managing large-scale data systems. My goal is to find a <span className="font-medium">full-time role</span> where I can continue to grow and contribute significantly in the field of technology.
</p>

<p>
    <span className="italic">Outside of my academic and professional life</span>, 
     I take great pleasure in <span className="italic">listening to bollywood music and singing</span> 
     .
</p>

    </motion.section>
  );
}
