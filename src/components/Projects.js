import React, { useState } from 'react';
import projectData from '../data/projectData.json';
import ProjectModal from './ProjectModal';
import '../styles/project.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectData.map(project => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />
            <div className="project-overlay">{project.title}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, i) => <span key={i}>{tag}</span>)}
            </div>
            <div className="project-buttons">
              <a onClick={() => setSelectedProject(project)} style={{ cursor: 'pointer' }}>
                자세히

              </a>
              {project.videoUrl && project.videoUrl !== '#detail2' && (
                <a href={project.videoUrl} target="_blank" rel="noreferrer">
                  영상자료
                </a>
              )}
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </section>
  );
};

export default Projects;
