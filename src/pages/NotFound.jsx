import Lottie from "lottie-react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import NotFoundLottie from "../../public/NotFoundLottie.json";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-150px)] justify-center">
      <Lottie
        animationData={NotFoundLottie}
        className="max-w-3xl mx-auto my-auto h-auto"
      />
      <div className="flex justify-center gap-1">
        <Link
          to={"/"}
          className="btn bg-blue-500 text-white border-0 hover:bg-blue-600"
        >
          <FaArrowAltCircleLeft />
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
