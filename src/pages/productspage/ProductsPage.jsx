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
    aquariumSoilAndSubstrates: [],
    fertilizersAndTreatments: [],
    filtersAndFilterMedia: [],
    fishSeed: [],
    waterTreatmentAndMedicine: [],
  };

  const products = [
    { id: 10, name: "Black Angel", category: "Angel" },
    { id: 11, name: "Black Marbal Angel", category: "Angel" },
    { id: 12, name: "Blue Angel", category: "Angel" },
    { id: 13, name: "Panda Angel", category: "Angel" },
    { id: 14, name: "Platinum Angel", category: "Angel" },
    { id: 15, name: "Tri Color Angel", category: "Angel" },

    { id: 16, name: "Black Metal Cobra Guppy", category: "Guppy" },
    { id: 17, name: "Blue Grass Guppy", category: "Guppy" },
    { id: 18, name: "Blue Queen Guppy", category: "Guppy" },
    { id: 19, name: "Bumble Bee Guppy", category: "Guppy" },
    { id: 20, name: "Koi Tuxedo Guppy", category: "Guppy" },
    { id: 22, name: "Moscow Blue Guppy", category: "Guppy" },
    { id: 23, name: "Pink Guppy", category: "Guppy" },

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

    {
      id: 73,
      name: "Alternanthera Reineckii Pink",
      category: "Aquatic Plants",
    },
    { id: 74, name: "Amazon Frogbit", category: "Aquatic Plants" },
    { id: 75, name: "Anubias Barteri", category: "Aquatic Plants" },
    { id: 76, name: "Anubias Coffeefolia", category: "Aquatic Plants" },
    { id: 77, name: "Bacopa Caroliana", category: "Aquatic Plants" },
    { id: 78, name: "Bacopa Myriophylloides", category: "Aquatic Plants" },
    { id: 79, name: "Blyxa Japonica", category: "Aquatic Plants" },
    {
      id: 80,
      name: "Callicostella Prabaktiana Moss",
      category: "Aquatic Plants",
    },
    {
      id: 81,
      name: "Cryptocoryne Parva",
      category: "Aquatic Plants",
    },
    {
      id: 82,
      name: "Echinodorus Red Chameleon",
      category: "Aquatic Plants",
    },
    {
      id: 83,
      name: "Echinodorus Bleher",
      category: "Aquatic Plants",
    },
    {
      id: 84,
      name: "Echinodorus Osiris Rubra",
      category: "Aquatic Plants",
    },
    {
      id: 85,
      name: "Amazon Soil 3L",
      category: "Aquarium Soil & Substrates",
    },
    {
      id: 86,
      name: "APT JAZZ Root Tab",
      category: "Aquarium Soil & Substrates",
    },
    {
      id: 87,
      name: "Dymax Soil",
      category: "Aquarium Soil & Substrates",
    },
    {
      id: 88,
      name: "JBL ProFlora Root Ball",
      category: "Aquarium Soil & Substrates",
    },
    {
      id: 89,
      name: "Master Soil Normal",
      category: "Aquarium Soil & Substrates",
    },
    {
      id: 90,
      name: "Master Soil Super Powder",
      category: "Aquarium Soil & Substrates",
    },
    {
      id: 91,
      name: "Planatopia Maya Powder Sand",
      category: "Aquarium Soil & Substrates",
    },
    {
      id: 92,
      name: "Planatopia Root Tabs",
      category: "Aquarium Soil & Substrates",
    },
    {
      id: 93,
      name: "Planatopia Roots",
      category: "Aquarium Soil & Substrates",
    },
    {
      id: 94,
      name: "Planatopia Soil Powder",
      category: "Aquarium Soil & Substrates",
    },
    {
      id: 95,
      name: "Planatopia Soil",
      category: "Aquarium Soil & Substrates",
    },
    {
      id: 96,
      name: "Planatopia Ultra Clear",
      category: "Aquarium Soil & Substrates",
    },
    {
      id: 97,
      name: "Platinum Soil 3L",
      category: "Aquarium Soil & Substrates",
    },
    {
      id: 98,
      name: "Algae STOP 90",
      category: "Fertilizers & Treatments",
    },
    {
      id: 99,
      name: "APT Complete Fertilizer",
      category: "Fertilizers & Treatments",
    },
    {
      id: 100,
      name: "APT E Fertilizer",
      category: "Fertilizers & Treatments",
    },
    {
      id: 101,
      name: "APT Fix Lite",
      category: "Fertilizers & Treatments",
    },
    {
      id: 102,
      name: "APT Fix",
      category: "Fertilizers & Treatments",
    },
    {
      id: 103,
      name: "APT SKY",
      category: "Fertilizers & Treatments",
    },
    {
      id: 103,
      name: "APT SKY",
      category: "Fertilizers & Treatments",
    },
    {
      id: 104,
      name: "APT Zero Fertilizer",
      category: "Fertilizers & Treatments",
    },
    {
      id: 105,
      name: "AZOO Carbon Plus",
      category: "Fertilizers & Treatments",
    },
    {
      id: 106,
      name: "AZOO Plant Premium",
      category: "Fertilizers & Treatments",
    },
    {
      id: 107,
      name: "Planatopia Ultra Fertilizer",
      category: "Fertilizers & Treatments",
    },
    {
      id: 108,
      name: "UNIQUE AQUA Bio Fertilizer",
      category: "Fertilizers & Treatments",
    },
    {
      id: 109,
      name: "Bacteria House Ceramic Bar",
      category: "Filters & Filter Media",
    },
    {
      id: 110,
      name: "Black Sponge Sheet",
      category: "Filters & Filter Media",
    },
    {
      id: 111,
      name: "BOYU Active Carbon",
      category: "Filters & Filter Media",
    },
    {
      id: 112,
      name: "BOYU DGN 120A Canister Filter",
      category: "Filters & Filter Media",
    },
    {
      id: 113,
      name: "BOYU UF 230 Upper Filter",
      category: "Filters & Filter Media",
    },
    {
      id: 114,
      name: "BOYU WF 2015 Filter",
      category: "Filters & Filter Media",
    },
    {
      id: 115,
      name: "BOYU WF 2045 Filter",
      category: "Filters & Filter Media",
    },
    {
      id: 116,
      name: "APEX Fish Food",
      category: "Fish Seed",
    },
    {
      id: 117,
      name: "Hikari Algae Wafer",
      category: "Fish Seed",
    },
    {
      id: 118,
      name: "Hikari Cichlid Bio Gold",
      category: "Fish Seed",
    },
    {
      id: 119,
      name: "Hikari Discuss Bio Gold",
      category: "Fish Seed",
    },
    {
      id: 120,
      name: "Hikari Micro Pellets",
      category: "Fish Seed",
    },
    {
      id: 121,
      name: "Hikari Micro Wafers",
      category: "Fish Seed",
    },
    {
      id: 122,
      name: "Hikari Shrimp Cuisine",
      category: "Fish Seed",
    },
    {
      id: 123,
      name: "Hikari Sinking Carnivore Pellets",
      category: "Fish Seed",
    },
    {
      id: 124,
      name: "Hikari Sinking Wafer",
      category: "Fish Seed",
    },
    {
      id: 125,
      name: "Hikari Vibra Bites",
      category: "Fish Seed",
    },
    {
      id: 126,
      name: "Hikari Food Stick 57g",
      category: "Fish Seed",
    },
    {
      id: 127,
      name: "Planatopia Neobits",
      category: "Fish Seed",
    },
    {
      id: 128,
      name: "Planatopia NutriBites",
      category: "Fish Seed",
    },
    {
      id: 129,
      name: "Planatopia NutriBits",
      category: "Fish Seed",
    },
    {
      id: 130,
      name: "Planatopia NutriGold",
      category: "Fish Seed",
    },
    {
      id: 131,
      name: "Planatopia Shrimp Feast",
      category: "Fish Seed",
    },
    {
      id: 132,
      name: "Ultra Fresh Carnvorus Jumbo Sticks",
      category: "Fish Seed",
    },
    {
      id: 133,
      name: "Ultra Fresh Royal Cichlid Premium",
      category: "Fish Seed",
    },
    {
      id: 134,
      name: "Ultra Fresh Tropical Exellent Bites",
      category: "Fish Seed",
    },
    {
      id: 135,
      name: "Ultra Fresh Tropical Micro Pellets",
      category: "Fish Seed",
    },
    {
      id: 136,
      name: "Ammonia Test Kit",
      category: "Water Treatment & Medicine",
    },
    {
      id: 137,
      name: "Anti Chlorine",
      category: "Water Treatment & Medicine",
    },
    {
      id: 138,
      name: "Aquarium Salt",
      category: "Water Treatment & Medicine",
    },
    {
      id: 139,
      name: "AZOO Clorine Remover",
      category: "Water Treatment & Medicine",
    },
    {
      id: 140,
      name: "AZOO Plus Vitamins",
      category: "Water Treatment & Medicine",
    },
    {
      id: 141,
      name: "Hardness Test Kit",
      category: "Water Treatment & Medicine",
    },
    {
      id: 142,
      name: "Methylene Blue Fish Care",
      category: "Water Treatment & Medicine",
    },
    {
      id: 143,
      name: "Mini Water Test Kit",
      category: "Water Treatment & Medicine",
    },
    {
      id: 144,
      name: "Nitrate Test Kit",
      category: "Water Treatment & Medicine",
    },
    {
      id: 145,
      name: "NT Lab Anti White Spot Fungus",
      category: "Water Treatment & Medicine",
    },
    {
      id: 146,
      name: "NT Lab Fluke and Wormer",
      category: "Water Treatment & Medicine",
    },
    {
      id: 147,
      name: "pH Broad Test Kit",
      category: "Water Treatment & Medicine",
    },

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
    if (
      selectedCategory === "aquariumSoilAndSubstrates" &&
      selectedSubcategory !== "all"
    ) {
      return product.category === "Aquarium Soil & Substrates";
    }
    if (
      selectedCategory === "fertilizersAndTreatments" &&
      selectedSubcategory !== "all"
    ) {
      return product.category === "Fertilizers & Treatments";
    }
    if (
      selectedCategory === "filtersAndFilterMedia" &&
      selectedSubcategory !== "all"
    ) {
      return product.category === "Filters & Filter Media";
    }
    if (selectedCategory === "fishSeed" && selectedSubcategory !== "all") {
      return product.category === "Fish Seed";
    }
    if (
      selectedCategory === "waterTreatmentAndMedicine" &&
      selectedSubcategory !== "all"
    ) {
      return product.category === "Water Treatment & Medicine";
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
          <AnimatedButton
            onClick={() => handleCategoryChange("aquariumSoilAndSubstrates")}
          >
            Aquarium Soil & Substrates
          </AnimatedButton>
          <AnimatedButton
            onClick={() => handleCategoryChange("fertilizersAndTreatments")}
          >
            Fertilizers & Treatments
          </AnimatedButton>
          <AnimatedButton
            onClick={() => handleCategoryChange("filtersAndFilterMedia")}
          >
            Filters & Filter Media
          </AnimatedButton>
          <AnimatedButton onClick={() => handleCategoryChange("fishSeed")}>
            Fish Seed
          </AnimatedButton>
          <AnimatedButton
            onClick={() => handleCategoryChange("waterTreatmentAndMedicine")}
          >
            Water Treatment & Medicine
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
