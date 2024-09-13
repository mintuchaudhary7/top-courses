import "./App.css";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { filterData, apiUrl } from "./data";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        console.log(output);
        setCourses(output.data);
        console.log("courses value updated");
        console.log(courses);
      } catch (error) {
        toast.error("something went wrong");
      }

      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar></Navbar>

      <div className=" bg-[#2a2948]">
        <Filter
          filterData={filterData}
          category={category}
          setCategory={setCategory}
        />

        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {loading ? (
            <Spinner></Spinner>
          ) : (
            <Cards courses={courses} category={category}></Cards>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
