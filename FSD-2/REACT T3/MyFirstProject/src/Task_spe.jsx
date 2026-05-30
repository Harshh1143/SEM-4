import { useState } from "react";
import "./Task_spe.css";

const categories = ["All", "Samsung", "Vivo", "Oneplus"];

const mobiles = [
  {
    id: 1,
    brand: "Samsung",
    name: "Galaxy S24 Ultra",
    price: "Rs. 1,29,999",
    color: "#2563eb",
    accent: "#93c5fd",
  },
  {
    id: 2,
    brand: "Samsung",
    name: "Galaxy A55",
    price: "Rs. 39,999",
    color: "#0f766e",
    accent: "#99f6e4",
  },
  {
    id: 3,
    brand: "Vivo",
    name: "Vivo V30 Pro",
    price: "Rs. 41,999",
    color: "#7c3aed",
    accent: "#ddd6fe",
  },
  {
    id: 4,
    brand: "Vivo",
    name: "Vivo Y200",
    price: "Rs. 21,999",
    color: "#db2777",
    accent: "#fbcfe8",
  },
  {
    id: 5,
    brand: "Oneplus",
    name: "Oneplus 12",
    price: "Rs. 64,999",
    color: "#dc2626",
    accent: "#fecaca",
  },
  {
    id: 6,
    brand: "Oneplus",
    name: "Oneplus Nord CE4",
    price: "Rs. 24,999",
    color: "#ea580c",
    accent: "#fed7aa",
  },
];

function phoneImage({ brand, name, color, accent }) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 420">
      <rect width="520" height="420" rx="34" fill="#f8fafc"/>
      <rect x="106" y="36" width="308" height="348" rx="42" fill="${color}"/>
      <rect x="128" y="60" width="264" height="304" rx="30" fill="#0f172a"/>
      <rect x="145" y="82" width="230" height="250" rx="22" fill="${accent}"/>
      <circle cx="260" cy="348" r="8" fill="#e2e8f0"/>
      <circle cx="178" cy="116" r="17" fill="#020617" opacity="0.78"/>
      <circle cx="222" cy="116" r="17" fill="#020617" opacity="0.78"/>
      <text x="260" y="220" text-anchor="middle" font-family="Arial, sans-serif" font-size="35" font-weight="800" fill="#0f172a">${brand}</text>
      <text x="260" y="260" text-anchor="middle" font-family="Arial, sans-serif" font-size="20" font-weight="700" fill="#334155">${name}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export default function Task_spe() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredMobiles =
    activeCategory === "All"
      ? mobiles
      : mobiles.filter((mobile) => mobile.brand === activeCategory);

  return (
    <main className="taskSpePage">
      <section className="taskSpeHeader">
        <p className="taskSpeEyebrow">Mobile Store</p>
        <h1 className="taskSpeTitle">Filter Mobiles By Brand</h1>
      </section>

      <div className="taskSpeFilters" aria-label="Mobile brand filters">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`taskSpeFilterButton ${
              activeCategory === category ? "taskSpeFilterButtonActive" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <section className="taskSpeGrid">
        {filteredMobiles.map((mobile) => (
          <article className="taskSpeCard" key={mobile.id}>
            <img
              className="taskSpeImage"
              src={phoneImage(mobile)}
              alt={`${mobile.name} mobile`}
            />
            <div className="taskSpeCardBody">
              <span className="taskSpeBrand">{mobile.brand}</span>
              <h2 className="taskSpeMobileName">{mobile.name}</h2>
              <p className="taskSpePrice">{mobile.price}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
