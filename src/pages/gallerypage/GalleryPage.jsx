import React from "react";
import { animated, useSpring } from "@react-spring/web";

import "./gallerypage.css";

import ScrollReveal from "../../components/scrollreveal/ScrollReveal";
import guppy1 from "../../assets/images/productspage/ornamental fish/molly/orangelyretailbaloonmolly.jpg";
import guppy2 from "../../assets/images/productspage/ornamental fish/angel/blackangel.jpg";
import guppy3 from "../../assets/images/productspage/ornamental fish/sword tail/blackswordtail.jpg";
import Tank from "../../components/tank/Tank";

const GalleryPage = () => {
  return (
    <div className="gallery-page">
      <Tank />
      <section className="company-overview">
        <h1>Growth, Environment & Process</h1>
        <br />
        <p>
          • Aqua Bloom Fish Farm is located in an eco-friendly green environment
          with pure non polluted waters to grow and breed quality fish
          throughout the year.
        </p>
        <p>
          • We always use high quality naturalistic fish food while monitoring
          all the processes of fish life in order to get a quality and healthy
          fishes.
        </p>
        <p>
          • We have a competent and well experienced workforce to support our
          production process.
        </p>
        <p>• We have an NPD section to produce new fish varieties.</p>
        <p>
          • We have a healthy breeding section, nature-oriented Nursery section,
          monitored Growing section, quarantine section, NPD and packing center
          to maintain our quality standards.
        </p>
        <p>
          • Since we produce more varieties in larger quantities, we can offer
          competitive rates to our buyers.
        </p>
      </section>
      <ScrollReveal>
        <section className="global-reach-gallery">
          <img src={guppy1} alt="guppy1" />
          <img src={guppy2} alt="guppy2" />
          <img src={guppy3} alt="guppy3" />
        </section>
      </ScrollReveal>
    </div>
  );
};

export default GalleryPage;
