import { RiReactjsLine } from "react-icons/ri";
import {BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { SiGooglecloud } from "react-icons/si";
import {motion} from "motion/react";

const iconvariants= (duration)=>({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  },
})

const technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div 
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={iconvariants(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <RiReactjsLine className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div 
        variants={iconvariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <FaNodeJs className="text-7xl text-green-500"/>
        </motion.div>
        <motion.div 
        variants={iconvariants(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiMongodb className="text-7xl text-lime-800"/>
        </motion.div>
        <motion.div 
        variants={iconvariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <BiLogoPostgresql className="text-7xl text-blue-700"/>
        </motion.div>
        <motion.div 
        variants={iconvariants(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <LuBrainCircuit className="text-7xl text-red-400"/>
        </motion.div>
        <motion.div 
        variants={iconvariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiGooglecloud className="text-7xl text-white"/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default technologies
