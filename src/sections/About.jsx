import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { motion } from "framer-motion"; // <-- Add this import

const gridAnimations = [
    { initial: { opacity: 0, x: -100 }, whileInView: { opacity: 1, x: 0 } }, // Grid 1: left
    { initial: { opacity: 0, x: 100 }, whileInView: { opacity: 1, x: 0 } },  // Grid 2: right
    { initial: { opacity: 0, x: -100 }, whileInView: { opacity: 1, x: 0 } }, // Grid 3: left
    { initial: { opacity: 0, x: 100 }, whileInView: { opacity: 1, x: 0 } },  // Grid 4: right
    { initial: { opacity: 0, x: -100 }, whileInView: { opacity: 1, x: 0 } }, // Grid 5: left
];

const About = () => {
    const grid2Container = useRef();
    return (
        <section className="c-space section-spacing" id="about">
            <h2 className="text-heading">About Me</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
                {/* Grid 1 */}
                <motion.div
                    {...gridAnimations[0]}
                    transition={{ duration: 1, type: "spring" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex items-end grid-default-color grid-1"
                >
                    <img
                        src="assets/coding-pov.png"
                        className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
                    />
                    <div className="z-10">
                        <p className="headtext">Hi, I'm Ankit Rai</p>
                        <p className="subtext text-justify leading-relaxed text-base md:text-lg max-w-3xl mx-auto">
                            A recent Computer Science graduate with hands-on experience in machine learning and web development. Completed an internship at the CAISE Foundation, building an Iris classification model. Developed projects like a vulnerability scanner and a steganography app using Python and Streamlit. Skilled in HTML, CSS, JavaScript, Python, MySQL, and MongoDB, with a strong interest in data analytics and AI-powered solutions.
                        </p>
                    </div>
                    <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
                </motion.div>
                {/* Grid 2 */}
                <motion.div
                    {...gridAnimations[1]}
                    transition={{ duration: 1, type: "spring" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid-default-color grid-2"
                >
                    <div
                        ref={grid2Container}
                        className="flex items-center justify-center w-full h-full"
                    >
                        <p className="flex items-end text-5xl text-gray-500">
                            CODE IS CRAFT
                        </p>
                        <Card
                            style={{ rotate: "75deg", top: "30%", left: "20%" }}
                            text="Robust"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "-30deg", top: "60%", left: "45%" }}
                            text="SOLID UI"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
                            text="Responsive Design"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "-45deg", top: "55%", left: "0%" }}
                            text="Design Principles"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "20deg", top: "10%", left: "38%" }}
                            text="React Bits"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "-45deg", top: "70%", left: "25%" }}
                            text="Scalable"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "-45deg", top: "5%", left: "10%" }}
                            text="Performance"
                            containerRef={grid2Container}
                        />
                    </div>
                </motion.div>
                {/* Grid 3 */}
                <motion.div
                    {...gridAnimations[2]}
                    transition={{ duration: 1, type: "spring" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid-black-color grid-3"
                >
                    <div className="z-10 w-[50%]">
                        <p className="headtext">Time Zone</p>
                        <p className="subtext">
                            I'm based in Mars,and open to remote work worldwide &mdash; let's connect!
                        </p>
                    </div>
                    <figure className="absolute left-[30%] top-[10%]">
                        <Globe />
                    </figure>
                </motion.div>
                {/* Grid 4 */}
                <motion.div
                    {...gridAnimations[3]}
                    transition={{ duration: 1, type: "spring" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid-special-color grid-4"
                >
                    <div className="flex flex-col items-center justify-center gap-4 size-full">
                        <p className="text-center headtext">
                            Do you want to start a project together?
                        </p>
                        <CopyEmailButton />
                    </div>
                </motion.div>
                {/* Grid 5 */}
                <motion.div
                    {...gridAnimations[4]}
                    transition={{ duration: 1, type: "spring" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid-default-color grid-5 orbit-container"
                >
                    <div className="z-10 w-[50%]">
                        <p className="headtext">Tech Stack</p>
                        <p className="subtext">
                            I specialize in a variety of languages, frameworks, and tools that
                            allow me to build robust and scalable applications
                        </p>
                    </div>
                    <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;