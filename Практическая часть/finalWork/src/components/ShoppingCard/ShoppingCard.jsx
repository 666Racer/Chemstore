import ProductsInCard from "./ProductsInCard";
import { useSelector, useDispatch } from 'react-redux';
import { useState,  useEffect } from "react";
import { Link } from "react-router-dom";
import { clearProducts } from "../../redux/slices/productSlice"; //не срабатывает

const ShoppingCard = () => {
  let products = useSelector((state) => state.product.products);
  // const product = dataCompounds.find((p) => p.id === parseInt(id));
  const [sub, setSub] = useState(0);
  const [total, setTotal] = useState(0);
  
  const dispatch = useDispatch();
  const handleClearProducts = () => {
    dispatch(clearProducts());  // Очищаем список продуктов в Redux
  };

  useEffect(() => {
    setSub(
      products.reduce(
        (sum, product) => sum + product.quantity * product.price,
        0
      )
    );

    setTotal(
      products.reduce(
        (sum, product) =>
          sum + (product.quantity * product.price + product.shipping),
        0
      )
    );
  }, [products]);

  return (
    <div>
      <section className="shopping ">
        <div className="shopping__content container center ">
          <div className="shopping__box ">
            <div className="shopping__grid shopping__grid--padd ">
              <p className="shopping__title ">Информация о продукте</p>
              <p className="shopping__title ">Цена за единицу</p>
              <p className="shopping__title ">Количество, кг</p>
              <p className="shopping__title ">Доставка</p>
              <p className="shopping__title ">Промежуточный итог</p>
              <p className="shopping__title ">Удалить</p>
            </div>
            {products.length !== 0 ? 
              products.map(product =>
                <ProductsInCard
                  key={product.id}
                  id={product.id}
                  img={product.img}
                  title={product.title}
                  price={product.price}
                  quantity={product.quantity}
                  shipping={product.shipping}
                  synonyms={product.synonyms.join(", ")}
                  category={product.category.join(", ")}
                  CAS={product.CAS}
                />
              )
              : <>
                  <h4 className="grand__total">
                    Ваша корзина пока что пуста!
                  </h4>
              </>
            }
            <div className="shopping__buttons ">
              <a href="# ">
                <button className="shopping__button " type="reset" onClick={handleClearProducts}>
                  Очистить корзину
                </button>
              </a>
              <Link className="card__link" to={`/products/`}>
                <button className="shopping__button " type="button ">
                  Продолжить покупки
                </button>
              </Link>
            </div>
            <div className="shopping__information ">
              <div className="information__box ">
                <h3 className="information__title information__text ">
                  Адрес доставки
                </h3>
                <form action="# " className="information__form " />
                <input
                  className="information__field information__input "
                  type="text "
                  placeholder="Страна "
                />
                <input
                  className="information__field information__input "
                  type="text "
                  placeholder="Город "
                />
                <input
                  className="information__field information__input "
                  type="text "
                  placeholder="Почтовый индекс "
                />
                <button
                  className="information__button quote-button "
                  type="button "
                >
                  узнать стоимость
                </button>
              </div>
              <div className="information__box ">
                <h3 className="information__title information__text ">
                  купон на скидку
                </h3>
                <form action="# " className="information__form ">
                  <p className="information__coupon ">
                    Введите код с купона при его наличии
                  </p>
                  <input
                    className="information__field information__input "
                    type="text "
                    placeholder="Код с купона"
                  />
                </form>
                <button
                  className="information__button quote-button "
                  type="button "
                >
                  Применить купон
                </button>
              </div>
              <div className="information__box ">
                <p className="sub__total">Промежуточный итог&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;₽ {sub}
                </p>
                <h3 className="grand__total ">
                  ОБЩИЙ ИТОГ&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="sum ">₽ {total}</span>
                </h3>
                <a
                  className="checkout__link checkout__link__button button center "
                  href="./checkout"
                >
                  <div className="checkout__button__wrapper ">
                    <p className="checkout__button__text ">
                      Перейти к оформлению
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShoppingCard;

/*
const Cart = () => {
  // Инициализация состояния корзины, загружая данные из localStorage
  const loadCartFromLocalStorage = () => {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
  };

  const [cartItems, setCartItems] = useState(loadCartFromLocalStorage);

  // Функция для очистки корзины
  const clearCart = () => {
    // Очищаем корзину в состоянии
    setCartItems([]);

    // Удаляем данные корзины из localStorage
    localStorage.removeItem('cart');
  };

  // Синхронизация состояния корзины с localStorage при изменении cartItems
  useEffect(() => {
    if (cartItems.length === 0) {
      localStorage.removeItem('cart');  // Если корзина пуста, удаляем её из localStorage
    } else {
      localStorage.setItem('cart', JSON.stringify(cartItems));  // Сохраняем обновленное состояние корзины
    }
  }, [cartItems]);  // Этот useEffect сработает при каждом изменении состояния корзины

  return (
    <div>
      <h1>Корзина</h1>
      {cartItems.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - {item.price}₽
            </li>
          ))}
        </ul>
      )}
      <button onClick={clearCart}>Очистить корзину</button>
    </div>
  );
};

export default Cart;
*/
