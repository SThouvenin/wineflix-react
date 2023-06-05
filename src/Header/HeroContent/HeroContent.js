const HeroContent = ({ title, imageUrl, subtitle, description }) => {
  return (
    <div className="hero-content">
      <h2>
        <img alt={title} src={imageUrl} />
      </h2>
      <h3>{subtitle}</h3>
      <p>{description}</p>
    </div>
  );
};

export default HeroContent;
