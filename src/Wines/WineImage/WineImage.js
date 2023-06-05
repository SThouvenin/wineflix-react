const WineImage = ({ imageUrl, imageName, isNew}) => {
    return (
        <img src={imageUrl} alt={imageName} isNew={isNew} />
    );
}

export default WineImage;