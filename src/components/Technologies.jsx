import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  const techIcons = [
    { src: "/react.png", alt: "React" },
    { src: "/java.png", alt: "Java" },
    { src: "/nodejs.png", alt: "Node.js" },
    { src: "/html.png", alt: "HTML" },
    { src: "/firebase.png", alt: "Firebase" },
    { src: "/tailwind.png", alt: "Tailwind CSS" },
    { src: "/android_studio.png", alt: "Android Studio" },
    { src: "/linux.png", alt: "Linux" },
    { src: "/docker.png", alt: "Docker" },
    { src: "/aws.png", alt: "AWS" },
    { src: "/tensorflow.png", alt: "TensorFlow" },
    { src: "/bash.png", alt: "Bash" },
    { src: "/arch_linux.png", alt: "Arch Linux" },
    { src: "/github_actions.png", alt: "GitHub Actions" },
  ];

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 p-3"
      >
        {techIcons.map((icon, i) => (
          <motion.div
            key={i}
            variants={iconVariants(2 + i * 0.3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <img className="w-20" src={icon.src} alt={icon.alt} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
