import HeroContent from "./HeroContent/HeroContent";
import HeroImage from "./HeroImage/HeroImage";
import NavigationBar from "./NavigationBar/NavigationBar";

const Header = () => {
  const heroContent = {
    title: "Rex Goliath",
    subtitle: "His Royal Majesty is back.",
    imageUrl: "/rex-goliath-logo.png",
    description: `America's most unhinged rooster is out of retirement, and this time? He's mad
            as hell.  Experience the unapologetic flavor burst of Rex Goliath.`,
  };

  return (
    <header className="hero">
      <HeroImage />
      <NavigationBar />
      <HeroContent
        title={heroContent.title}
        subtitle={heroContent.subtitle}
        imageUrl={heroContent.imageUrl}
        description={heroContent.description}
      />
    </header>
  );
};

export default Header;
