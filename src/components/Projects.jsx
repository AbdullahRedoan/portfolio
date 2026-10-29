"use client";

import { useState } from "react";
import { FolderGit2, ArrowUpRight, ExternalLink, Sparkles, Eye } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { projectsData } from "@/data/portfolioData";
import ProjectMockup from "@/components/ProjectMockup";
import ProjectModal from "@/components/ProjectModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenDetails = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6366F1]/10 text-[#6366F1] dark:text-[#818CF8] text-xs font-mono font-semibold tracking-wide uppercase mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Software Applications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-[#F8FAFC]">
            Projects &amp; Case Studies
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Real-world full-stack web platforms demonstrating modern architecture, responsive UI craft, and state management.
          </p>
        </div>

        {/* 3 Projects Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-white dark:bg-[#1E293B] rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-[#6366F1] dark:hover:border-[#6366F1] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1.5"
            >
              {/* Project Image Placeholder / Application Mockup Preview */}
              <div className="relative overflow-hidden">
                <ProjectMockup type={project.id} />

                {/* Hover overlay with quick preview pill */}
                <div className="absolute inset-0 bg-[#0F172A]/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <button
                    onClick={() => handleOpenDetails(project)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/95 dark:bg-[#1E293B]/95 text-xs font-bold text-[#6366F1] dark:text-[#818CF8] shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-200 cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Quick Overview</span>
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#6366F1]/10 text-[#6366F1] dark:text-[#818CF8]">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {project.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0F172A] dark:text-[#F8FAFC] group-hover:text-[#6366F1] dark:group-hover:text-[#818CF8] transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech Tags */}
                <div>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Controls: View More / Details Button & Quick Links */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-3">
                  <button
                    onClick={() => handleOpenDetails(project)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-[#6366F1] hover:bg-indigo-600 active:bg-indigo-700 shadow-sm shadow-indigo-500/20 transition-all duration-200 cursor-pointer"
                  >
                    <span>View More / Details</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-1.5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-[#0F172A] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      aria-label={`${project.title} GitHub repo`}
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl text-slate-500 dark:text-slate-400 hover:text-[#6366F1] hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      aria-label={`${project.title} Live Demo`}
                      title="Live Preview"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}

