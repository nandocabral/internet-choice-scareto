import { memo, useEffect, useState } from "react";

const LikeBtn = ({ name }) => {
  const [includesName, setIncludesName] = useState(false);

  const setLikeOnStorage = () => {
    const names = window.localStorage.getItem("names");
    const arr = names ? JSON.parse(names) : [];
    if (!arr.includes(name)) {
      arr.push(name);
      setIncludesName(true);
    } else {
      arr.splice(arr.indexOf(name), 1);
      setIncludesName(false);
    }
    window.localStorage.setItem("names", JSON.stringify(arr));
  };

  const isJson = (value) => {
    try {
      const r = JSON.parse(value);
      return r;
    } catch (error) {
      return false;
    }
  };

  useEffect(() => {
    const names = window.localStorage.getItem("names");
    const res = isJson(names);
    if (names && res && Array.isArray(res)) {
      setIncludesName(res.includes(name));
    }
  }, [name]);

  return (
    <button
      type="button"
      className={`p-2 text-center flex items-center justify-center rounded-full ${
        includesName === true
          ? "border border-white"
          : "border border-transparent"
      }`}
      onClick={setLikeOnStorage}
    >
      &#10084;
    </button>
  );
};

export default memo(LikeBtn);
