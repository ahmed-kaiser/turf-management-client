import { RiArrowRightLine, RiStarSFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Turf = ({ turf }) => {
  const { id, name, image, ratting } = turf;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="h-[200px] w-full overflow-hidden">
        <img className="rounded-t-lg" src={image} alt="" />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <div className="flex items-center mt-2.5 mb-5">
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <RiStarSFill />
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            5.0
          </span>
        </div>
        <Link
          to={`turf-details/${id}`}
          className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <span>Book Now</span>
          <RiArrowRightLine />
        </Link>
      </div>
    </div>
  );
};

export default Turf;
