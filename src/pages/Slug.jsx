import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LikeBtn from "../components/LikeBtn";
import * as collection from "../json/collection.json";

const Slug = () => {
  const [data, setData] = useState({});
  const { slug } = useParams();

  useEffect(() => {
    const [dataSlug] = collection.default.filter((el) => el.name === slug);
    if (dataSlug) {
      setData(dataSlug);
    }
  }, [slug]);

  return (
    <>
      {Object.keys(data).length > 0 ? (
        <>
          <div className="mr-auto flex items-center text-white">
            <Link to="/">← Regresar</Link>
          </div>
          <section className="text-white text-center">
            <h1 className="text-4xl my-4">{slug}</h1>
            <div className="flex divide-x divide-x-white flex-row my-2 items-center justify-center">
              <h2 className="px-2">{data.year}</h2>
              <h2 className="px-2">🙂 {data.likes}</h2>
              <h2 className="px-2">😟 {data.dislikes}</h2>
            </div>
            <div className="my-2 text-center flex items-center justify-center">
              <LikeBtn name={data.name} />
            </div>
            <p className="text-2xl my-4">{data.description}</p>
            <h3 className="mt-4 mb-2 text-2xl">Reviews:</h3>
            <ul className="text-left">
              {data.reviews.map((e, i) => (
                <li key={`${slug}_el_${i}`} className="border-b pb-2 mb-4">
                  {e}
                </li>
              ))}
            </ul>
          </section>
        </>
      ) : (
        <>
          <div className="mr-auto flex items-center text-white">
            <Link to="/">← Regresar</Link>
          </div>
          <h1 className="text-4xl text-white text-center">No data :'v</h1>
        </>
      )}
    </>
  );
};

export default Slug;
