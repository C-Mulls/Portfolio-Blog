"use client";
import ProjectModal from "./ProjectModal";
import { useState } from "react";
const ProjectSection =() => {
    const projects = [
        {
          id: 1,
          title: "Financial Dashboard",
          tags: ["React", "Tailwind CSS", "Firebase"],
          description: "This full-stack financial dashboard provides users with a seamless experience to track their invoices and customers. Featuring a secure authentication and login system, users can access a dynamic home screen displaying key financial metrics, including collected invoices, pending invoices, total invoices, and total customers. Built with React.js and styled using Tailwind CSS, the app efficiently fetches data, handles errors, and optimizes performance with static and dynamic rendering. Additionally, metadata management ensures a smooth and SEO-friendly experience.",
          fullDescription:"Username: user@nextmail.com Password: 123456",
          web: "Financial Dashboard Login",
          image: "/Dashboard.png",
          techStack: ["React", "AWS", "CloudFlare", "TailwindCSS", "Nodejs"],
        },
        {
            id: 2, 
            title: "AI Summarization Tool",
            tags: ["NextJS", "MongoDB", "AWS"],
            description: "This is a sample description that simply describes what the projects does",
            fullDescription:"This is a sample full description that helps describes what is is exactly that the project does and what tools I used and the concepts it best showcases.",
            image: "/Dashboard.png",
            techStack: ["React", "PayloadCMS", "CloudFlare", "TailwindCSS", "Nodejs"],
        },
        {
            id: 3,
            title: "Newsletter App",
            tags: ["CloudFlare", "Vercel", "NextJS"],
            description: "This is a sample description that simply describes what the projects does",
            fullDescription:"This is a sample full description that helps describes what is is exactly that the project does and what tools I used and the concepts it best showcases.",
            image: "/Dashboard.png",
            techStack: ["React", "AWS", "CloudFlare", "TailwindCSS", "Nodejs"],
        },
        {
            id: 4,
            title: "AI Quiz Generator",
            tags: ["React", "Tailwind CSS", "Firebase"],
            description: "This is a sample description that simply describes what the projects does",
            fullDescription:"This is a sample full description that helps describes what is is exactly that the project does and what tools I used and the concepts it best showcases.",
            image: "/Dashboard.png",
            techStack: ["React", "AWS", "CloudFlare", "TailwindCSS", "Nodejs"],
        },
        {
            id: 5,
            title: "Blog Website",
            tags: ["MDX", "Tailwind CSS", "Framer Motion", "NextJs"],
            description: "This is a sample description that simply describes what the projects does",
            fullDescription:"This is a sample full description that helps describes what is is exactly that the project does and what tools I used and the concepts it best showcases.",
            image: "/Dashboard.png",
            techStack: ["MDX", "NextJS", "Framer Motion", "TailwindCSS", "Nodejs", "Stripe API", "PayloadCMS"],
        },
        {
            id: 6,
            title: "Feedback Platform",
            tags: ["TS", "Postgres", "DrizzleORM"],
            description: "This is a sample description that simply describes what the projects does",
            fullDescription:"This is a sample full description that helps describes what is is exactly that the project does and what tools I used and the concepts it best showcases.",
            image: "/Dashboard.png",
            techStack: ["React", "AWS", "CloudFlare", "TailwindCSS", "Nodejs"],
        }
    ];

    const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (id) => {
    setSelectedProject(id);
  }

  const handleCloseModal = () => {
    setSelectedProject(null);
  }

  const handleNextProject = () => {
    const currentIndex = projects.findIndex((project) => project.id === selectedProject);

    if (currentIndex === -1) {
      return null;
    }

    const nextIndex = (currentIndex + 1) % projects.length;

    setSelectedProject(projects[nextIndex].id);
  }

  const handlePrevProject = () => {
    const currentIndex = projects.findIndex((project) => project.id === selectedProject);

    if (currentIndex === -1) {
      return null;
    }

    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;

    setSelectedProject(projects[prevIndex].id);
  };

  return (
    <section
      id="projects"
      className="px-4 py-32 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project, index) => (
          <button
            onClick={() => handleProjectClick(project.id)}
            key={index}
            className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-primary-500/50 transition-colors hover:shadow-sm text-left"
          >
            <div className="flex flex-col h-full">
              <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
              <div className="flex flex-wrap gap-1 mt-auto">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-0.5 text-xs rounded-full bg-primary-500/20 text-primary-200 border border-primary-500/30 "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>
      {selectedProject && (
        <ProjectModal
          project={projects.find((project) => project.id === selectedProject)}
          onClose={handleCloseModal}
          onNext={handleNextProject}
          onPrev={handlePrevProject}
        />
      )}
    </section>
  );
};

export default ProjectSection;