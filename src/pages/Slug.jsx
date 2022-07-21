import { useParams } from "react-router-dom";

const Slug = () => {
  const { slug } = useParams();

  return <p>Slug: {slug}</p>;
};

export default Slug;
