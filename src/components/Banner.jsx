import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper md:h-[500px] h-96 mb-10"
      >
        <SwiperSlide>
          {" "}
          <div
            className="hero md:h-[500px] h-96 "
            style={{
              backgroundImage:
                "url(https://i.pinimg.com/originals/b9/9a/3b/b99a3ba4961fb0cdf7ec7c0571d6af81.jpg)",
            }}
          >
            <div className="background-blend-mode: darken"></div>
            <div
              data-aos="flip-right"
              data-aos-duration="800"
              className="hero-content text-center text-neutral-content"
            >
              <div className="max-w-xl">
                <h1 className="mb-5 text-white md:text-5xl text-3xl font-poppins font-bold">
                  Cox's Bazar: Where Serenity Meets the Sea
                </h1>
                <p className="mb-5 text-white font-semibold md:text-lg">
                  Discover Cox's Bazar, home to the world's longest natural
                  sandy beach. Immerse yourself in local culture, savor seafood
                  delights, and enjoy thrilling water sports amidst stunning
                  sunsets.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div
            className="hero md:h-[500px] h-96"
            style={{
              //   backgroundImage: "url(https://i.ibb.co/6ZVPnDh/banner.jpg)",
              backgroundImage:
                "url(https://www.earth-essentials.co.uk/wp-content/uploads/2018/02/pexels-photo-672358-1.jpeg)",
            }}
          >
            <div className="background-blend-mode: darken"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-xl">
                <h1 className="mb-5 text-white md:text-5xl text-3xl font-poppins font-bold">
                  Bangkok: Urban Excitement
                </h1>
                <p className="mb-5 text-white font-semibold md:text-lg">
                  Bangkok, Thailand's vibrant capital, blends ancient traditions
                  with modern flair. Explore ornate temples, lively markets, and
                  indulge in delicious street food, all while experiencing its
                  energetic nightlife.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div
            className="hero md:h-[500px] h-96"
            style={{
              backgroundImage:
                "url(https://cdn.trip14.com/trip14.com_a075a248c3acb07133741c26ddad6dd7.1633750624156)",
            }}
          >
            <div className="background-blend-mode: darken"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-xl">
                <h1 className="mb-5 text-white md:text-5xl text-3xl font-poppins font-bold">
                  Kuala Lumpur: Culture & Innovation
                </h1>
                <p className="mb-5 text-white font-semibold md:text-lg">
                  Kuala Lumpur, Malaysia's dynamic capital, offers a mix of
                  cultures and innovation. Visit iconic landmarks like the
                  Petronas Twin Towers, explore bustling markets, and savor
                  diverse cuisines in this cosmopolitan city.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div
            className="hero md:h-[500px] h-96"
            style={{
              backgroundImage:
                "url(https://allimages.sgp1.digitaloceanspaces.com/wikilaptopcom/2021/01/1610013432_654_Tong-hop-nhung-hinh-anh-dep-Viet-Nam-chat-luong.jpg)",
            }}
          >
            <div className="background-blend-mode: darken"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-xl">
                <h1 className="mb-5 text-white md:text-5xl text-3xl font-poppins font-bold">
                  Ha Long Bay: Nature's Majesty
                </h1>
                <p className="mb-5 text-white font-semibold md:text-lg">
                  Ha Long Bay, a UNESCO World Heritage Site, is a mesmerizing
                  seascape of limestone islands. Cruise through this natural
                  wonder, admire hidden caves, and soak in the beauty of emerald
                  waters.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div
            className="hero md:h-[500px] h-96"
            style={{
              //   backgroundImage: "url(https://i.ibb.co/6ZVPnDh/banner.jpg)",
              backgroundImage:
                "url(https://1agenstvo.ru/800/600/https/telegra.ph/file/ddfb3ef4af4ea5b845687.jpg)",
            }}
          >
            <div className="background-blend-mode: darken"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-xl">
                <h1 className="mb-5 text-white md:text-5xl text-3xl font-poppins font-bold">
                  Angkor Wat: Ancient Wonders
                </h1>
                <p className="mb-5 text-white font-semibold md:text-lg">
                  Angkor Wat, the world's largest religious monument, reveals
                  Cambodia's rich history. Explore magnificent temple ruins
                  amidst lush jungles, and witness stunning sunrise views over
                  this archaeological gem.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
