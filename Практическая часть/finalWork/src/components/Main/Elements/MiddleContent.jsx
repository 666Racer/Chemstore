const MiddleContent = () => {
  return (
    <section className="middle container center ">
      <div className="middle__content ">
        <div className="middle__content__pic ">
          <img
            className="middle__img "
            src="./img/middle/middle_image.jpg "
            alt="middle__image.jpg "
          />
          <div className="middle__content__pic__info ">
            <span className="middle__content__pic__text ">30%</span>
            <span className="middle__content__pic__text middle__content__pic__text--colored ">
              СКИДКА
            </span>
            <br />
            <span className="middle__content__pic__text middle__content__pic__text-bottom ">
              НОВЫМ КЛИЕНТАМ
            </span>
          </div>
        </div>
        <div className="middle__content__info ">
          <div className="middle__content__info__inner ">
            <div className="middle__content__info__inner-item ">        
              <svg xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  width="40"
                  height="40"
                  fill="#c5c1da">                  
                  <path d="M64 32C28.7 32 0 60.7 0 96L0 304l0 80 0 16c0 44.2 35.8 80 80 80c26.2 0 49.4-12.6 64-32c14.6 19.4 37.8 32 64 32c44.2 0 80-35.8 80-80c0-5.5-.6-10.8-1.6-16L416 384l33.6 0c-1 5.2-1.6 10.5-1.6 16c0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16l1.6 0c17.7 0 32-14.3 32-32l0-64 0-16 0-10.3c0-9.2-3.2-18.2-9-25.3l-58.8-71.8c-10.6-13-26.5-20.5-43.3-20.5L480 144l0-48c0-35.3-28.7-64-64-64L64 32zM585 256l-105 0 0-64 48.8 0c2.4 0 4.7 1.1 6.2 2.9L585 256zM528 368a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM176 400a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM80 368a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>

              </svg>
              <div className="inner-item__info ">
                <h3 className="inner-item__title ">Бесплатная доставка</h3>
                <p className="inner-item__text ">
                  При покупке от 30000 $.
                  Доставка по РФ и в страны СНГ.
                </p>
              </div>
            </div>
            <div className="middle__content__info__inner-item ">
              <svg xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                width="40"
                height="40"
                fill="#c5c1da">
                <path d="M374.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-320 320c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l320-320zM128 128A64 64 0 1 0 0 128a64 64 0 1 0 128 0zM384 384a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"/>
              </svg>
              <div className="inner-item__info ">
                <h3 className="inner-item__title ">Распродажи и скидки</h3>
                <p className="inner-item__text ">
                  Вы можете следить за распродажами на сайте -
                  или подписаться на бесплатную рассылку.
                </p>
              </div>
            </div>
            <div className="middle__content__info__inner-item ">
              <svg xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  width="40"
                  height="40"
                  fill="#c5c1da">
                <path d="M353.8 54.1L330.2 6.3c-3.9-8.3-16.1-8.6-20.4 0L286.2 54.1l-52.3 7.5c-9.3 1.4-13.3 12.9-6.4 19.8l38 37-9 52.1c-1.4 9.3 8.2 16.5 16.8 12.2l46.9-24.8 46.6 24.4c8.6 4.3 18.3-2.9 16.8-12.2l-9-52.1 38-36.6c6.8-6.8 2.9-18.3-6.4-19.8l-52.3-7.5zM256 256c-17.7 0-32 14.3-32 32l0 192c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-192c0-17.7-14.3-32-32-32l-128 0zM32 320c-17.7 0-32 14.3-32 32L0 480c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32L32 320zm416 96l0 64c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-128 0c-17.7 0-32 14.3-32 32z"/>
              </svg>
              <div className="inner-item__info ">
                <h3 className="inner-item__title ">Уверенность в качестве</h3>
                <p className="inner-item__text ">
                  Наши продукты поставляются с паспортами и ТУ - 
                  вы можете ознакомиться с ними при предзаказе.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiddleContent;
