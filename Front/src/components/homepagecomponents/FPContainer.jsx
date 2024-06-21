const FPContainer = ({ productDetails }) => {
  return (
    <div className="fp-container flex-col">
      <div className="fpc-image">
        <img src={productDetails.imageSrc} />
      </div>
      <div className="fpc-details flex">
        <h1>{productDetails.productName}</h1>
      </div>
    </div>
  );
};

export default FPContainer;
