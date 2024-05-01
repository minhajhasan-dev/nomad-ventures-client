import { useEffect, useState } from "react";
import { FaArrowAltCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";

const TouristSpotDetailsv2 = () => {
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState([]);
  const [card, setCard] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/touristSpot")
      .then((res) => res.json())
      .then((data) => {
        const foundCard = data.find((item) => item._id === id);
        setCard(foundCard);
      });
  }, [id]);

  // format views with K,M
  function formatViews(number) {
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + "M";
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + "K";
    } else {
      return number;
    }
  }
  return (
    <div className="">
      <div className="">
        {card ? (
          <>
            <div
              className="hero min-h-96 "
              style={{
                backgroundImage: `url(${
                  card.imageUrl ||
                  "https://media.moddb.com/images/articles/1/73/72743/image_error_full.png"
                })`,
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <div className="flex text-lg mb-3 items-center justify-center gap-1">
                    <FaMapLocationDot />

                    {card.countryName || "Not Found"}
                  </div>
                  <h1 className="mb-5 text-5xl font-bold">
                    {card.location || "Not Found"}
                  </h1>
                  <p className="mb-5">
                    {card.shortDescription || "No Description Found"}
                  </p>
                  <div className="flex justify-center gap-1">
                    <Link
                      to={"/"}
                      className="btn bg-blue-500 border-0 hover:bg-blue-600 text-white "
                    >
                      <FaArrowAltCircleLeft />
                      Go Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="container md:p-0 p-4  mt-5 mb-5 md:mx-auto">
              <div className="flex items-center flex-wrap gap-4">
                <div className="px-3 md:flex-1">
                  <h1 className="text-3xl font-semibold mb-2">
                    Welcome To {card.touristSpotName}, {card.location}{" "}
                  </h1>

                  <p className="text-justify">
                    Located by the calm ocean, this lovely spot has stunning
                    views of blue water and sandy shores that stretch for miles.
                    You'll hear birds chirping and palm trees swaying gently in
                    the breeze, making it a relaxing place to visit. Walk around
                    the small streets filled with cute shops and cafes serving
                    delicious local food. The atmosphere here is a mix of
                    laid-back beach vibes and interesting cultural experiences.
                    Discover hidden beaches and peaceful spots to relax in the
                    sun or try out water activities. When evening comes, the sky
                    turns colorful, creating a beautiful scene over the quiet
                    landscape. It's a perfect place for anyone looking to unwind
                    and enjoy nature's beauty.
                  </p>
                </div>
                <div className="flex-1 flex justify-center ">
                  <div className="shadow-xl flex justify-center rounded-2xl overflow-x-auto">
                    <table className="table table-fixed table-cell table-md border p-5">
                      {/* head */}
                      <thead>
                        <tr>
                          <th>Property</th>
                          <th>Details</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* row 1 */}
                        <tr className="hover">
                          <td>Total Visitors / Year</td>
                          <td>
                            {" "}
                            {formatViews(card.totalVisitorsPerYear)} / Year
                          </td>
                        </tr>
                        {/* row 2 */}
                        <tr className="hover">
                          <td>Season</td>
                          <td>{card.seasonality}</td>
                        </tr>
                        {/* row 3 */}
                        <tr className="hover">
                          <td>Travel Time</td>
                          <td>{card.travelTime} Days</td>
                        </tr>
                        {/* row 4 */}
                        <tr className="hover">
                          <td>Average Cost</td>
                          <td>${card.averageCost}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
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
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TouristSpotDetailsv2;
