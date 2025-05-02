import { Link } from "react-router-dom";

const Logo = ({ type }) => {
  return (
    <div className="">
      <Link
        to="/"
        className={`text-2xl font-semibold dark:text-white group ${type && " text-white text-4xl"}`}
      >
        Inner
        <span
          className={`text-3xl text-blue-800 transition duration-300 group-hover:text-blue-600 group-hover:drop-shadow-md ${type && "text-5xl font-bold"}`}
        >
          Cosmos
        </span>
      </Link>
    </div>
  );
};

export { Logo };
