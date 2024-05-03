import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { FaArrowAltCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const TouristSpotDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState([]);
  const [card, setCard] = useState(null);
  useEffect(() => {
    fetch("https://nomad-ventures-server.vercel.app/cards")
      .then((res) => res.json())
      .then((data) => {
        const foundCard = data.find((item) => item._id === id);
        setCard(foundCard);
      });
  }, [id]);
  console.log(card);

  return (
    <>
      <Fade>
        <div className="">
          <div className="md:h-[calc(100vh-260px)]">
            {card ? (
              <>
                <div
                  className="hero min-h-96 "
                  style={{
                    backgroundImage: `url(${
                      card.photoURL ||
                      "https://media.moddb.com/images/articles/1/73/72743/image_error_full.png"
                    })`,
                  }}
                >
                  <div className="hero-overlay bg-opacity-60"></div>
                  <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                      <div className="flex text-lg mb-3 items-center justify-center gap-1">
                        <FaMapLocationDot />

                        {card.location || "Not Found"}
                      </div>
                      <h1 className="mb-5 text-5xl font-bold">
                        {card.spot_name || "Not Found"}
                      </h1>
                      <p className="mb-5">
                        {card.short_description || "No Description Found"}
                      </p>
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
                  </div>
                </div>
                <div className="container md:p-0 p-4  mt-5 mb-5 md:mx-auto">
                  <h1 className="text-3xl font-semibold mb-2">
                    Welcome To {card.spot_name}, {card.location}{" "}
                  </h1>
                  <div>
                    <p className="">
                      {card.long_description || "No Long Description Found"}
                    </p>
                  </div>

                  <div className="my-8 flex justify-center">
                    <Link
                      to={"/MyList"}
                      className="btn bg-blue-500 hover:bg-blue-600 text-white "
                    >
                      Go To LIst
                      <FaArrowCircleRight />
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex  h-[calc(100vh-290px)] justify-center items-center">
                <ClipLoader color="#1f68d6" size={50} />
              </div>
            )}
          </div>
        </div>
      </Fade>
    </>
  );
};

export default TouristSpotDetails;
