import ProgressBar from "../ProgressBar/ProgressBar";
import WineImage from "../WineImage/WineImage";

const WineCard = ({ imageUrl, imageName, isNew, progress}) => {
    return (
      <div className="wine">
        <WineImage src={imageUrl} alt={imageName} imageUrl={imageUrl} imageName={imageName} isNew={isNew} />
        <ProgressBar min={0} max={100} value={progress}/>
      </div>
    );
}

export default WineCard;