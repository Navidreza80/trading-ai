// Framer motion for animation
import { motion } from "framer-motion";
// Icons
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
// i18n for translation
import { useTranslation } from "react-i18next";

export default function SearchBlogs({ searchQuery, setSearchQuery }) {
  // i18n hooks for translation
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mb-12"
    >
      <div className="relative max-w-2xl mx-auto">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={t("blogs.searchPlaceholder")}
          className={`w-full px-4 py-3 pl-12 rounded-xl
              dark:bg-white/5 bg-white
              dark:text-white text-gray-900
              dark:border-white/10 border-gray-200 border
              focus:outline-none focus:ring-2 focus:ring-[#1890ff]
              placeholder:dark:text-gray-500 placeholder:text-gray-400
              transition-all duration-200
               
              `}
        />
        <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 dark:text-gray-400 text-gray-500" />
      </div>
    </motion.div>
  );
}
