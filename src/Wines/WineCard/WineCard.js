import ProgressBar from "../ProgressBar/ProgressBar";
import WineImage from "../WineImage/WineImage";

const WineCard = ({ wines}) => {
    return (
      <div className="wine">
        <WineImage src={wines.imageUrl} alt={wines.imageName} imageUrl={wines.imageUrl} imageName={wines.imageName} isNew={wines.isNew} />
        {wines.progress && <><ProgressBar min={0} max={100} value={wines.progress}/></>}
        
      </div>
    );
}

export default WineCard;