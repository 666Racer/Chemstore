import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { dataCompounds } from "../../../redux/slices/productSlice";

const Slider = () => {
  const { id } = useParams();
  // const { products } = useSelector(state => state.products);
  // const [ product, setProduct ] = useState({});

  // useEffect(() => {
  //   setProduct(products.filter(product => product.id == id).pop());
  //   // window.scrollTo(0, 0);
  // }, [id]);

  const product = dataCompounds.find((p) => p.id === parseInt(id));

  return (
    <div className="product-photo">
        <div className="photo__arrow"><img src="../img/arrow_left.png" alt="arrow left"/></div>
        <img className="product-photo__img"src={product.img} alt="product img" />
        {/* <img src="./img/single_page/single_page.png" alt="product img" /> */}
        <div className="photo__arrow"><img src="../img/arrow_right.png" alt="arrow right"/></div>
    </div>
  );
};

export default Slider;
