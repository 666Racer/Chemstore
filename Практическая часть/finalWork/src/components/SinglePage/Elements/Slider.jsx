import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { dataCompounds } from "../../../redux/slices/productSlice";

const Slider = () => {
  const { id } = useParams();
  const product = dataCompounds.find((p) => p.id === parseInt(id));

  return (
    <div className="product-photo">
        <div className="photo__arrow"><img src="../img/arrow_left.png" alt="arrow left"/></div>
        <img className="product-photo__img"src={product.img} alt="product img" />
        <div className="photo__arrow"><img src="../img/arrow_right.png" alt="arrow right"/></div>
    </div>
  );
};

export default Slider;
