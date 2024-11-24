import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';


const Checkout = () => {
    const [payMethod, setPayMethod] = useState('');
    const [deliveryMethod, setDeliveryMethod] = useState('');

    useEffect(() => {
        let radioButtonsPay = document.querySelectorAll('.radio-item-pay');
        let radioButtonsDelivery = document.querySelectorAll('.radio-item-delivery');
        for (const radioButton of radioButtonsPay) {
            radioButton.addEventListener('click', () => {
                setPayMethod(radioButton.parentElement.getElementsByClassName('checkout__text-middle')[0].textContent);
            })
        };
        for (const radioButton of radioButtonsDelivery) {
            radioButton.addEventListener('click', () => {
                setDeliveryMethod(radioButton.parentElement.getElementsByClassName('checkout__text-middle')[0].textContent);
            })
        };
    }, []);
        const products = useSelector((state) => state.product.products);
    
    return (
        <div>
                <section className="checkout">
                    <div className="checkout__content container center">
                        <ul className="checkout__list">
                            <li className="checkout__item">
                                <details className="checkout__details" open>
                                    <summary className="checkout__summary">01. АДРЕС ДОСТАВКИ</summary>
                                    <div className="details__box">
                                        <div className="checkout__register-details">
                                            <p className="checkout__text-big">
                                                Сделать заказ как гость или зарегистрироваться
                                            </p>
                                            <p className="checkout__text-small">
                                                Зарегистрируйтесь для будущих заказов
                                            </p>
                                            <form action="#" className="radio-box">
                                                <div className="radio__item">
                                                    <input className="radio-item" type="radio" name="choice" id="guest" />
                                                    <label className="checkout__text-middle" htmlFor="guest">продолжить как гость</label>
                                                </div>

                                                <div className="radio__item">
                                                    <input className="radio-item" type="radio" name="choice" id="register" />
                                                    <label className="checkout__text-middle" htmlFor="register">зарегистрироваться</label>
                                                </div>
                                            </form>
                                            <p className="checkout__text-big">Зарегистрируйтесь и получите преимущества!</p>
                                            <p className="checkout__text-small">
                                                Зарегистрируйтесь для будущих заказов
                                            </p>
                                            <div className="checkout__additional">
                                                <a href="#" className="additional__link">
                                                    <div className="additional__wrapper">
                                                        <img height="8px" src="img/order_arrows.png" alt="arrow" />
                                                        <p className="additional__text checkout__text-small">
                                                            Быстрое и простое оформление заказа
                                                        </p>
                                                    </div>
                                                </a>
                                                <div className="additional__wrapper">
                                                    <img height="8px" src="img/order_arrows.png" alt="arrow" />
                                                    <p className="additional__text checkout__text-small">
                                                        Легкий доступ к истории заказов и их статусам
                                                    </p>
                                                </div>
                                            </div>
                                            <button className="checkout__button" type="button">Продолжить</button>
                                        </div>

                                        <div className="checkout__log-in">
                                            <p className="checkout__text-big">Уже есть профиль?</p>
                                            <p className="checkout__text-small">Войдите в свой профиль ниже</p>
                                            <form action="#" method="post" className="login-form">
                                                <label className="login-form__label checkout__text-middle" htmlFor="email">ЭЛЕКТРОННАЯ ПОЧТА
                                                    <span className="required-fields">*</span>
                                                </label>
                                                <br/>
                                                <input className="login-form__input" type="email" id="email" name="email" required/>
                                                <label className="login-form__label checkout__text-middle" htmlFor="password">ПАРОЛЬ
                                                    <span className="required-fields">*</span>
                                                </label>
                                                <br/>
                                                <input className="login-form__input" type="password" id="password" name="password" required/>
                                            </form>
                                            <p className="required-fields__text">* Обязательные поля</p>
                                            <button className="checkout__button" type="button">Войти</button>
                                            <a href="#" className="forgot">Забыли пароль?</a>
                                        </div>
                                    </div>
                                </details>
                            </li>
                            <li className="checkout__item">
                                <details className="checkout__details">
                                    <summary className="checkout__summary">
                                        02. ПЛАТЕЖНАЯ ИНФОРМАЦИЯ
                                    </summary>
                                    <p className="additional__text checkout__text-small">
                                        CHEMSTORE не передает данные Вашей карты магазину и иным третьим лицам. Безопасность платежей с помощью банковских карт обеспечивается технологиями защищенного соединения HTTPS и двухфакторной аутентификации пользователя 3D Secure.
                                        В соответствии с ФЗ «О защите прав потребителей» в случае, если Вам оказана услуга или реализован товар ненадлежащего качества, платеж может быть возвращен на банковскую карту, с которой производилась оплата. Порядок возврата средств уточняйте у администрации интернет-магазина.
                                    </p>
                                </details>
                            </li>
                            <li className="checkout__item">
                                <details className="checkout__details">
                                    <summary className="checkout__summary">
                                        03. ИНФОРМАЦИЯ О ДОСТАВКЕ
                                    </summary>
                                        <p className="additional__text checkout__text-big">Доставка возможна в любые регионы РФ.</p>
                                            <ul>
                                                <li className="additional__item checkout__text-small">При заказе до 10 кг заказ доставляется курьером или Почтой России;</li>
                                                <li className="additional__item checkout__text-small">От 10 до 500 кг — компанией СДЕК;</li>
                                                <li className="additional__item checkout__text-small">Крупногабаритный груз — транспортной компанией "Деловые линии".</li>
                                            </ul>
                                </details>
                            </li>
                            <li className="checkout__item">
                                <details className="checkout__details">
                                    <summary className="checkout__summary">04. СПОСОБ ДОСТАВКИ</summary>
                                    <form action="#" className="radio-box">
                                        <div className="radio__item">
                                            <input className="radio-item-delivery" type="radio" name="choice" id="express" value="экспресс"/>
                                            <label className="checkout__text-middle" htmlFor="guest">экспресс</label>
                                            <p className="additional__text checkout__text-small">Доставка в течение 1-5 дней в зависимости от региона РФ</p>
                                        </div>
                                        <div className="radio__item">
                                            <input className="radio-item-delivery" type="radio" name="choice" id="standart" value="стандарт"/>
                                            <label className="checkout__text-middle" htmlFor="register">стандарт</label>
                                            <p className="additional__text checkout__text-small">Доставка в течение 7-28 дней в зависимости от региона РФ</p>
                                        </div>
                                        <div className="radio__item">
                                            <input className="radio-item-delivery" type="radio" name="choice" id="pick-up" value="самовывоз"/>
                                            <label className="checkout__text-middle" htmlFor="register">самовывоз</label>
                                            <p className="additional__text checkout__text-small">Бесплатно забрать с нашего склада самостоятельно</p>
                                        </div>
                                    </form>
                                </details>
                            </li>
                            <li className="checkout__item">
                                <details className="checkout__details">
                                    <summary className="checkout__summary">05. МЕТОД ОПЛАТЫ</summary>
                                    <form action="#" className="radio-box">
                                        <p className="additional__text checkout__text-big">Безналичный расчет</p>
                                        <div className="radio__item">
                                            <input className="radio-item-pay" type="radio" name="choice" id="credit-card" value="картой на сайте"/>
                                            <label className="checkout__text-middle" htmlFor="guest">Картой на сайте</label>
                                        </div>
                                        <div className="radio__item">
                                            <input className="radio-item-pay" type="radio" name="choice" id="pay-doc" value="платежным поручением"/>
                                            <label className="checkout__text-middle" htmlFor="register">Платежным поручением</label>
                                        </div>
                                        <p className="additional__text checkout__text-big">Наличный расчет</p>
                                        <div className="radio__item">
                                            <input className="radio-item-pay" type="radio" name="choice" id="cash" value="наличными при получении"/>
                                            <label className="checkout__text-middle" htmlFor="register">Наличными при получении</label>
                                        </div>
                                    </form>
                                </details>      
                            </li>
                            <li className="checkout__item">
                                <details className="checkout__details">
                                    <summary className="checkout__summary">06. ПРОВЕРКА ЗАКАЗА</summary>
                                    <ul>
                                        <li className="additional__item checkout__text-big">Способ доставки:
                                            <span className="additional__item checkout__text-middle"> &nbsp;&nbsp;&nbsp;{deliveryMethod}</span>
                                        </li>
                                        <li className="additional__item checkout__text-big">Метод оплаты:
                                            <span className="additional__item checkout__text-middle"> &nbsp;&nbsp;&nbsp;{payMethod}</span>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                </section>
        </div>
    )
}

export default Checkout;