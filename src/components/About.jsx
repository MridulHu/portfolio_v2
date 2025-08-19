import { ABOUT_TEXT } from "../utils/constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h1>
      <div className="flex flex-wrap">
        {/* Left side image */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              className="rounded-2xl w-72 h-auto lg:w-96"
              src="/about.jpg"
              alt="About"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Right side text */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex flex-col justify-center lg:justify-start pt-8">
            {ABOUT_TEXT.map((para, i) => (
              <p key={i} className="my-2 max-w-xl py-2 text-gray-300 mx-auto">
                {para}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
