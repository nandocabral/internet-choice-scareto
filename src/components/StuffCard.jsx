import { Link } from "react-router-dom";

const StuffCard = ({ data }) => {
  return (
    <div className="rounded-lg p-2 bg-gray-800 shadow-lg flex flex-col m-4">
      <div className="flex flex-row items-end">
        <Link
          to={`/${data.name}`}
          className="text-4xl font-bold text-gray-400 hover:text-gray-300"
        >
          {data.name}
        </Link>
        <span className="px-4 py-1 bg-green-300 text-xs font-bold text-green-800 rounded-full ml-4">
          {data.dislikes}
        </span>
      </div>
      <p className="font-light text-gray-200">{data.description}</p>
    </div>
  );
};

export default StuffCard;
