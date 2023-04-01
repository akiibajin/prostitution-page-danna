import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import bannerOne from "../../assets/imgs/Principal-banner.jpg";
import bannerTwo from "../../assets/imgs/principal-banner-2.jpg";
import bannerThree from "../../assets/imgs/principal-banner-3.jpg";
import bannerFour from "../../assets/imgs/principal-banner-4.jpg";

const Layout = () => {
  const banners = [bannerOne, bannerTwo, bannerThree, bannerFour];
  return (
    <Fragment>
      <Header key={"header"} />
      <div className="swiperContainer__home">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          loop
          onInit={(swiper) => swiper.autoplay.start()}
          autoplay={{
            delay: 5000,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            type: "progressbar",
          }}
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner}>
              <img src={banner} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Outlet />
      <Footer key={"footer"} />
    </Fragment>
  );
};

export default Layout;
