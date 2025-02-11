import { useDispatch } from "react-redux";
import { deleteProduct } from "../redux/slices/productSlice";
import { Link } from "react-router-dom";
import { dataCompounds } from "../redux/slices/productSlice";

const BasketInHeader = ({id, img, title, cardLink, price}) => {
    const dispatch = useDispatch();
    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteProduct(id))
    }
    const product = dataCompounds.find((p) => p.id === parseInt(id));
    
	return (
            <div className="" key={id}>
                <Link className="card__link" to={`/products/${product.id}`}>
                    <div className="purchase">
                        <div className="purchase__productImg">
                            <img className="purchase__photo"src={img} alt="purchase photo"/>
                        </div>
                        <div className="purchase__info">
                            <h3 className="purchase__name">{title}</h3>
                            <img className="rate-stars" src="../img/stars_rate.png" alt="stars rate"/>
                            <p className="quantity-info">1 <span
                                    className="quantity-info"> x </span>
                                    ₽ {price}
                            </p>
                        </div>
                        <form>
                            <button id={id} className="purchase__cancel" onClick={handleDelete}>
                                <img className="purchase__cancel__img" src="../img/cancel.png" alt="close"/>
                            </button>
                        </form>                    
                    </div>
                </Link>
            </div>
	)
}

export default BasketInHeader;