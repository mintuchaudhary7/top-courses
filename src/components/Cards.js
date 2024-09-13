import React, { useState } from "react";
import Card from "./Card";

function Cards({ courses, category }) {
  const [likedCourses, setLikedCourses] = useState([]);

  let allCourses = [];

  // returns you a list of all courses recived from a api
  const getCourses = () => {
    if (category === "All") {
      Object.values(courses).forEach((courseCatagory) => {
        courseCatagory.forEach((course) => {
          allCourses.push(course);
        });
      });
      return allCourses;
    } else {
      return courses[category];
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {!courses ? (
        <div>
          <p>No Data Found</p>
        </div>
      ) : (
        getCourses().map((course) => {
          return (
            <Card
              key={course.id}
              course={course}
              likedCourses={likedCourses}
              setLikedCourses={setLikedCourses}
            ></Card>
          );
        })
      )}
    </div>
  );
}

export default Cards;
