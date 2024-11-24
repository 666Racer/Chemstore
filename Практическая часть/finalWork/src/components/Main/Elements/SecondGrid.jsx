import ProductCards from "./ProductCards";
import { dataCompounds } from "../../../redux/slices/productSlice";

const SecondGrid = () => {
  return (
    <section className="second__grid center" id="recommendations">
      <article className="second__grid__content">
        {dataCompounds.map((product) => (
          <ProductCards
            key={product.id}
            id={product.id}
            cardLink={product.cardLink}
            img={product.img}
            addLink={product.addLink}
            title={product.title}
            price={product.price}
            btnText={product.btnText}
            synonyms={product.synonyms.join(", ")}
            category={product.category.join(", ")}
            CAS={product.CAS}
          />
        ))}
      </article>
      <a
        className="products__link products__link__button button center "
        href="./products"
      >
        <div className="products__button__wrapper">
          <p className="products__button__text">Посмотреть в каталоге
            <svg
              xmlns="http://www.w3.org/2000/svg "
              height="12 "
              width="15 "
              viewBox="0 0 448 512 "
            >
              <path
                fill="#ffffff "
                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z "
              />
            </svg>
          </p>
        </div>
      </a>
    </section>
  );
};

export default SecondGrid;
