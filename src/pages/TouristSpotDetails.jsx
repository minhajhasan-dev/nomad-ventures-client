import { useEffect, useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdLibraryAdd } from "react-icons/md";
import { Link, useParams } from "react-router-dom";

const TouristSpotDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState([]);
  const [card, setCard] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/cards")
      .then((res) => res.json())
      .then((data) => {
        const foundCard = data.find((item) => item._id === id);
        setCard(foundCard);
      });
  }, [id]);
  console.log(card);

  return (
    <>
      <div className="">
        <div className="">
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
                      <Link to={"/"} className="btn btn-primary ">
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
                  <button className="btn btn-primary ">
                    <MdLibraryAdd />
                    Add To LIst
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex  h-[calc(100vh-290px)] justify-center items-center">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TouristSpotDetails;
