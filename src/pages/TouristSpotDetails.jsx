import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TouristSpotDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/cards")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.find((item) => item._id === id) ? <p>Hello</p> : <p>Hi</p>}
        </div>
      </div>
    </>
  );
};

export default TouristSpotDetails;
