import React from "react";
import { animated } from "@react-spring/web";
import "./aboutPage.css";
import { useCountUp } from "../../hooks/usecountup/useCountUp";
import AnimatedPage from "../../components/animatedpage/AnimatedPage";
import ScrollReveal from "../../components/scrollreveal/ScrollReveal";
import guppy1 from "../../assets/images/productspage/ornamental fish/guppy/blackmetalcobraguppy.jpg";
import guppy2 from "../../assets/images/productspage/ornamental fish/guppy/bluegrassguppy.jpg";
import guppy3 from "../../assets/images/productspage/ornamental fish/guppy/bluequeenguppy.jpg";

import Tank from "../../components/tank/Tank";

const AboutPage = () => {
  const { number: employeesCount, ref: employeesRef } = useCountUp(5);
  const { number: facilitiesCount, ref: facilitiesRef } = useCountUp(100);
  const { number: breedsCount, ref: breedsRef } = useCountUp(50);

  return (
    <AnimatedPage>
      <div className="about">
        <Tank />

        <ScrollReveal>
          <section className="introduction">
            <h1>WHAT WE DO</h1>
            <p>
              Aqua Bloom Fish Farm has placed more thought and focuses on
              producing better quality of breeds that enables colorful, healthy
              strong varieties of fishes. Our farm has the capacity to provide
              better, larger quantities of fish that are based on market
              research and demand.
            </p>
            <p>
              Our popular breeds sought out in export market are Guppy varieties
              (over 50) and numerous varieties of Platy, Gourami, Tetra, Koi
              Carp, Betta, and Oscar are popular addition to the list.
            </p>
            <br />
            <p>
              To ensure the longevity and health of these fishes, the farm takes
              all necessary precautions,safety measures and hygienic methods.
              The farm is fitted with top notch breading facilities that in turn
              yields best quality fishes is something one has to work hard to
              endure a healthy business growth and be able to sustain in the
              industry at the top is no small deed. In short, we comply with all
              necessary standards and compliance that are required to follow as
              expected by global standards.
            </p>
            <br />
            <p>
              The Farm is run on natural ground, bred and natured naturally in
              an open-air environment, fed and cared by staff that is well
              trained. The feed of these fishes the highest quality fish food
              and cared for to obtain the best possible results. All our fishes
              are healthy, has a history of longevity and are pleasing to the
              eyes. We value our relationships with current and future customers
              and hope to communicate our appreciation to them through our
              outstanding, guaranteed product quality, personal service and
              efficient delivery. Our commitment to our customers will be
              reflected through honest and responsible business dealings. Our
              Farm offers a wide range of Aquascaping items with best quality,
              together with the greatest support and pricing in the industry.
            </p>
            <br />
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="stats">
            <div className="stat-item" ref={facilitiesRef}>
              <h3>Breeding Facilities</h3>
              <animated.span>1000+</animated.span>
            </div>
            <div className="stat-item" ref={breedsRef}>
              <h3>Fish Breeds</h3>
              <animated.span>200+</animated.span>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="global-reach">
            <img src={guppy1} alt="guppy1" />
            <img src={guppy2} alt="guppy2" />
            <img src={guppy3} alt="guppy3" />
          </section>
        </ScrollReveal>
      </div>
    </AnimatedPage>
  );
};

export default AboutPage;
