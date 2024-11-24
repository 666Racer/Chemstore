import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../../redux/slices/productSlice";
import { addProduct } from "../../../redux/slices/productSlice";
import { dataCompounds } from "../../../redux/slices/productSlice";


const Info = () => {
  const { id } = useParams();
  // const { products } = useSelector(state => state.products);

  const dispatch = useDispatch();

  // const [product, setProduct] = useState({});
  const [productQuantity, setProductQuantity] = useState(1);

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

  // useEffect(() => {
  //   setProduct(products.filter(product => product.id == id).pop());
  //   // window.scrollTo(0, 0);
  // }, [id]);

  const handleAddToBasket = (e) => {
    e.preventDefault();
    dispatch(addProduct(id))
  }

  const product = dataCompounds.find((p) => p.id === parseInt(id));

  return (
    <div className="product-info">
      <div className="product-info">
        {/* <h3 className="product-info__name">{product && product.name}</h3> */}
        <h3 className="product-info__name">{product.name}</h3>
        <div className="product-info__add-info">
          <p className="add-info__text">
            СИНОНИМЫ:
            {/* <span className="add-info__text--bold">{product && product.synonyms}</span> */}
            <span className="add-info__text--bold">{product.synonyms.join(", ")}</span>
          </p>
          <p className="add-info__text">
            CAS:
            {/* <span className="add-info__text--bold">{product && product.CAS}</span> */}
            <span className="add-info__text--bold">{product.CAS}</span>

          </p>
          <p className="add-info__text">
            КАТЕГОРИЯ:
            {/* <span className="add-info__text--bold">{product && product.category}</span> */}
            <span className="add-info__text--bold">{product.category}</span>
          </p>
        </div>
        {/* <p className="product-info__price">₽ {product && product.price}</p> */}
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
                    // placeholder="2"
                  />
                </label>
              </form>
            </div>
          </div>
        </div>
        {/* <a href="./shopping_card"> */}
        <a href='#' onClick={handleAddToBasket}>
          <button className="product-info__button" type="button">
            <img
              src="../img/basket_logo.png"
              alt="basket_icon"
              className="product-info__button__logo"
            />
            Add to Cart
          </button>
        </a>
      </div>
    </div>
  );
};

export default Info;
