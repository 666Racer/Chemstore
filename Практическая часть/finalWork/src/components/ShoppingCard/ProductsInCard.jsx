import { useDispatch } from "react-redux";
import { deleteProduct, setQuantity } from "../../redux/slices/productSlice";
import { useState } from "react";
import { Link } from "react-router-dom";
import { dataCompounds } from "../../redux/slices/productSlice";

const ProductsInCard = ({
  id,
  img,
  title,
  price,
  shipping,
  quantity,
  category,
  CAS
}) => {
  const [productQuantity, setProductQuantity] = useState(1);
  const dispatch = useDispatch();
  const product = dataCompounds.find((p) => p.id === parseInt(id));

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteProduct(id));
  };

  const handleQuantity = (e, id) => {
    const value = parseInt(e.target.value);
    setProductQuantity(value);

    dispatch(setQuantity({ id, value: value }));
  };
  return (
    <div className="shopping__item shopping__grid">
      <div className="grid__left">
        <Link className="shopping__link" to={`/products/${product.id}`}>
          <img className="shopping__img" src={img} alt="sc item" />
        </Link>
        <div className="grid__description">
          <p className="description__name">{title}</p>
          <p className="description__details">
            Категория:{" "}
            <span className="description__details--lighter">{category}</span>
          </p>
          <p className="description__details">
            CAS: <span className="description__details--lighter">{CAS}</span>
          </p>
        </div>
      </div>
      <p className="shopping__info">₽ {price}</p>
      <div className="shopping__info">
        <input
          id={id}
          className="shopping__input"
          value={productQuantity}
          onChange={(e) => handleQuantity(e, id)}
          type="number"
          min="1"
        />
      </div>
      <p className="shopping__info">{shipping > 0 ? `₽ ${shipping}` : "Бесплатно"}</p>
      <p className="shopping__info--subtotal">{`₽ ${price * quantity + shipping}`}</p>
      <a className="shopping__info shopping__cancel" onClick={handleDelete}>
        <img className="shopping__info" src="./img/cancel.png" alt="cancel" />
      </a>
    </div>
  );
};

export default ProductsInCard;
