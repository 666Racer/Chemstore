import { useState } from "react";
import { dataCompounds } from "../../redux/slices/productSlice";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const Products = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCheckboxChange = (category) => {
    setSelectedCategories(
      (prevSelected) =>
        prevSelected.includes(category)
          ? prevSelected.filter((c) => c !== category) // фильтруем категории, не совпадающие с этой
          : [...prevSelected, category] // добавляем в массив остальные
    );
  };

  const filteredProducts = dataCompounds.filter(
    (product) =>
      selectedCategories.length === 0 ||
      product.category.some((с) => selectedCategories.includes(с))
  );
  // console.log(filteredProducts);

  return (
    <div>
      <section className="all-products container center">
        <div className="all-products-content center">
          <div className="all-products-sorted">
            <details className="all-products-sorted__details">
              <summary className="all-products-sorted__summary">
                Категория
              </summary>
              <ul className="all-products-sorted__details-list">
                <li className="all-products-sorted__details-item">
                  <a href="#" className="all-products-sorted__details-link">
                    Электронные газы
                  </a>
                </li>
                <li className="all-products-sorted__details-item">
                  <a href="#" className="all-products-sorted__details-link">
                    Металлорганические соединения
                  </a>
                </li>
                <li className="all-products-sorted__details-item">
                  <a href="#" className="all-products-sorted__details-link">
                    Окислители
                  </a>
                </li>
                <li className="all-products-sorted__details-item">
                  <a href="#" className="all-products-sorted__details-link">
                    Фармацевтические субстанции
                  </a>
                </li>
                <li className="all-products-sorted__details-item">
                  <a href="#" className="all-products-sorted__details-link">
                    Растворители
                  </a>
                </li>
              </ul>
            </details>

            <details className="all-products-sorted__details">
              <summary className="all-products-sorted__summary">
                Производство
              </summary>
              <ul className="all-products-sorted__details-list">
                <li className="all-products-sorted__details-item">
                  <a href="#" className="all-products-sorted__details-link">
                    Собственное
                  </a>
                </li>
                <li className="all-products-sorted__details-item">
                  <a href="#" className="all-products-sorted__details-link">
                    Сторонние организации
                  </a>
                </li>
              </ul>
            </details>

            <details className="all-products-sorted__details">
              <summary className="all-products-sorted__summary">
                Количество
              </summary>
              <ul className="all-products-sorted__details-list">
                <li className="all-products-sorted__details-item">
                  <a href="#" className="all-products-sorted__details-link">
                    До 5 кг
                  </a>
                </li>
                <li className="all-products-sorted__details-item">
                  <a href="#" className="all-products-sorted__details-link">
                    До 50 кг
                  </a>
                </li>
                <li className="all-products-sorted__details-item">
                  <a href="#" className="all-products-sorted__details-link">
                    До 500 кг
                  </a>
                </li>
                <li className="all-products-sorted__details-item">
                  <a href="#" className="all-products-sorted__details-link">
                    До 5000 кг
                  </a>
                </li>
                <li className="all-products-sorted__details-item">
                  <a href="#" className="all-products-sorted__details-link">
                    До 50 000 кг
                  </a>
                </li>
                <li className="all-products-sorted__details-item">
                  <a href="#" className="all-products-sorted__details-link">
                    До 250 000 кг
                  </a>
                </li>
              </ul>
            </details>
          </div>
          <div className="all-products__box">
            <div className="trends">
              <div className="trends__box">
                <div className="filter filter-trend">
                  <h3 className="filter__title">Популярно сейчас</h3>
                  <ul className="filter-trend__list">
                    <li className="filter-trend__item">Гексафторбутадиен</li>
                    <li className="filter-trend__item">Соляная кислота</li>
                    <li className="filter-trend__item">Изопропиловый спирт</li>
                    <li className="filter-trend__item">Тетрагидрофуран</li>
                    <li className="filter-trend__item">Капецитабин</li>
                    <li className="filter-trend__item">Хлорид цинка</li>
                  </ul>
                </div>

                <div className="filter filter-category">
                  <h3 className="filter__title">Категории</h3>
                  <form action="" className="filter-category__checkboxes">
                    {["Электронные газы", "Металлорганические соединения", "Окислители", "Фармацевтические субстанции", "Растворители"].map((category) => (
                      <label key={category} className="checkbox__span">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category)}
                          onChange={() => handleCheckboxChange(category)}
                        />
                        {category}
                      </label>
                    ))}
                  </form>
                </div>
                <div className="filter filter-price">
                  <h3 className="filter__title">Цена</h3>

                  <input
                    className="filter-price__range"
                    type="range"
                    min="₽ 300"
                    max="₽ 1 500 000"
                  />
                </div>
              </div>
              <div className="sorting">
                <div className="sorting__box">
                  <p className="sorting__text sort-by__text">Сортировать по</p>
                  <select
                    className="sorting__select sorting__text"
                    name="sorting-by"
                    id="sorting-by"
                  >
                    <option className="sorting__text" value="name">
                      Названию
                    </option>
                    <option className="sorting__text" value="price">
                      Цене
                    </option>
                  </select>
                  <img src="./img/arrow-down.svg" alt="arrow-down" />
                </div>
                <div className="sorting__box">
                  <p className="sorting__text sort-by__text">
                    Показать на странице
                  </p>
                  <select
                    className="sorting__select sorting__text"
                    name="sorting-by"
                    id="sorting-by"
                  >
                    <option className="sorting__text" value="6">
                      6
                    </option>
                    <option className="sorting__text" value="12">
                      12
                    </option>
                  </select>
                  <img src="./img/arrow-down.svg" alt="arrow-down" />
                </div>
              </div>
            </div>
            <article className="product__cards">
              <div className="product__cards__content">
                {filteredProducts.length !== 0 ? (
                  filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      // cardLink={product.cardLink}
                      // cardLink={<Link to={`/product/${product.id}`}></Link>}
                      img={product.img}
                      addLink={product.addLink}
                      title={product.title}
                      price={product.price}
                      btnText={product.btnText}
                      synonyms={product.synonyms.join(", ")}
                      category={product.category.join(", ")}
                      CAS={product.CAS}
                    />
                  ))
                ) : (
                  <>
                    <h4 classNameName="purchase__name">
                      {" "}
                      ! Пока ничего нет. Попрпобуйте позже !
                    </h4>
                  </>
                )}
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
