import React from "react";

const CardProject = ({ project }) => {
  return (
    <div className="group relative w-full">
            
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
    
        <div className="relative p-5 z-10">
          <div className="relative overflow-hidden rounded-lg">
      <img className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" src={project.image} alt={project.name} />  
      </div>
      <div className="mt-4 space-y-3"> <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">{project.name}</h3>
      <p className="text-l font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200">
        Visit Project
      </a>
      </div>
    </div>
    </div>
      </div>
  );
};

export default CardProject;
