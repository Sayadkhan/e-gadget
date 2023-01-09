import { useNavigate } from "react-router-dom";

import { currencyFormatter } from "../utilities/currencyFormatter";

const Card = ({ product }) => {
  const navigate = useNavigate();
  const addToCartHandler = (id) => {
    navigate("/Cart");
    // console.log(id);
  };

  return (
    <div className="product flex flex-col gap-2 rounded-xl bg-white shadow-md overflow-hidden hover:shadow-2xl duration-300">
      <div className="img">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="texts flex flex-col gap-2 px-6 pb-5">
        <span className="category-tag uppercase text-xs font-semibold tracking-widest text-orange-500">
          {product.category}
        </span>
        <h3 className="title text-xl font-medium h-[5.25rem]">
          {product.name}
        </h3>
        <p className="details text-gray-500 h-[6.5rem]">
          {product.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="price text-xl font-medium text-sky-500">
            {currencyFormatter(product.price)}
          </span>
          <button
            onClick={() => addToCartHandler(product.id)}
            className="cart-btn uppercase bg-violet-500 text-violet-50 font-medium py-3 px-8 rounded-md hover:bg-red-500 hover:text-orange-50 duration-300 shadow-violet-300 shadow-lg hover:shadow-orange-300"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
