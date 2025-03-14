import { filters, skills } from "./skillsData";
import { useState, useRef } from "react";
import "./skills.css";
import { capitalize } from "../../utilities/stringUtilities";

function SkillCard({ name, Icon, color }) {
  return (
    <div className="skill-card-container">
      <div className="icon" style={{ color }}>
        {Icon && <Icon />}
      </div>
      <div className="name roboto-font-filer-explore-text">{name}</div>
    </div>
  );
}

function FilterTab({
  filterName,
  filterSkillsCards,
  setActiveButton,
  activeButton,
}) {
  return (
    <button
      className={`filter-button ${
        activeButton.toLowerCase() === filterName.toLowerCase() ? "active" : ""
      }`}
      onClick={(e) => {
        filterSkillsCards();
        setActiveButton();
      }}
    >
      <span className="filter-button-name">{filterName}</span>
    </button>
  );
}

function filterSkillCards(skills, filterCriteria, setSkillCards) {
  if (filterCriteria === "all") {
    setSkillCards(skills);
    return;
  }

  setSkillCards(() => {
    const filterCards = skills.filter(
      (skill) => skill.category === filterCriteria
    );

    return filterCards;
  });
}

export default function Skills() {
  const [skillCards, setSkillCards] = useState(skills);
  const [activeButton, setActiveButton] = useState("all");

  console.log(skillCards);

  return (
    <div className="skills-container">
      <div className="filter-section">
        {filters.map((filter) => (
          <FilterTab
            key={filter.filter}
            filterName={capitalize(filter.filter)}
            activeButton={activeButton}
            filterSkillsCards={() =>
              filterSkillCards(skills, filter.filter, setSkillCards)
            }
            setActiveButton={() => {
              setActiveButton(filter.filter);
            }}
          />
        ))}
      </div>
      <div className="skills-card-section">
        {skillCards.map((skillCard) => (
          <SkillCard
            name={skillCard.name}
            Icon={skillCard.icon}
            key={skillCard.name}
            color={skillCard.color}
          />
        ))}
      </div>
    </div>
  );
}
