import Card from "./card";

function Cards({ courses }) {
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
		<div>
			{allCourses.map((course) => (
				<Card course={course} />
			))}
		</div>
	);
}
export default Cards;
