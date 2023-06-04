import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const MoreInfoButton = () => {
    return (
        <button className="secondary-action">
        <FontAwesomeIcon icon={faInfoCircle} />
        <span>More Info</span>
      </button>
    )
}

export default MoreInfoButton;