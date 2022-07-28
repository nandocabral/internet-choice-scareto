import { useState } from "react";
import * as collection from "../json/collection.json";
import StuffCard from "../components/StuffCard";
import { Link } from "react-router-dom";
import LikeBtn from "../components/LikeBtn";

const Home = () => {
  const [showList, setShowList] = useState(false);
  return (
    <>
      <header className="flex items-center md:flex-row flex-col px-2">
        <h1 className="mb-4 text-white text-4xl">Stuff...</h1>
        <div className="flex ml-auto">
          <button
            className={`px-4 py-2 rounded-l-lg ${
              showList === true ? "bg-gray-800 text-white" : "bg-white"
            }`}
            onClick={() => setShowList(true)}
            type="button"
          >
            Lista
          </button>
          <button
            className={`px-4 py-2 rounded-r-lg ${
              showList === true ? " bg-white" : "bg-gray-800 text-white"
            }`}
            onClick={() => setShowList(false)}
            type="button"
          >
            Grid
          </button>
        </div>
      </header>
      {showList === false ? (
        <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
          {collection.default.map((item) => (
            <StuffCard key={item.name} data={item} />
          ))}
        </div>
      ) : (
        <table className="table-auto w-full text-white">
          <thead>
            <tr>
              <th>Name</th>
              <th>Dislikes</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {collection.default.map(({ name, dislikes, description }) => (
              <tr
                key={name}
                className="hover:shadow-xl transition duration-150 ease-out hover:bg-gray-800"
              >
                <td className="p-2">
                  <Link
                    to={`/${name}`}
                    className="font-bold text-gray-400 hover:text-gray-300"
                  >
                    {name}
                  </Link>
                </td>
                <td className="p-2">
                  <span className="px-4 py-1 bg-green-300 text-xs font-bold text-green-800 rounded-full ml-2">
                    {dislikes}
                  </span>
                </td>
                <td className="p-2">{description}</td>
                <td className="p-2">
                  <LikeBtn name={name} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Home;
