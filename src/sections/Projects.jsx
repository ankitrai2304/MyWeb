import React from "react";
import Button from "../components/Button";
import Pcard from "../components/Pcard";
import GithubIcon from "../components/GithubIcon";

export default function Projects() {
    const projects = [
        {
            title: "Crypto-Hide",
            description: "A modern steganography app that securely hides secret messages inside images using military-grade encryption and LSB techniques,built with Streamlit and a sleek dark UI.",
            githubUrl: "https://github.com/ankitrai2304/Crypto-hide_using_python",
            tags: ["Streamlit", "Image", "PBKDF2HMAC", "Python"],
        },
        {
            title: "object-measurement-via-opencv",
            description: "A Streamlit-based image analysis tool that detects and measures object dimensions (width, height, area) from uploaded images using OpenCV, with real-world unit conversion and report generation.",
            githubUrl: "https://github.com/ankitrai2304/object-measurement-via-opencv",
            tags: ["Python", "Streamlit", "OpenCV", "Pandas"],
        },
        {
            title: "Keyloggers",
            description: "A simple Python-based keylogger designed for terminal use, built for educational and accessibility testing in a controlled environment.",
            githubUrl: "https://github.com/ankitrai2304/Keyloggers",
            tags: ["atexit", "threading", "signal"],
        },
        {
            title: "Portfolio Website",
            description: "A modern portfolio website showcasing projects and skills , built with React.js, featuring smooth animations and optimized performance",
            githubUrl: "https://github.com/ankitrai2304/MyWeb",
            tags: ["React.js", "Drei", "Tailwind CSS", "ThreeJs"],
        },
        {
            title: "IRIS-classification",
            description: "A machine learning project that classifies Iris flower species using Decision Tree, Logistic Regression, and SVC models trained on the classic Iris dataset.",
            githubUrl: "https://github.com/ankitrai2304/IRIS-classification",
            tags: ["Jupyter", "Python", "Streamlit", "Sciket-Learn"],
        },
        {
            title: "Vulnerable-scanner",
            description: "A lightweight XSS scanner using AJAX to detect vulnerabilities in input fields with real-time analysis, ideal for educational and secure testing use.",
            githubUrl: "https://github.com/ankitrai2304/Vulnerable-scanner",
            tags: [ "BeautifulSoup", "urllib.parse"],
        },
    ];

    return (
        <section id="work" className="min-h-screen py-20 px-4 bg-transparent relative overflow-hidden">
            {/* Background Overlay Text */}
            {/*<div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 text-green-400 text-sm font-mono transform -rotate-12">
                    {"const projects = ["}
                </div>
                <div className="absolute top-32 right-20 text-blue-400 text-sm font-mono transform rotate-6">
                    {"function Component() {"}
                </div>
                <div className="absolute bottom-40 left-32 text-purple-400 text-sm font-mono transform -rotate-6">
                    {'return <div className="portfolio">'}
                </div>
                <div className="absolute bottom-20 right-10 text-cyan-400 text-sm font-mono transform rotate-12">
                    {"export default Portfolio;"}
                </div>
                <div className="absolute top-1/2 left-1/4 text-yellow-400 text-sm font-mono transform -rotate-3">
                    {"useState, useEffect, useCallback"}
                </div>
                <div className="absolute top-1/3 right-1/3 text-pink-400 text-sm font-mono transform rotate-3">
                    {"interface ProjectProps {"}
                </div>
            </div>*/}

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                        A collection of projects that showcase my skills in web development , machine learning and data training , from full-stack applications to
                        creative experiments
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {projects.map((project, index) => (
                        <Pcard key={index} project={project} />
                    ))}
                </div>

                <div className="text-center mt-16">
                    <p className="text-slate-400 mb-6">Want to see more of my work?</p>
                    <Button href="https://github.com/ankitrai2304">
                        <GithubIcon />
                        View All Projects on GitHub
                    </Button>
                </div>
            </div>
        </section>
    );
}
