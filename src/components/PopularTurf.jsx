import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Turf from "./Turf";

const PopularTurf = () => {
  const [turfs, setTurfs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/turfs")
      .then((res) => res.json())
      .then((data) => setTurfs(data));
  }, []);

  console.log(turfs);

  return (
    <section className="max-w-screen-xl mx-auto px-4 py-10">
      <h1 className="text-center font-semibold text-3xl mb-8">Popular Turf</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-6">
        {turfs.map((turf) => (
          <Turf key={turf.id} turf={turf} />
        ))}
      </div>
      <div className="text-center">
        <Link to="/all-turf">View All</Link>
      </div>
    </section>
  );
};

export default PopularTurf;
