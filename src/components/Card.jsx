import { FcLike } from "react-icons/fc";
import { AiOutlineHeart } from "react-icons/ai";
import { toast } from "react-toastify";

const Card = ({ course, linkedCourses, setLikedCourses }) => {
  const isLiked = linkedCourses.includes(course.id);

  const clickHandler = () => {
    if (isLiked) {
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.info("Removed from Liked ❤️‍🩹");
    } else {
      setLikedCourses((prev) => [...prev, course.id]);
      toast.success("Liked Successfully 💖");
    }
  };

  // ✅ return must be INSIDE the function
  return (
    <div className="w-[300px] bg-[#2A2B44] rounded-md overflow-hidden">
      <div className="relative">
        <img src={course.image.url} alt={course.title} />
        <div className="w-[40px] h-[40px] absolute bg-white rounded-full right-2 bottom-0 flex justify-center items-center shadow-md">
          <button onClick={clickHandler}>
            {isLiked ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <AiOutlineHeart fontSize="1.75rem" className="text-gray-600" />
            )}
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="mt-2 text-white">
          {course.description.length < 100 ? (course.description+"...") : (course.description.substr(0,100)+"...")}
        </p>
      </div>
    </div>
  );
};

export default Card;
