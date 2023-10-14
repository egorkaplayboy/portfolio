'use client'
import { motion } from "framer-motion";
import { projectsData } from "@/data/project-data";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto py-10">
      <ul className="grid grid-cols-3 gap-3">
        {projectsData.map((project) => (
          <motion.li
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            key={project.id}
          >
            <ProjectCard
              title={project.title}
              img={project.img}
              deployUrl={project.deployUrl}
            />
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
