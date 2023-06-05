import ProgressBar from "../ProgressBar/ProgressBar";
import WineImage from "../WineImage/WineImage";

const WineCard = ({src, alt, imageUrl, imageName, isNew, progress}) => {
    return (
      <div className="wine">
        <WineImage src={src} alt={alt} imageUrl={imageUrl} imageName={imageName} isNew={isNew} />
        <ProgressBar min={0} max={100} value={progress}/>
      </div>
    );
}

export default WineCard;