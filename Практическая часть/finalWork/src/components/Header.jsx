import { useSelector } from "react-redux";
import BasketInHeader from "./BasketInHeader";
import { useEffect, useState } from "react";

const Header = () => {
    const products = useSelector((state) => state.product.products)

    const [sub , setSub] = useState(0);

    useEffect(()=> {
        setSub(products.reduce((sum, product) => 
        sum + product.price, 0));
    } 
    , [products])
    
    return (
        <section className="top">
            <header className="header container center">
                <div className="main-header__header-top">
                    <div className="header-top__left">
                        <a className="logo-link" href="../">
                            <img className="logo-img" src="../img/Logo.svg" alt="logo" />
                            <p className="logo-text">
                                CHEM<span className="logo-text logo-text--colored">STORE</span>
                            </p>
                        </a>

                        <div className="header-top__search-field">
                            <button className="search-field__button" type="button">
                            <details className="header-top__browse">
                                <summary className="browse-summary">
                                <p>Каталог</p>
                                <svg width="15" height="15" className="arrow__down" fill="#838383" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                                </summary>
                                <div className="browse__details">
                                <h3 className="header-top__browse-title">Электронные газы</h3>
                                <ul className="browse__dropdown-list">
                                    <li className="browse__dropdown-item">
                                    <a href="#" className="browse__dropdown-link">Гексафторбутадиен</a>
                                    </li>
                                    <li className="browse__dropdown-item">
                                    <a href="#" className="browse__dropdown-link">Октафторбутен-2</a>
                                    </li>
                                    <li className="browse__dropdown-item">
                                    <a href="#" className="browse__dropdown-link"
                                        >Октафтортолуол</a>
                                    </li>
                                    <li className="browse__dropdown-item">
                                    <a href="#" className="browse__dropdown-link"
                                        >Триметилсилан</a>
                                    </li>
                                </ul>
                                <h3 className="header-top__browse-title">Растворители</h3>
                                <ul className="browse__dropdown-list">
                                    <li className="browse__dropdown-item">
                                    <a href="#" className="browse__dropdown-link"
                                        >Изопропиловый спирт</a>
                                    </li>
                                    <li className="browse__dropdown-item">
                                    <a href="#" className="browse__dropdown-link">Ацетон</a>
                                    </li>
                                    <li className="browse__dropdown-item">
                                    <a href="#" className="browse__dropdown-link">Дихлорметан</a>
                                    </li>
                                    <li className="browse__dropdown-item">
                                    <a href="#" className="browse__dropdown-link"
                                        >Диэтиловый эфир</a>
                                    </li>
                                    <li className="browse__dropdown-item">
                                    <a href="#" className="browse__dropdown-link">Этилацетат</a>
                                    </li>
                                    <li className="browse__dropdown-item">
                                    <a href="#" className="browse__dropdown-link"
                                        >Тетрагидрофуран</a>
                                    </li>
                                </ul>
                                </div>
                            </details>
                            </button>

                            <form action="#" method="get">
                                <label htmlFor="search">
                                <input
                                    className="search-field__search-input"
                                    type="search"
                                    name="search"
                                    id="search"
                                    placeholder="Искать продукт..."
                                />
                                </label>
                            </form>
                            <button className="search-field__search-button">
                                <img src="../img/search.png" alt="search" />
                            </button>
                        </div>
                    </div>

                    <div className="header-top__right">
                        <details className="header-top__right-details">
                            <summary>
                                <img className="basket__button" src="../img/basket_logo.png" alt="basket" />
                            </summary>
                            <div className="basket-box__product-cnt" style={products.length !== 0 ? null : {display: "none"}} >
                                <h3 className="basket-box__count">{products.length}</h3>
                            </div>                       
                            <div className="basket-box">
                                <div className="basket-box-scroll" 
    
                                style={products.length < 3 ? null 
                                : { height: "450px", overflowY: "scroll", scrollbarColor: "#322962 #fbfbfb", scrollbarWidth: "thin"}}>
    
                                    {products.length !== 0 ?
                                        products.map(product =>
                                            <BasketInHeader key={product.id}
                                                id={product.id}
                                                cardLink={product.cardLink}
                                                img={product.img}
                                                title={product.title}
                                                price={product.price}
                                            />
                                        )
                                        : <>
                                            <h4 className="total-text"> Ваша корзина пуста</h4>
                                            <br/>
                                            <div className="basket-box__line"></div>
                                         </>                       
                                    }
                                    </div>
                                    <div className="total-sum">
                                        <h2 className="total-text">Всего</h2>
                                        <h2 className="total-text">${sub}</h2>
                                    </div>
                                    <a className="purchase__button" href="../checkout">Отправка</a>
                                    <a className="purchase__button" href="../shopping_card">Корзина</a>
                            </div>
                        </details>
                        <button className="account__button button ">Мой профиль
                            <i className="fa fa-caret-down fa-caret-down__my-acc-header "></i>
                        </button>
                    </div>
                 </div>


                <div className="nav ">
                    <div className="nav__center ">
                        <ul className="header-bottom__nav-list ">
                            <li className="header-bottom__nav-item ">
                                <a className="nav__links " href="/">Главная</a>
                                <div className="mega-box ">
                                    <div className="mega-item ">
                                        <h3 className="mega-title ">Преимущества</h3>
                                        <a href="#offers" className="mega-link ">Эксклюзивность</a>
                                        <a href="#offers" className="mega-link ">Научный центр</a>
                                        <a href="#offers" className="mega-link ">Лаборатория</a>
                                        <a href="#offers" className="mega-link ">Скидки</a>
                                        <h3 className="mega-title ">Рекомендации</h3>
                                        <a href="#recommendations" className="mega-link ">Электронные газы </a>
                                        <a href="#recommendations" className="mega-link ">Фарм.субстанции</a>
                                        <a href="#recommendations" className="mega-link ">Растворители</a>
                                    </div>
                                    <div className="mega-item ">
                                        <h3 className="mega-title ">Информация</h3>
                                        <a href="# " className="mega-link ">Правила и условия</a>
                                        <a href="# " className="mega-link ">Политика конфиденциальности</a>
                                        <a href="# " className="mega-link ">Как проходит покупка</a>
                                        <a href="# " className="mega-link ">Как продавать с нами</a>
                                        <a href="# " className="mega-link ">Поддержать проект
                                            <img className="mega-img" src="../img/star.svg" alt="star"></img>
                                        </a>
                                        <div className="mega-picture mega-inscription-flex"><span className="mega-inscription">Супер</span><span className="mega-inscription mega-inscription_last">скидка!</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="header-bottom__nav-item ">
                                <a className="nav__links " href=" #about">О компании</a>
                            </li>
                            <li className="header-bottom__nav-item reverse">
                                <a className="nav__links " href=" # ">Товары и услуги</a>
                                <div className="mega-box ">
                                    <div className="mega-item ">
                                        <h3 className="mega-title ">Электронные газы</h3>
                                        <a href="../products" className="mega-link ">Гексафторбутадиен</a>
                                        <a href="../products" className="mega-link ">Октафторбутен-2</a>
                                        <a href="../products" className="mega-link ">Октафтортолуол</a>
                                        <a href="../products" className="mega-link ">Триметилсилан</a>
                                        <h3 className="mega-title ">Фарм. субстанции</h3>
                                        <a href="../products" className="mega-link ">Капецитабин</a>
                                        <a href="../products" className="mega-link ">Сорафениб основание</a>
                                        <a href="../products" className="mega-link ">Ксилометазолин</a>
                                    </div>
                                    <div className="mega-item ">
                                        <h3 className="mega-title ">Растворители</h3>
                                        <a href="../products" className="mega-link ">Изопропиловый спирт </a>
                                        <a href="../products" className="mega-link ">Ацетон</a>
                                        <a href="../products" className="mega-link ">Дихлорметан</a>
                                        <a href="../products" className="mega-link ">Тетрагидрофуран</a>
                                        <div className="mega-picture mega-inscription-flex"><span className="mega-inscription">Супер</span><span className="mega-inscription mega-inscription_last">скидка!</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="header-bottom__nav-item reverse">
                                <a className="nav__links " href=" # ">Доставка и оплата</a>
                                <div className="mega-box ">
                                    <div className="mega-item ">
                                        <h3 className="mega-title ">Доставка</h3>
                                        <a href="../checkout" className="mega-link ">Адрес</a>
                                        <a href="../checkout" className="mega-link ">Стоимость</a>
                                        <a href="../checkout" className="mega-link ">Транспорт</a>
                                        <a href="../checkout" className="mega-link ">Упаковка</a>
                                        <h3 className="mega-title ">Оплата</h3>
                                        <a href="../shopping_card" className="mega-link ">На сайте</a>
                                        <a href="../shopping_card" className="mega-link ">Купоны</a>
                                        <a href="../shopping_card" className="mega-link ">Промокоды</a>
                                    </div>
                                    <div className="mega-item ">
                                        <h3 className="mega-title ">Информация</h3>
                                        <a href="# " className="mega-link ">Правила и условия</a>
                                        <a href="# " className="mega-link ">Политика конфиденциальности</a>
                                        <a href="# " className="mega-link ">Как проходит покупка</a>
                                        <a href="# " className="mega-link ">Как продавать с нами</a>
                                        <a href="# " className="mega-link ">Поддержать проект
                                            <img className="mega-img" src="../img/star.svg" alt="star"></img>
                                        </a>
                                        <div className="mega-picture mega-inscription-flex"><span className="mega-inscription">Супер</span><span className="mega-inscription mega-inscription_last">скидка!</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="header-bottom__nav-item reverse ">
                                <a className="nav__links " href="#contacts">Контакты</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </section>
    )
}

export default Header;
