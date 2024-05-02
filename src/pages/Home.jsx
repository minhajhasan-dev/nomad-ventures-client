import Banner from "../components/Banner";
import CountryCard from "../components/CountryCard";
import TouristSpotCard from "../components/TouristSpotCard";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TouristSpotCard></TouristSpotCard>
      <CountryCard></CountryCard>
    </div>
  );
};

export default Home;
