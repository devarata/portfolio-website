"use client";
import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { sortedProjectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value); // Correctly typed now
    setSelectedCategory(event.target.value);
  };
  
  const filteredProjects = selectedCategory === 'All'
    ? sortedProjectsData
    : sortedProjectsData.filter(project => project.tag === selectedCategory);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 text-center">
  <SectionHeading>Projects</SectionHeading>

  <div className="my-4 mb-10">
    <select 
      onChange={handleDropdownChange} 
      value={selectedCategory}
      className="bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-700 py-2 px-4 w-full sm:w-auto"
    >
      <option value="All">All Projects</option>
      <option value="Machine Learning">Machine Learning Projects</option>
      <option value="Software Engineering">Software Engineering Projects</option>
      <option value="Data Analysis">Data Analysis Projects</option>
    </select>
  </div>

  <div>
    {filteredProjects.map((project, index) => (
      <React.Fragment key={index}>
        <Project {...project} />
      </React.Fragment>
    ))}
  </div>
</section>

  );
}
