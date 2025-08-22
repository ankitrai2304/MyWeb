import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
    const skills = [
        "react",
        "javascript",
        "python",
        "html5",
        "css3",
        "tailwindcss",
        "vitejs",
        "git",
        "github",
        "threejs",
        "csharp",
        "dotnet",
        "azure",
        "sqlite",
        "visualstudiocode",
        "wordpress",
    ];
    return (
        <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
            <OrbitingCircles iconSize={40} radius={120} speed={1.5}>
                {skills.slice(0, 8).map((skill, index) => (
                    <Icon key={index} src={`assets/logos/${skill}.svg`} />
                ))} 
            </OrbitingCircles>
            <OrbitingCircles iconSize={30} radius={80} reverse speed={2} duration={15}>
                {skills.slice(8).map((skill, index) => (
                    <Icon key={index} src={`assets/logos/${skill}.svg`} />
                ))}
            </OrbitingCircles>
        </div>
    );
}

const Icon = ({ src }) => (
    <img src={src} className="tech-icon duration-200 rounded-sm hover:scale-110 transition-transform" />
);