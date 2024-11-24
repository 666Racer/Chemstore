import { useDispatch } from "react-redux";
import { deleteProduct, setQuantity } from "../../redux/slices/productSlice";
import { useState } from "react";

const ProductsInCard = ({
  id,
  img,
  title,
  cardLink,
  price,
  shipping,
  quantity,
  category,
  CAS
}) => {
  const [productQuantity, setProductQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteProduct(id));
  };

  const handleQuantity = (e, id) => {
    const value = parseInt(e.target.value);
    setProductQuantity(value);

    dispatch(setQuantity({ id, value: value }));
  };
  console.log(price);
  console.log(shipping);
  console.log(quantity);
  return (
    <div className="shopping__item shopping__grid">
      <div className="grid__left">
        <a className="shopping__link" href={cardLink}>
          <img className="shopping__img" src={img} alt="sc item" />
        </a>
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
