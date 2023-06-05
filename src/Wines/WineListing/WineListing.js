import WineCard from "../WineCard/WineCard";

const WineListing = ({ sectionTitle, wines}) => {
    return (
        <section className="category">
          <h2>{sectionTitle}</h2>
          <ul>
            {wines.map(wine => (<li key={wine.id}>
                <WineCard wines={wines} />
            </li>))}
          </ul>
        </section>
    );
}

export default WineListing;