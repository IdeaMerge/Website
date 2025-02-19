import {PROJECTS} from "../constants";
import {motion} from "motion/react";

const Projects = () => {
  return (
    <div className="border-b border-neutral-500 pb-4">
      <motion.h1 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:0.5}}
      className="my-20 text-center text-4xl font-bold">Services We Provide</motion.h1>
        <div>
                <div className="mb-8 flex flex-wrap text-2xl lg:justify-center">
                    <motion.div 
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:100}}
                    transition={{duration:1}}
                    className="w-full max-w-xl lg:w-3/4">
                       <ol>
                        <li>
                        Mini and Major Projects
                            <ul className="text-sm"><li>We provide fully developed reports, PowerPoint presentations, and documents based on idea.</li></ul>
                        </li>
                        <li>
                        Conference and Journal Papers(writing and publication)
                            <ul className="text-sm"><li>Need changes or improvements to your existing paper? We’ll make the necessary revisions.</li></ul>
                        </li>
                        <li>
                        Idea Development and R&D
                            <ul className="text-sm"><li>Have an idea but lack the resources to develop it? We’ll turn your idea into a well-structured paper.</li></ul>
                        </li>
                        <li>
                        Complete Paper Writing (From Scratch)
                            <ul className="text-sm"><li>If you have no idea where to start, we’ll create your paper from the ground up, covering everything.</li></ul>
                        </li>
                    </ol>
                    </motion.div>
                </div>
        </div>
    </div>
  )
}

export default Projects
