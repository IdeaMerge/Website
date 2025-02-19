import { HERO_CONTENT } from "../constants";
import pic from "../assets/passport_photo.jpg";
import {motion} from "motion/react";

const container= (delay)=>({
  hidden: {x:-100 , opacity:0},
  visible : {x:0 ,opacity:1, transition:{duration:0.5,delay: delay }},
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 ">
            <div className="flex flex-col items-center lg:items-start">
                <motion.h1 
                  variants={container(0)} 
                  initial="hidden"
                  animate="visible"
                  className="pb-16 text-6xl tracking-tight lg:mt-16 lg:text-8xl ">
                    Idea Merge
                </motion.h1>
                <motion.span 
                 variants={container(1)} 
                 initial="hidden"
                 animate="visible"
                className="bg-gradient-to-r from-white via-yellow-400 to-slate-600 bg-clip-text text-3xl tracking-tight text-transparent">
                    You ideate, We Build.
                </motion.span>
                <motion.p 
                 variants={container(1)} 
                 initial="hidden"
                 animate="visible"
                className="my-2 max-w-xl py-6 font-light tracking-tighter">
                    {HERO_CONTENT}
                </motion.p>
                <motion.button 
                 initial={{y:100,opacity:0}}
                 animate={{y:0,opacity:1}}
                 transition={{duration:2,delay:1.5}}
                className="bg-white w-40 rounded-xl text-black"><a href="https://docs.google.com/forms/d/e/1FAIpQLSfcxJHGrqQrh4M3x6Evf_pNCabHDcw7orwteaoKtGwEPXEBHQ/viewform">Request</a></motion.button>
            </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">

                <motion.img 
                initial={{x:100,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{duration:1,delay:1.2}}
                src={pic} alt="profilepic" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
