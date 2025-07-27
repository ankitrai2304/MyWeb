import React from "react";
import Button from "./Button";
import GithubIcon from "./GithubIcon";

export default function Pcard({ project }) {
    return (
        <div className="group relative overflow-hidden border border-slate-700/50 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:-translate-y-2 bg-slate-800/80 backdrop-blur-sm hover:bg-slate-800/90 rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 p-6">
                <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                        {project.title}
                    </h3>
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-slate-700/50 hover:bg-slate-600/50 transition-colors duration-200 backdrop-blur-sm opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
                    >
                        <GithubIcon className="w-4 h-4 text-slate-300 hover:text-white" />
                    </a>
                </div>
                <p className="text-slate-300 text-base mb-2">{project.description}</p>
                <p className="text-sm text-slate-400 mb-4">{project.subDescription}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-3 py-1 text-xs font-medium bg-slate-700/50 text-slate-300 rounded-full group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-colors duration-300 backdrop-blur-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <Button href={project.githubUrl}>
                    <GithubIcon className="w-4 h-4" />
                    View Code
                </Button>
            </div>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-sm" />
        </div>
    );
}
