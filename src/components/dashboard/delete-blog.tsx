// Icons
import { Trash } from "lucide-react";
// ShadCn components
import { Button } from "../ui/button";
// Server actions
import { deleteBlog } from "@/actions/blog.action";
// React hot toast for creating toasts
import toast from "react-hot-toast";
// i18n for translation
import { useTranslation } from "react-i18next";

export default function DeleteBlog({ id, blog, setBlogs }) {
  // i18n hook for translation
  const { t } = useTranslation();
  // Function to delete user blog
  const handleDeleteBlog = async () => {
    const request = await deleteBlog(id);
    if (request == "User not authenticated") return;
    else if (request.success) toast.success("Blog deleted successfully!!");
    setBlogs(blog.filter((e) => (e.id = id)));
  };
  return (
    <Button
      onClick={handleDeleteBlog}
      className="absolute z-10 top-12 right-2 dark:bg-red-800 bg-red-800"
    >
      {/* Icon */}
      <Trash /> {t('dashboard.blogs.delete')}
    </Button>
  );
}
