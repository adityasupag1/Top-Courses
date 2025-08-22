import Card from "./Card";


function Cards({ courses }) {
// const [linkedCourses, setLikedCourses] = useState([]);


// Method 1: 
  // function getCourses() {
  //   let allCourses = [];
	// 	Object.values(courses ?? {}).forEach((courseCategory) => {
	// 		courseCategory.forEach((course) => {
	// 			allCourses.push(course);
	// 		});
	// 	});
	// 	return allCourses;
	// }

// Method 2: 
 function getCourses(){
   return Object.values(courses ?? {}).flatMap((courseCategory)=>courseCategory)
 }

 const allCourses = getCourses();

	return (
		<div className="flex flex-wrap justify-center gap-4 mb-4">
			{allCourses.map((course) => (
				<Card 
				course={course}  
				// linkedCourses={linkedCourses}
				// setLikedCourses= {setLikedCourses}
				/>
			))}
		</div>
	);
}
export default Cards;
