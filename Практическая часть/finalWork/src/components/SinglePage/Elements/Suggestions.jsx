import { dataCompounds } from "../../../redux/slices/productSlice";

const Suggestions = () => {
  return (
    <section className="suggestions">
      <div className="suggestions__content container center">
        <h1 className="suggestions__title">Вам также может быть интересно</h1>
        <div className="suggestions__cards">
          <a className="suggestions__card" href="/products/1">
            <div className="suggestions__img-wrapper">
              <img
                className="suggestions__img"
                src={dataCompounds[0].img}
                alt="single_page_catalogue_1"
              />
            </div>
            <p className="card__name">{dataCompounds[0].title}</p>
              <div className="card__block">
                  <p className="card__price">₽ {dataCompounds[0].price}</p>
                  <p className="card__synonyms">{dataCompounds[0].synonyms}</p>
                  <p className="card__category">{dataCompounds[0].category}</p>
                  <p className="card__CAS">{dataCompounds[0].CAS}</p>
              </div>               
          </a>

          <a className="suggestions__card" href="/products/7">
            <div className="suggestions__img-wrapper">
              <img
                className="suggestions__img"
                src={dataCompounds[6].img}
                alt="single_page_catalogue_1"
              />
            </div>
            <p className="card__name">{dataCompounds[6].title}</p>
              <div className="card__block">
                  <p className="card__price">₽ {dataCompounds[6].price}</p>
                  <p className="card__synonyms">{dataCompounds[6].synonyms}</p>
                  <p className="card__category">{dataCompounds[6].category}</p>
                  <p className="card__CAS">{dataCompounds[6].CAS}</p>
              </div> 
          </a>

          <a className="suggestions__card" href="/products/9">
            <div className="suggestions__img-wrapper">
              <img
                className="suggestions__img"
                src={dataCompounds[8].img}
                alt="single_page_catalogue_1"
              />
            </div>
            <p className="card__name">{dataCompounds[8].title}</p>
              <div className="card__block">
                  <p className="card__price">₽ {dataCompounds[8].price}</p>
                  <p className="card__synonyms">{dataCompounds[8].synonyms}</p>
                  <p className="card__category">{dataCompounds[8].category}</p>
                  <p className="card__CAS">{dataCompounds[8].CAS}</p>
              </div> 
          </a>

          <a className="suggestions__card" href="/products/11">
            <div className="suggestions__img-wrapper ">
              <img
                className="suggestions__img"
                src={dataCompounds[10].img}
                alt="single_page_catalogue_1"
              />
            </div>
            <p className="card__name">{dataCompounds[10].title}</p>
              <div className="card__block">
                  <p className="card__price">₽ {dataCompounds[10].price}</p>
                  <p className="card__synonyms">{dataCompounds[10].synonyms}</p>
                  <p className="card__category">{dataCompounds[10].category}</p>
                  <p className="card__CAS">{dataCompounds[10].CAS}</p>
              </div> 
          </a>
        </div>
      </div>
    </section>
  );
};

export default Suggestions;
