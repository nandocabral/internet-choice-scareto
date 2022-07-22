import * as collection from "../json/collection.json";
import StuffCard from "../components/StuffCard";

const Home = () => {
  return (
    <>
      <div className="flex flex-col">
        {collection.default.map((item) => (
          <StuffCard key={item.name} data={item} />
        ))}
      </div>
    </>
  );
};

export default Home;
