const BotttomContent = () => {
  return (
    <section className="bottom center ">
      <article className="bottom__subscribe center" id="contacts">
        <div className="bottom__contacts">
          <div className="contacts__content ">
            <p className="contacts__title ">
              Контакты для связи:
            </p>
            <p className="contacts__organization">ООО "КемСтор Лимитед"</p>
            <p className="contacts__city ">Пермь, 614039, ул. Химическая, 39, стр. 1</p>
            <p className="contacts__name">Гущина Людмила, ведущий менеджер по продажам</p>
            <p className="contacts__number">8(342)-256-80-99</p>
            <p className="contacts__email">contacts@chemstore.mail.com</p>
          </div>
        </div>
        <div className="bottom__subscribtion ">
          <h2 className="subscribtion__title ">
            Подписаться <br />
            <span className="subscribtion__subtitle ">
              На нашу рассылку и предложения
            </span>
          </h2>
          <form className="subscribtion__form " action="# " method="post ">
            <label htmlFor="email ">
              <input
                className="subscribtion__field "
                type="email "
                name="email "
                id="email "
                placeholder="Введите ваш e-mail "
              />
            </label>
            <button className="subscribtion__button button " type="submit ">
              Подписаться
            </button>
          </form>
        </div>
      </article>
      <article className="bottom__navigation ">
        <div className="bottom__navigation__content center ">
          <div className="bottom__navigation__left-block ">
            <a className="logo-link " href="index.html ">
              <img src="./img/Logo.svg " alt="Logo.svg" className="bottom__logo"/>
              <p className="logo-text ">
                CHEM<span className="logo-text logo-text--colored ">STORE</span>
              </p>
            </a>
            <div className="bottom__navigation__info ">
              <p className="left-block__text ">
              Получаем преимущества за счет собственного научного центра и производственной лаборатории.
              В нашей работе мы объединяем расширенный анализ процессов и при этом сохраняем партнерские отношения между подразделениями.
              </p>
              <p className="left-block__text ">
                Обеспечиваем поддержку 24/365 и открыты для любых предложений.
                Стабильно расширяем ассортимент.
                Постоянно совершенствуемся, чтобы стать лучше.
              </p>
            </div>
          </div>
          <div className="bottom__navigation__right-block ">
            <nav className="bottom__navigation__nav ">
              <div className="bottom__navigation__nav-block ">
                <h2 className="nav-block__nav-title ">CHEMSTORE</h2>
                <ul className="nav-block__nav-list ">
                  <a href="# " className="nav-item__link ">
                    <li className="nav-block__nav-item ">Главная</li>
                  </a>
                  <a href="./products" className="nav-item__link ">
                    <li className="nav-block__nav-item ">Каталог</li>
                  </a>
                  <a href="#about" className="nav-item__link ">
                    <li className="nav-block__nav-item ">О компании</li>
                  </a>
                  <a href="#offers" className="nav-item__link ">
                    <li className="nav-block__nav-item ">Как мы работаем</li>
                  </a>
                  <a href="#contacts" className="nav-item__link ">
                    <li className="nav-block__nav-item ">Контакты</li>
                  </a>
                </ul>
              </div>

              <div className="bottom__navigation__nav-block ">
                <h2 className="nav-block__nav-title ">ИНФОРМАЦИЯ</h2>
                <ul className="nav-block__nav-list ">
                  <a href="# " className="nav-item__link ">
                    <li className="nav-block__nav-item ">Правила и условия</li>
                  </a>
                  <a href="# " className="nav-item__link ">
                    <li className="nav-block__nav-item ">Политика конфиденциальности</li>
                  </a>
                  <a href="# " className="nav-item__link ">
                    <li className="nav-block__nav-item ">Как проходит покупка</li>
                  </a>
                  <a href="# " className="nav-item__link ">
                    <li className="nav-block__nav-item ">Как продавать с нами</li>
                  </a>
                  <a href="# " className="nav-item__link ">
                    <li className="nav-block__nav-item ">Поддержать проект
                      <img className="mega-img" src="./img/star.svg" alt="star"></img>
                    </li>
                  </a>
                </ul>
              </div>

              <div className="bottom__navigation__nav-block ">
                <h2 className="nav-block__nav-title ">КАТАЛОГ</h2>
                <ul className="nav-block__nav-list ">
                  <a href="./products" className="nav-item__link ">
                    <li className="nav-block__nav-item">Электронные газы</li>
                  </a>
                  <a href="./products" className="nav-item__link ">
                    <li className="nav-block__nav-item ">Фармацевтические субстанции</li>
                  </a>
                  <a href="./products" className="nav-item__link ">
                    <li className="nav-block__nav-item ">Окислители</li>
                  </a>
                  <a href="./products" className="nav-item__link ">
                    <li className="nav-block__nav-item ">Растворители</li>
                  </a>
                  <a href="./products" className="nav-item__link ">
                    <li className="nav-block__nav-item ">Посмотреть все</li>
                  </a>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </article>
    </section>
  );
};

export default BotttomContent;
