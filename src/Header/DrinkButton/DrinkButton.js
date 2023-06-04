import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay } from "@fortawesome/free-solid-svg-icons"

const DrinkButton = () => {
    return (
        <button className="primary-action">
        <FontAwesomeIcon icon={faPlay} />
        <span>Drink</span>
        </button>
    )
}

export default DrinkButton;