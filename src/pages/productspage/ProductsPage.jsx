import React, { useState } from "react";
import "./productpage.css";
import { useSpring, animated } from "react-spring";
import AnimatedButton from "../../components/animatedbutton/AnimatedButton";
import AnimatedPage from "../../components/animatedpage/AnimatedPage";
import Modal from "../../components/modal/Modal";
import { productImages } from "../../product-images";

export const filterImage = (images, name) => {
  const result =
    images !== null &&
    images !== undefined &&
    Object.keys(images)
      .filter((key) => key.includes(name.replace(/\s+/g, "")))
      .reduce((cur, key) => {
        return Object.assign(cur, { [key]: images[key] });
      }, {});

  const keys = Object.keys(result);
  const value = result[keys[0]];

  return value;
};

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const [isOrnamentalFishModalOpen, setIsOrnamentalFishModalOpen] =
    useState(false);

  const categories = {
    ornamentalFish: [
      { name: "Guppy", description: "Ornamental Fish" },
      { name: "Gourami", description: "Ornamental Fish" },
      { name: "Betta", description: "Ornamental Fish" },
      { name: "Oscar", description: "Ornamental Fish" },
      { name: "Koi Carps", description: "Ornamental Fish" },
      { name: "Platy", description: "Ornamental Fish" },
      { name: "Tetra", description: "Ornamental Fish" },
    ],
    aquaticPlants: [
      { name: "Floating Plants", description: "Aquatic Plants" },
      { name: "Submerged Plants", description: "Aquatic Plants" },
      { name: "Emergent Plants", description: "Aquatic Plants" },
    ],
  };

  const products = [
    { id: 10, name: "Black Angel", category: "Angel" },
    { id: 11, name: "Black Marbal Angel", category: "Angel" },
    { id: 12, name: "Blue Angel", category: "Angel" },
    { id: 13, name: "Panda Angel", category: "Angel" },
    { id: 14, name: "Platinum Angel", category: "Angel" },
    { id: 15, name: "Tri Color Angel", category: "Angel" },

    { id: 16, name: "Black Metal Cobra Guppy", category: "Gappi" },
    { id: 17, name: "Blue Grass Guppy", category: "Gappi" },
    { id: 18, name: "Blue Queen Guppy", category: "Gappi" },
    { id: 19, name: "Bumble Bee Guppy", category: "Gappi" },
    { id: 20, name: "Koi Tuxedo Guppy", category: "Gappi" },
    { id: 22, name: "Moscow Blue Guppy", category: "Gappi" },
    { id: 23, name: "Pink Guppy", category: "Gappi" },

    { id: 24, name: "Black Baloon Lyretail Molly", category: "Molly" },
    { id: 25, name: "Black Lyretail Molly", category: "Molly" },
    { id: 26, name: "Dalmation Lyretail Molly", category: "Molly" },

    { id: 28, name: "Orange Lyretail Baloon Molly", category: "Molly" },
    { id: 29, name: "Platinum Lyretail Molly", category: "Molly" },

    { id: 30, name: "Blue Mickey Mouse Platy", category: "Platy" },

    { id: 32, name: "Red Mickey Mouse Platy", category: "Platy" },
    { id: 33, name: "Blue Mickey Mouse Platy", category: "Platy" },
    { id: 35, name: "Red Tuxedo Platy", category: "Platy" },
    { id: 36, name: "Red Wag Platy", category: "Platy" },

    { id: 37, name: "Berlin Swordtail", category: "Sword-Tail" },
    { id: 38, name: "Black Swordtail", category: "Sword-Tail" },
    { id: 39, name: "Golden Tuxedo Swordtail", category: "Sword-Tail" },
    { id: 40, name: "Green Swordtail", category: "Sword-Tail" },
    { id: 41, name: "Kahaku Swordtail", category: "Sword-Tail" },
    { id: 42, name: "Red Cap Swordtail", category: "Sword-Tail" },
    { id: 43, name: "Red Swordtail", category: "Sword-Tail" },
    { id: 44, name: "Red Wag Swordtail", category: "Sword-Tail" },

    { id: 47, name: "Dark Green Tetra", category: "Tetra" },
    { id: 48, name: "Electric Green Glow Tetra", category: "Tetra" },
    { id: 49, name: "Red Glow Tetra", category: "Tetra" },
    { id: 50, name: "Yellow Glow Tetra", category: "Tetra" },

    { id: 51, name: "Anubias Barteri", category: "Aquatic Plants" },
    { id: 52, name: "Rotella Aquatic Plant", category: "Aquatic Plants" },
    { id: 53, name: "Staurogyne Repense", category: "Aquatic Plants" },

    { id: 54, name: "Honey Gourami", category: "Gourami" },
    { id: 55, name: "Neon Blue Dwarf Gourami", category: "Gourami" },
    { id: 56, name: "Pearl Gourami", category: "Gourami" },
    { id: 57, name: "Red Dwarf Gourami", category: "Gourami" },
    { id: 58, name: "Red Honey Gourami", category: "Gourami" },

    { id: 59, name: "Butterfly Betta", category: "Betta" },
    { id: 60, name: "By Colours Betta", category: "Betta" },
    { id: 61, name: "Marble Betta", category: "Betta" },
    { id: 62, name: "Solid Color Betta", category: "Betta" },

    { id: 63, name: "Albino Oscar", category: "Oscar" },
    { id: 64, name: "Lemon Oscar", category: "Oscar" },
    { id: 65, name: "Red Oscar", category: "Oscar" },
    { id: 66, name: "Wild Oscar", category: "Oscar" },

    { id: 67, name: "Asagi Koi", category: "Koi Carps" },
    { id: 68, name: "Bekko Koi", category: "Koi Carps" },
    { id: 69, name: "Kahaku Koi", category: "Koi Carps" },
    { id: 70, name: "Koromo Koi", category: "Koi Carps" },
    { id: 71, name: "Showa Sanshoku Koi", category: "Koi Carps" },
    { id: 72, name: "Tancho Koi", category: "Koi Carps" },

    // More products here...
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    if (category === "ornamentalFish") {
      setIsOrnamentalFishModalOpen(true);
    } else {
      setSelectedSubcategory("");
      setIsOrnamentalFishModalOpen(false);
    }
  };

  const handleSubcategoryChange = (subcategory) => {
    setSelectedSubcategory(subcategory);
    setIsOrnamentalFishModalOpen(false);
  };

  const filteredProducts = products.filter((product) => {
    if (selectedCategory === "all") return true;

    if (
      selectedCategory === "ornamentalFish" &&
      selectedSubcategory !== "all"
    ) {
      return product.category === selectedSubcategory;
    }

    if (selectedCategory === "aquaticPlants" && selectedSubcategory !== "all") {
      return product.category === "Aquatic Plants";
    }

    return categories[selectedCategory]
      .map((sub) => sub.name)
      .includes(product.category);
  });

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  // Spring animation for h2 headers
  const headerSpring = useSpring({
    to: { opacity: 1, transform: "translateY(0)" },
    from: { opacity: 0, transform: "translateY(-20px)" },
    config: { tension: 200, friction: 20 },
  });

  return (
    <AnimatedPage>
      <div className="product-page">
        <animated.div style={fadeIn} className="colorful-bar-product">
          <h1>OUR PRODUCTS</h1>
        </animated.div>
        <div className="category-filter">
          <AnimatedButton onClick={() => handleCategoryChange("all")}>
            All
          </AnimatedButton>

          <AnimatedButton
            onClick={() => handleCategoryChange("ornamentalFish")}
          >
            Ornamental Fish
          </AnimatedButton>
          <AnimatedButton onClick={() => handleCategoryChange("aquaticPlants")}>
            Aquatic Plants
          </AnimatedButton>
        </div>

        <Modal
          isOpen={isOrnamentalFishModalOpen}
          onClose={() => setIsOrnamentalFishModalOpen(false)}
        >
          <h3>Select a Subcategory:</h3>
          <ul className="subcategory-list">
            {categories.ornamentalFish.map((sub, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    name="subcategory"
                    value={sub.name}
                    onChange={() => handleSubcategoryChange(sub.name)}
                  />
                  {sub.name}
                </label>
              </li>
            ))}
          </ul>
        </Modal>

        <div className="category-details">
          <animated.h2 style={headerSpring}>
            {selectedCategory === "ornamentalFish"
              ? "Ornamental Fish"
              : selectedCategory === "aquaticPlants"
              ? "Aquatic Plants"
              : "All Products"}
          </animated.h2>
          {/* {selectedCategory !== "all" && (
              <ul>
                {categories[selectedCategory].map((sub, index) => (
                  <li key={index}>
                    <strong>{sub.name}:</strong> {sub.description}
                  </li>
                ))}
              </ul>
            )} */}
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={filterImage(
                  productImages,
                  product.name.toLowerCase().trim()
                )}
                alt={product.name}
              />
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default ProductsPage;
