import { Link } from "react-router-dom";
import LikeBtn from "./LikeBtn";

const StuffCard = ({ data }) => {
  return (
    <div className="rounded-lg p-4 bg-gray-800 shadow-lg flex flex-col m-2 hover:shadow-xl transition duration-150 ease-out">
      <div className="text-center">
        <LikeBtn name={data.name} />
      </div>
      <div className="mb-4">
        <Link
          to={`/${data.name}`}
          className="text-xl font-bold text-gray-400 hover:text-gray-300"
        >
          {data.name}
        </Link>
        <span className="px-4 py-1 bg-green-300 text-xs font-bold text-green-800 rounded-full ml-2">
          {data.dislikes}
        </span>
      </div>
      <p className="font-light text-gray-200 text-sm">{data.description}</p>
    </div>
  );
};

export default StuffCard;
