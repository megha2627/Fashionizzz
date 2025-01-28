/*import React from "react";
import { Link, useParams } from "react-router-dom";
import RatingStars from "../../../components/RatingStars";
import { useDispatch } from "react-redux";
import { useFetchProductByIdQuery } from "../../../redux/features/products/productsApi";
import { addToCart } from "../../../redux/features/cart/cartSlice";
import ReviewsCard from "../reviews/ReviewsCard";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, error, isLoading } = useFetchProductByIdQuery(id);

  if (isLoading) return <div>Loading...</div>;
  if (error || !data) return <div>Error loading product...</div>;
 

  const { product, reviews } = data;
  //console.log(data);
  const singleProduct=data?.product || {};
  //console.log(singleProduct);
  const productReviews=data?.reviews || {};
  //console.log(productReviews);

  const handleAddToCart = (product1) => {
    dispatch(addToCart(product1));
  };

  return (
    <>
      <section
        className="section__container bg-primary-light"
        style={{ width: "85%" }}
      >
        <h2 className="section__header capitalize">singleProduct</h2>
        <div className="section__subheader space-x-2">
          <span className="hover:text-primary">
            <Link to="/">home</Link>
          </span>
          <i className="ri-arrow-right-s-line"></i>
          <span className="hover:text-primary">
            <Link to="/shop">shop</Link>
          </span>
          <i className="ri-arrow-right-s-line"></i>
          <span className="hover:text-primary">{singleProduct?.name}</span>
        </div>
      </section>
      <section className="section__container mt-8" style={{ width: "85%" }}>
        <div className="flex flex-col items-center md:flex-row gap-8">
          <div className="md:w-1/2 w-full">
            <img
              src={singleProduct?.image}
              className="rounded-md w-full h-auto"
              alt={product.name}
            />
          </div>
          <div className="md:w-1/2 w-full">
            <h3 className="text-2xl font-semibold mb-4">{singleProduct.name}</h3>
            <p className="text-xl text-primary mb-4">
              ${singleProduct.price}
              {singleProduct?.oldPrice && <s>${singleProduct?.oldPrice}</s>}
            </p>
            <p className="text-gray-400 mb-4">{singleProduct?.description}</p>
            <div>
              <p>
                <strong>Category:</strong> {singleProduct?.category}
              </p>
              <p>
                <strong>Color:</strong> {singleProduct?.color}
              </p>
              <div className="flex gap-1 items-center">
                <strong>Rating: </strong>
                <RatingStars rating={singleProduct?.rating} />
              </div>
            </div>
            <button
              className="mt-6 px-6 py-3 bg-primary text-white rounded-md"
              onClick={(e)=>{
                e.stopPropagation();
                handleAddToCart(singleProduct);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>
      <section className="section__container mt-8" style={{ width: "85%" }}> 
        <ReviewsCard productReviews={productReviews} />

      </section>
    </>
  );
};

export default SingleProduct;*/
 
import React from "react";
import { Link, useParams } from "react-router-dom";
import RatingStars from "../../../components/RatingStars";
import { useDispatch } from "react-redux";
import { useFetchProductByIdQuery } from "../../../redux/features/products/productsApi";
import { addToCart } from "../../../redux/features/cart/cartSlice";
import ReviewsCard from "../reviews/ReviewsCard";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, error, isLoading } = useFetchProductByIdQuery(id);

  if (isLoading) return <div>Loading...</div>;
  if (error || !data) return <div>Error loading product...</div>;

  const { product, reviews } = data;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <section
        className="section__container bg-primary-light"
        style={{ width: "85%" }}
      >
        <h2 className="section__header capitalize">{product.name}</h2>
        <div className="section__subheader space-x-2">
          <span className="hover:text-primary">
            <Link to="/">home</Link>
          </span>
          <i className="ri-arrow-right-s-line"></i>
          <span className="hover:text-primary">
            <Link to="/shop">shop</Link>
          </span>
          <i className="ri-arrow-right-s-line"></i>
          <span className="hover:text-primary">{product.name}</span>
        </div>
      </section>
      <section className="section__container mt-8" style={{ width: "85%" }}>
        <div className="flex flex-col items-center md:flex-row gap-8">
          <div className="md:w-1/2 w-full">
            <img
              src={product.image}
              className="rounded-md w-full h-auto"
              alt={product.name}
            />
          </div>
          <div className="md:w-1/2 w-full">
            <h3 className="text-2xl font-semibold mb-4">{product.name}</h3>
            <p className="text-xl text-primary mb-4">
              ${product.price}
              {product.oldPrice && <s>${product.oldPrice}</s>}
            </p>
            <p className="text-gray-400 mb-4">{product.description}</p>
            <div>
              <p>
                <strong>Category:</strong> {product.category}
              </p>
              <p>
                <strong>Color:</strong> {product.color}
              </p>
              <div className="flex gap-1 items-center">
                <strong>Rating: </strong>
                <RatingStars rating={product.rating} />
              </div>
            </div>
            <button
              className="mt-6 px-6 py-3 bg-primary text-white rounded-md"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>
      <section className="section__container mt-8" style={{ width: "85%" }}>
        <ReviewsCard productReviews={reviews} />
      </section>
    </>
  );
};

export default SingleProduct;