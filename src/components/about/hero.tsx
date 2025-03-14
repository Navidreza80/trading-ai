// Framer motion for animation
import { motion } from "framer-motion";
// i18n for translation
import { useTranslation } from "react-i18next";

export default function Hero() {
  // i18n hooks for translation
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-20"
    >
      <h1
        className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 p-2
          bg-gradient-to-r dark:from-white dark:to-gray-400 from-gray-900 to-gray-600 
          bg-clip-text text-transparent 
           
          `}
      >
        {t("about.title")}
      </h1>
      <p
        className={`text-xl dark:text-gray-400 text-gray-600 max-w-3xl mx-auto p-2
           
          `}
      >
        {t("about.subtitle")}
      </p>
    </motion.div>
  );
}
