import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { dataCompounds } from "../../../redux/slices/productSlice";

const Slider = () => {
  const { id } = useParams();
  const product = dataCompounds.find((p) => p.id === parseInt(id));
  let productId = +id;
  let nextProduct, prevProduct;
  if (productId === dataCompounds.length){
    nextProduct = 1;
    prevProduct = productId - 1;
  } else if (productId === 1) {
    nextProduct = productId + 1;
    prevProduct = dataCompounds.length;
  } else {
    nextProduct = productId + 1;
    prevProduct = productId - 1;
  }

  return (
    <div className="product-photo">
      <Link to={`/products/${prevProduct}`}>
        <div className="photo__arrow"><img src="../img/arrow_left.png" alt="arrow left"/></div>
      </Link>
        <img className="product-photo__img"src={product.img} alt="product img" />
      <Link to={`/products/${nextProduct}`}>
        <div className="photo__arrow"><img src="../img/arrow_right.png" alt="arrow right"/></div>
      </Link>
    </div>
  );
};

export default Slider;
