import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./homepage.css";
import { animated } from "@react-spring/web";
import AnimatedPage from "../../components/animatedpage/AnimatedPage";
import ScrollReveal from "../../components/scrollreveal/ScrollReveal";
import slider1 from "../../assets/images/homepagesliderimages/slider1.jpg";
import slider2 from "../../assets/images/homepagesliderimages/slider2.jpg";
import slider3 from "../../assets/images/homepagesliderimages/slider3.jpg";
import slider4 from "../../assets/images/homepagesliderimages/slider4.jpg";
import slider5 from "../../assets/images/homepagesliderimages/slider5.jpg";
import slider6 from "../../assets/images/homepagesliderimages/slider6.jpg";
import slider7 from "../../assets/images/homepagesliderimages/slider7.jpg";
import slider8 from "../../assets/images/homepagesliderimages/slider8.jpg";
import Home from "../../assets/images/homepagesliderimages/Home.webp";
import MainImage from "../../assets/images/homepagesliderimages/MainImage.png";

const HomePage = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const images = document.querySelectorAll(".animated-divider img");
      images.forEach((img) => {
        const rect = img.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        img.style.setProperty("--x", x);
        img.style.setProperty("--y", y);
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const sliderImages = [
    { src: slider1, alt: "Slider 1" },
    { src: slider2, alt: "Slider 2" },
    { src: slider3, alt: "Slider 3" },
    { src: slider4, alt: "Slider 4" },
    { src: slider5, alt: "Slider 5" },
    { src: slider6, alt: "Slider 6" },
    { src: slider7, alt: "Slider 7" },
    { src: slider8, alt: "Slider 8" },
  ];

  return (
    <AnimatedPage>
      <div className="home">
        <section className="hero">
          <Slider {...sliderSettings}>
            {sliderImages.map((img, index) => (
              <div key={index}>
                <img src={img.src} alt={img.alt} />
              </div>
            ))}
          </Slider>
          <div className="middle-div">
            <h2>Welcome to Aqua Bloom Fish Farm</h2>
            <div className="middle-div-h3">
              <h3>Breeder and Supplier of Fresh Water Ornamental Fish</h3>
            </div>
          </div>
        </section>

        <ScrollReveal>
          <section className="mission-vision">
            <div className="mission">
              <h2>OUR MISSION</h2>
              <p>
                We always focus on the quality of our fish in all processes of
                fish breeding to packaging, and we have an eco-friendly and
                hygienic environment to maintain our quality standards to come
                out with colorful, healthy and stronger fish lives. We have
                developed new fish varieties and through continuous research and
                development we focus on offering new fish species to our buyers.
              </p>
            </div>
            <div className="vision">
              <h2>OUR VISION</h2>
              <p>
                To become the most recognized fish farm breeder and supplier by
                continuously offering the highest quality ornamental fish to the
                market.
              </p>
            </div>
          </section>

          <section className="mission-vision">
            <div className="core-val">
              <h1>CORE VALUES</h1>
              <br />
              <br />
              <h3>
                Aqua Bloom Fish Farm values and respects it's business ethic and
                customer centric practices to perform a trade with
              </h3>
              <br />
              <p>→ INTEGRITY</p>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;Know and do what is right.</span>
              <p>→ RESPECT </p>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;Treating others, the way you want to be
                treated.
              </span>
              <p>→ RESPONSIBILITY</p>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;Embrace opportunities to contribute.
              </span>
              <p>→ CUSTOMER-CENTRIC</p>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;Be customer oriented, adhering to their
                requirements.
              </span>
              <p>→ LEADERSHIP </p>
              <span>
                &nbsp;&nbsp;&nbsp;&nbsp;To perform and deal with the common
                good.
              </span>
            </div>
            <div className="core-val-img">
              <animated.img src={Home} alt={"home"} className="animated-img" />
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="about-preview">
            <h2>About Aqua Bloom Fish Farm</h2>
            <p>
              Aqua Bloom Fish Farm has placed more thought and focuses on
              producing better quality of breeds that enables colorful, healthy
              strong varieties of fishes. Our farm has the capacity to provide
              better, larger quantities of fish that are based on market
              research and demand.
            </p>
            <br />
            <p></p>
          </section>
        </ScrollReveal>
        <ScrollReveal>
          <section className="main-image">
            <img src={MainImage} alt="main" />
          </section>
        </ScrollReveal>
      </div>
    </AnimatedPage>
  );
};

export default HomePage;
