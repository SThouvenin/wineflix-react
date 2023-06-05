const WineImage = ({src, alt, imageUrl, imageName, isNew}) => {
    return (
        <img src={src} alt={alt} imageUrl={imageUrl} imageName={imageName} isNew={isNew} />
    );
}

export default WineImage;