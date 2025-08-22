import { FcLike } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ({ course }) => {
  // const clickHandler = () => {
  //   if (linkedCourses.includes(course.id)) {
  //     // already liked → remove
  //     setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
  //   } else {
  //     // not liked yet → add
  //     if (linkedCourses.length === 0) {
  //       setLikedCourses([course.id]); // ✅ keep array structure
  //     } else {
  //       setLikedCourses((prev) => [...prev, course.id]);
  //     }
  //     toast.success("Liked Successfully");
  //   }
  // };

  return (
    <div className="w-[300px] bg-[#2A2B44] rounded-md overflow-hidden">
      <div className="relative">
        <img src={course.image.url} alt={course.title} />
        <div className="w-[40px] h-[40px] absolute bg-white rounded-full right-2 bottom-0 flex justify-center items-center">
          <button >
            <FcLike fontSize="1.75rem" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="mt-2 text-white">{course.description}</p>
      </div>
    </div>
  );
};

export default Card;
