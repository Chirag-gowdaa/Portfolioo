import { motion } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl max-w-lg w-full relative"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-red-500"
        >
          ✕
        </button>
        <img src={project.img} alt={project.title} className="rounded-lg mb-4" />
        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.desc}</p>
        <p className="text-indigo-500 mb-4">{project.tech}</p>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            className="inline-block px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full"
          >
            View Live
          </a>
        )}
      </motion.div>
    </motion.div>
  );
}
