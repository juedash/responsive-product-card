import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

const ProductCard = ({ product, addProduct }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/product/" + product.id);
  };

  const variants = {
    size: ["S", "M", "L", "XL"],
    color: ["red", "green", "blue"],
    diametre: ["10 - 20 cm", "21 - 30 cm"],
  };
  const [selectedVariant, setSelectedVariant] = useState();

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent card click when clicking button
    addProduct(product);
    toast.success("Added to cart");
  };

  return (
    <div className="card h-100 border-0 product-card">
      <div className="product-image" onClick={handleCardClick}>
        <img
          className="card-img-top object-fit-contain p-3"
          src={product.image}
          alt="Card"
          height={300}
        />
        <button
          className={`product-hover-overlay text-light border-0 ${
            product.id === 1 ? "text-dark" : "text-light"
          }`}
          onClick={handleAddToCart}
          disabled={product.id === 1}
          style={{
            backgroundColor:
              product.id === 1
                ? "rgba(255, 255, 255, 0.85)"
                : "rgba(0, 0, 0, 0.85)",
          }}
        >
          {product.inStock || product.id === 1 ? "Out of Stock" : "Add to Cart"}
        </button>
      </div>

      <div className="card-body">
        <h5 className="card-title fs-6" title={product.title}>
          {product.title.substring(0, 35)}
          <span>{product.title.length > 35 && "..."}</span>
        </h5>
        {product.variants ||
        (variants.size &&
          product.id !== 1 &&
          !["electronics", "jewelery"].includes(product.category)) ? (
          <div className="mb-3 d-flex gap-2 product-variants">
            {(product.variants || variants.size).map((variantValue) => (
              <span
                key={variantValue}
                onClick={() => setSelectedVariant(variantValue)}
                className={`border rounded p-1 text-xs text-center cursor-pointer ${
                  selectedVariant === variantValue
                    ? "bg-primary text-white"
                    : ""
                }`}
                style={{ width: 25, fontSize: "0.6rem" }}
              >
                {variantValue}
              </span>
            ))}
          </div>
        ) : (
          ["jewelery"].includes(product.category) && (
            <div className="mb-3 d-flex gap-2 product-variants">
              {(product.variants || variants.diametre).map((variantValue) => (
                <span
                  key={variantValue}
                  onClick={() => setSelectedVariant(variantValue)}
                  className={`border rounded px-2 py-1 text-xs text-center cursor-pointe ${
                    selectedVariant === variantValue
                      ? "bg-primary text-white"
                      : ""
                  }`}
                  style={{ fontSize: "0.6rem" }}
                >
                  {variantValue}
                </span>
              ))}
            </div>
          )
        )}

        <div className="d-flex align-items-center justify-content-between">
          <small className="product-price">$ {product.price}</small>
          <div
            title={product.rating.rate}
            className="product-stars d-flex flex-nowrap position-absolute end-0"
          >
            {[...Array(5)].map((_, i) => {
              const starNumber = i + 1;
              if (product.rating.rate >= starNumber) {
                return <i key={i} className="fas fa-star text-warning"></i>;
              } else if (product.rating.rate >= starNumber - 0.5) {
                return (
                  <i
                    key={i}
                    className="fas fa-star-half-stroke text-warning"
                  ></i>
                );
              } else {
                return <i key={i} className="far fa-star text-warning"></i>;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
