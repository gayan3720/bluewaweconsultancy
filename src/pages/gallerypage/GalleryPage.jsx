import React, { useState } from "react";
import { animated, useSpring, useTrail } from "@react-spring/web";
import GalleryModal from "../../components/gallerymodal/GalleryModal";
import "./gallerypage.css";
import fish1 from "../../assets/images/fish1.jpg";
import sustainable from "../../assets/images/sustainable.jpg";

const galleryItems = [
  {
    id: 1,
    src: fish1,
    title: "Aquatic Life",
    description: "Stunning aquatic life at our farms.",
  },
  {
    id: 2,
    src: sustainable,
    title: "Sustainable Practices",
    description: "Our sustainable farming methods.",
  },
  {
    id: 3,
    src: fish1,
    title: "State-of-the-Art Facilities",
    description: "Our advanced aquaculture facilities.",
  },
  // Add more images as needed
];

const GalleryPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

  const trail = useTrail(galleryItems.length, {
    opacity: 1,
    transform: "translate3d(0,0,0)",
    from: { opacity: 0, transform: "translate3d(0,40px,0)" },
    delay: 300,
  });

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  return (
    <div className="gallery-page">
      <animated.div style={fadeIn} className="colorful-bar-gallery">
        <h1>GALLERY</h1>
      </animated.div>

      <section className="gallery-grid">
        {trail.map((animation, index) => (
          <animated.div
            key={galleryItems[index].id}
            style={animation}
            className="gallery-item"
            onClick={() => openModal(galleryItems[index])}
          >
            <img
              src={galleryItems[index].src}
              alt={galleryItems[index].title}
            />
            <div className="overlay">
              <h3>{galleryItems[index].title}</h3>
            </div>
          </animated.div>
        ))}
      </section>

      <section className="company-overview">
        <h2>Blue Wave Aqua Farm</h2>
        <br />
        <p>
          <strong>Industry Overview:</strong>
          <br />
          The global fresh water aquaculture market is growing, driven by
          increasing demand for fish protein and sustainable farming practices.
        </p>
        <p>
          <strong>Target Market:</strong>
          <br />
          We distribute our live aquatic products chiefly to Local and regional
          customers. Trade experience of 4 years have endowed us with the
          capability of delivering a superior and excellent service to our
          valued customers who remained with us for over four years with trust.
        </p>
        <p>
          <strong>Competitive Landscape:</strong>
          <br />
          Competitors include other freshwater aqua farms and traditional
          fisheries. Our edge lies in our advanced technology, sustainable
          practices, and high quality product offerings.
        </p>
        <p>
          <strong>Facilities:</strong>
          <br />
          <p>
            Fish tanks - State-of-the-art RAS tanks for optimal fish growth and
            water quality.
          </p>
          <p>
            {" "}
            Water filtration systems - Advanced filtration to maintain water
            quality and reduce waste.
          </p>
          <p>
            {" "}
            Feed systems - Automated feeding systems for efficient and
            consistent fish nutrition.
          </p>
        </p>
        <p>
          <strong>Technology:</strong>
          <br />
          <p>
            Utilization of loT sensors for real time monitoring of water
            parameters and fish health.
          </p>
          <p> Software for inventory management and production tracking.</p>
        </p>
        <p>
          <strong>Sustainability Practices:</strong>
          <br />
          <p>Closed-loop water systems to minimize water usage.</p>
          <p>
            {" "}
            Environmentally friendly waste management solutions and recycling
            programs.
          </p>
        </p>
        <p>
          <strong>Revenue Streams:</strong>
          <br />
          <p>
            Sales of fingerling freshwater fish, ornamental fish and aquatic
            plants.
          </p>
          <p>
            {" "}
            Partnerships and contracts with local distributors and retailers.
          </p>
        </p>
        <p>
          <strong>Financial Performance:</strong>
          <br />
          <p>Annual revenue.</p>
          <p>Profit margins.</p>
        </p>
        <p>
          <strong>Funding Requirement:</strong>
          <br />
          <p>
            Seeking investment for expansion, technology upgrades, and new
            product development.
          </p>
        </p>
      </section>

      {selectedItem && (
        <GalleryModal item={selectedItem} onClose={closeModal} />
      )}
    </div>
  );
};

export default GalleryPage;
