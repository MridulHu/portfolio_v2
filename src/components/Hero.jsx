import { HERO_CONTENT } from "../utils/constants";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        {/* Left section */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start ml-20">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-2 text-6xl font-bold text-white/80 tracking-tight lg:mt-16 lg:text-7xl"
            >
              Hello I am Mridul Das
            </motion.h1>

            <motion.p
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-4 font-medium text-2xl"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* Social links */}
            <motion.div
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="flex items-center justify-center gap-4 text-2xl"
            >
              <a
                href="https://www.linkedin.com/in/mridulhu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-7" src="/linkedin.png" alt="LinkedIn" />
              </a>
              <a
                href="https://github.com/mridulhu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-8" src="/github.png" alt="GitHub" />
              </a>
              <a
                href="https://www.instagram.com/mridul._das/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-8" src="/instagram.png" alt="Instagram" />
              </a>
              <a
                href="https://x.com/mridulhu_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-8" src="/x.png" alt="Twitter" />
              </a>
              <a
                href="mailto:mriduldas0812@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="w-8" src="/gmail.png" alt="Email" />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Right section (profile image) */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              src="/mridul.png"
              alt="Mridul Das"
              loading="lazy"
              className="-mt-20 w-[80%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
