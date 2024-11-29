import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../../redux/slices/productSlice";
import { addProduct } from "../../../redux/slices/productSlice";
import { dataCompounds } from "../../../redux/slices/productSlice";


const Info = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const [productQuantity, setProductQuantity] = useState(1);

  const handleAddToBasket = (e) => {
    e.preventDefault();
    dispatch(addProduct(id))
  }

  const product = dataCompounds.find((p) => p.id === parseInt(id));

  return (
    <div className="product-info">
      <div className="product-info">
        <h3 className="product-info__name">{product.name}</h3>
        <div className="product-info__add-info">
          <p className="add-info__text">
            СИНОНИМЫ:
            <span className="add-info__text--bold">{product.synonyms.join(", ")}</span>
          </p>
          <p className="add-info__text">
            CAS:
            <span className="add-info__text--bold">{product.CAS}</span>

          </p>
          <p className="add-info__text">
            КАТЕГОРИЯ:
            <span className="add-info__text--bold">{product.category}</span>
          </p>
        </div>
        <p className="product-info__price">₽ {product.price}</p>
        <div className="product-info__settings">
          <div className="settings">
            <p className="settings-text">КОЛИЧЕСТВО</p>
            <div className="pr-sorting__box">
              <form action="#" method="get">
                <label htmlFor="search">
                  <input
                    className="pr-quantity"
                    type="number"
                    name="quantity"
                    id="quantity"
                    value={productQuantity}
                    onChange={(e) => setProductQuantity(e.target.value)}
                  />
                </label>
              </form>
            </div>
          </div>
        </div>
        <a href='#' onClick={handleAddToBasket}>
          <button className="product-info__button" type="button">
            <img
              src="../img/basket_logo.png"
              alt="basket_icon"
              className="product-info__button__logo"
            />
            В корзину
          </button>
        </a>
      </div>
    </div>
  );
};

export default Info;
