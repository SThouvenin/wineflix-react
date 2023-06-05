import WineCard from "../WineCard/WineCard";

const WineListing = ({imageUrl, imageName, isNew, progress, id}) => {
    return (
        <section className="category">
          <h2>Drink Again</h2>
          <ul>
            <li id={id}>
                <WineCard imageUrl={imageUrl} imageName={imageName} isNew={isNew} progress={progress} />
            </li>
          </ul>
        </section>
    );
}

export default WineListing;