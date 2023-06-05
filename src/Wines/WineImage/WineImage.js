const WineImage = ({ imageUrl, imageName, isNew }) => {
  return (
    <>
      <img src={imageUrl} alt={imageName} />
      {isNew && (<span className="new-badge">New!</span>)}
    </>
  );
};

export default WineImage;
