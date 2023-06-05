import Avatar from "./Avatar/Avatar";
import Logo from "./Logo/Logo";
import NavigationLinks from "./NavigationLinks/NavigationLinks";

const NavigationBar = () => {
  return (
    <nav className="navigation">
      <section className="primary-navigation">
        <Logo />
        <NavigationLinks />
      </section>
      <section className="secondary-navigation">
        <Avatar />
      </section>
    </nav>
  );
};

export default NavigationBar;
