import DrinkButton from "../DrinkButton/DrinkButton";
import MoreInfoButton from "../MoreInfoButton/MoreInfoButton";

const HeroContent = ({ title, imageUrl, subtitle, description }) => {
  return (
    <div className="hero-content">
      <h2>
        <img alt={title} src={imageUrl} />
      </h2>
      <h3>{subtitle}</h3>
      <p>{description}</p>
          <ul className="controls">
            <li>
              <DrinkButton />
            </li>
            <li>
              <MoreInfoButton />
            </li>
          </ul>
        </div>
  );
};

export default HeroContent;
