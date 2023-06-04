(() => {
  //Бургер меню

  if(document.querySelector('.burger')) {
    document.querySelector('.burger').addEventListener('click', (e) => {
      document.querySelector('.burger').classList.toggle('burger--active');
      document.querySelector('.header__nav').classList.toggle('header__nav--open');
      document.querySelector('body').classList.toggle('overflow-hidd');
    });
  
    document.querySelectorAll('.header__link').forEach((i) => {
      i.addEventListener('click', () => {
        document.querySelector('.burger').classList.remove('burger--active');
        document.querySelector('.header__nav').classList.remove('header__nav--open');
        document.querySelector('body').classList.remove('overflow-hidd');
      });
    });
  }

  //Селект региона
  const regionSelect = document.querySelector('#region');
  const regionChoices = new Choices(regionSelect, {
    searchEnabled: false,
    itemSelectText: '',
    
  });

  //Селект категории
  const categoriesSelect = document.querySelector('#categories');
  const categoriesChoices = new Choices(categoriesSelect, {
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
    position: 'bottom',
    
  });

  //Hero свайпер

  if(document.querySelector('.hero__swiper')) {
    const swiperHero = new Swiper('.hero__swiper', {
      pagination: {
        el: '.hero .swiper-pagination',
        clickable: true,
      },
      autoHeight: true,
      loop: true,
      autoplay: {
        delay: 4000,
      },

      a11y: {
        prevSlideMessage: 'предыдущий слайд',
        nextSlideMessage: 'следующий слайд',
      },
    });

    document.querySelectorAll('.hero .swiper-pagination-bullet').forEach((i) => {
      i.addEventListener('click', () => {
        document.querySelectorAll('.pagination-svg').forEach((i) => {
          i.remove();
        });
      });
    });

    if (document.documentElement.clientWidth > 767) {
      document.querySelectorAll('.swiper-pagination-bullet').forEach((i) => {
        i.insertAdjacentHTML('beforeend', `
        <svg width="14" height="14" class="pagination-svg">
          <circle r="6" cx="7" cy="7" fill="transparent" stroke="#FF862F" stroke-width="2"/>
        </svg>
        ` )
      });
  
      swiperHero.on('sliderFirstMove', () => {
        document.querySelectorAll('.pagination-svg').forEach((i) => {
          i.remove();
        });
      });

      document.querySelectorAll('.hero .swiper-pagination-bullet').forEach((i) => {
        i.addEventListener('click', () => {
          document.querySelectorAll('.pagination-svg').forEach((i) => {
            i.remove();
          });
        });
      });
    };
    
    document.querySelectorAll('.swiper-slide-duplicate').forEach((i) => {
      i.setAttribute('aria-hidden', 'true');
    });

  };

  //Спецпредложения свайпер

  if(document.querySelector('.special__swiper')) {
    const swiperSpecial = new Swiper('.special__swiper', {
      pagination: {
        el: '.special .swiper-pagination',
        clickable: true,
      },
      autoHeight: true,
      navigation: {
        nextEl: '.special .swiper-button-next',
        prevEl: '.special .swiper-button-prev',
      },
      spaceBetween: 32,
      a11y: {
        prevSlideMessage: 'предыдущий слайд',
        nextSlideMessage: 'следующий слайд',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1
        },
  
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
  
        1024: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
  
        1286: {
          slidesPerView: 'auto',
          slidesPerGroup: 3,
        },
      },
      
    });
  };

  //Полезное свайпер
  if(document.querySelector('.useful__swiper')) {
    const swiperUseful = new Swiper('.useful__swiper', {
      pagination: {
        el: '.useful .swiper-pagination',
        clickable: true,
      },
      autoHeight: true,
      navigation: {
        nextEl: '.useful .swiper-button-next',
        prevEl: '.useful .swiper-button-prev',
      },
      spaceBetween: 32,
      a11y: {
        prevSlideMessage: 'предыдущий слайд',
        nextSlideMessage: 'следующий слайд',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1
        },
  
        768: {
          slidesPerView: 2,
          slidesPerGroup: 1,
        },
  
        1024: {
          slidesPerView: 3,
          slidesPerGroup: 1,
        },
  
        1286: {
          slidesPerView: 2,
          slidesPerGroup: 1,
        },
      },
      
    });
  };


  //Тултип обратной связи
  if(document.querySelector('.feedback__span-desc')) {
    tippy('.feedback__span-desc', {
      content: 'Реплицированные с зарубежных источников, исследования формируют глобальную сеть.',
      duration: [300, 300],      
    });
  };


  //Валидация формы главной страницы
  if (document.querySelector('.feedback__form')) {
    const validation = new JustValidate('.feedback__form', {
      errorFieldCssClass: 'feedback__input--alert',
    });
  
    validation.addField('.feedback__input-name', [
      {
        rule: 'required',
      }
    ]);
  
    validation.addField('.feedback__input-phone', [
      {
        rule: 'required',
      },
      {
        rule: 'number',
      },    
    ]);
  
    validation.addField('.feedback__input-mail', [
      {
        rule: 'required',
      },
      {
        rule: 'email',
      },    
    ]);

    validation.addField('.feedback__checkbox', [
      {
        rule: 'required',
      },   
    ]);

    // document.querySelector('.feedback__btn').addEventListener('click', (e) => {
    //   // e.preventDefault();
    //   if(!document.querySelector('.feedback__checkbox').checked) {
    //     document.querySelector('.feedback__label-bottom').classList.add('feedback__label--alert')
    //   }
    // });
  };

  // Свайпер каталога
  if(document.querySelector('.catalog__swiper')) {
    const swiperCatalog = new Swiper('.catalog__swiper', {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
      a11y: {
        prevSlideMessage: 'предыдущий слайд',
        nextSlideMessage: 'следующий слайд',
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 16,
          grid: {
            rows: 3,
          },
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30,
          grid: {
            rows: 3,
          },
        },
        1024: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          grid: {
            rows: 3,
          },
          spaceBetween: 32,
        },
      },
    });
  };

  //Выпадающий списой фильтров
  if(document.querySelector('.catalog__filter-right-type')) {
    const filterType = document.querySelectorAll('.catalog__filter-right-type');
    filterType.forEach((type) => {
      type.addEventListener('click', (e) => {
        e.stopPropagation();
        if (e.currentTarget.classList.contains('is-active')) {
          e.currentTarget.classList.remove('is-active');
        } else {
          filterType.forEach((i) => {
            i.classList.remove('is-active');
          });
          e.currentTarget.classList.add('is-active');
        }
      })
    });

    document.querySelectorAll('.catalog__filter-dropdown').forEach((i) => {
      i.addEventListener('click', (e) => {
        e.stopPropagation();
      });
    });
  
    document.querySelector('body').addEventListener('click', () => {
      filterType.forEach((i) => {
        i.classList.remove('is-active');
      });
    });
  };

  
  //Range слайдер
  if (document.querySelector('#slider')) {
    const rangeSlider = document.querySelector('#slider');

  noUiSlider.create(rangeSlider, {
    start: [2000, 150000],
    connect: true,
    step: 1,
    range: {
        'min': 0,
        'max': 200000
    }
  });

  rangeSlider.noUiSlider.on('update', (value, handle) => {
    document.querySelector(`#input-${handle}`).value = Math.round(value[handle]);
  });

  document.querySelectorAll('.catalog__left .catalog__input').forEach((input) => {
    input.addEventListener('input', (e) => {
      const handle = e.currentTarget.dataset.input;
      const value = e.currentTarget.value 
      setRange(handle, value);
    });
  });

  function setRange(handle, value) {
    let range = [null, null];
    range[handle] = value;
    rangeSlider.noUiSlider.set(range);
  }
  }

  //Свайпер товара
  const swiperProduct = new Swiper('.product__swiper', {
    spaceBetween: 38,
    slidesPerGroup: 1,
    slidesPerView: 'auto',  
  });

  //Свайпер модального окна
  const swiperModal = new Swiper('.modal-swiper__swiper', {
    spaceBetween: 38,
    slidesPerGroup: 1,
    slidesPerView: 'auto',  
  });


  //Изменение крупног изображения
  document.querySelectorAll('.product__img-bottom').forEach((img) => {
    img.addEventListener('click', (e) => {
      changeImg('product__img-top', e.currentTarget);
    });
  });

  document.querySelectorAll('.product__vertical-img').forEach((img) => {
    img.addEventListener('click', (e) => {
      changeImg('product__img-top', e.currentTarget);
    });
  });


  //Модальное окно превью товара
  if (document.querySelector('.product__img-top')) {
    document.querySelector('.product__img-top').addEventListener('click', createModalPreview);
  };
  //Модальное окно покупки товара

  if (document.querySelector('.product__button-buy')) {
    document.querySelector('.product__button-buy').addEventListener('click', createModal);
  };

  //Свайпер похожих товаров
  const swiperSimilar = new Swiper('.similar__swiper', {
    pagination: {
      el: '.similar .swiper-pagination',
      clickable: true,
    },
    autoHeight: true,
    navigation: {
      nextEl: '.similar .swiper-button-next',
      prevEl: '.similar .swiper-button-prev',
    },
    a11y: {
      prevSlideMessage: 'предыдущий слайд',
      nextSlideMessage: 'следующий слайд',
    },
    breakpoints: {
      320: {
        spaceBetween: 16,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },

      768: {
        spaceBetween: 32,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },

      1024: {
        spaceBetween: 32,
        slidesPerView: 3,
        slidesPerGroup: 3,
      },

      1286: {
        spaceBetween: 32,
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },    
  });

  //Маска телефона
  if(document.querySelector('.feedback__input-phone')) {
    addTelMask('.feedback__input-phone');
  };


  //ФУНКЦИИ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  //Создаём маску телейфона
  function addTelMask(inputSelector) {
    const input = document.querySelector(inputSelector);
    const mask = new Inputmask("+7 999 999-99-99")
    mask.mask(input);
  } 


  //Меняем больщое изображение
  function changeImg(bigImgClass, targetImg) {
    document.querySelector(`.${bigImgClass}`).src = targetImg.src;
  };

  //Создаём модальное окно превью
  function createModalPreview() {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.insertAdjacentHTML('beforeend', createModalPreviewContent());
    document.querySelector('body').append(modal);
    // document.querySelector('body').insertAdjacentHTML('beforeend', createModalPreviewContent);

    document.querySelector('.modal').classList.add('animate__animated', 'animate__fadeIn');    

    document.querySelector('.modal__button-close').addEventListener('click', closeModal);

    const swiperModal = new Swiper('.modal-preview__swiper', {
      navigation: {
        nextEl: '.modal-preview__swiper .swiper-button-next',
        prevEl: '.modal-preview__swiper .swiper-button-prev',
      },
      spaceBetween: 78,
      slidesPerGroup: 1,
      slidesPerView: 'auto',  
    });

    document.querySelectorAll('.modal-preview__img-bottom').forEach((img) => {
      img.addEventListener('click', (e) => {
        changeImg('modal-preview__img-top', e.currentTarget);
      });
    });


  };

  function createModalPreviewContent() {
    return `    
    <div class="modal-preview-container">
      <div class="modal-preview-top">        
        <img src="./img/product/product-d31.webp" alt="" class="modal-preview__img-top modal-preview__img">
      </div>  

      <div class="modal-preview__swiper swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide swiper-slide-1">
            <img src="./img/product/product-d31-slide-1.webp" alt="фото продукта" class="modal-preview__img-bottom">
          </div>

          <div class="swiper-slide swiper-slide-2">
            <img src="./img/product/product-d31-slide-2.webp" alt="фото продукта" class="modal-preview__img-bottom">
          </div>

          <div class="swiper-slide swiper-slide-3">
            <img src="./img/product/product-d31-slide-3.webp" alt="фото продукта" class="modal-preview__img-bottom">
          </div>

          <div class="swiper-slide swiper-slide-4">
            <img src="./img/product/product-d31-slide-4.webp" alt="фото продукта" class="modal-preview__img-bottom">
          </div>
        </div>

        <div class="swiper-button-prev swiper-button">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_663_1759)">
              <circle r="15" transform="matrix(-1 0 0 1 16 16)" stroke="#A65CF0" fill="white" stroke-width="2"/>
              <path d="M18 11L13 16L18 21" stroke="#A65CF0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>                  
        </div>

        <div class="swiper-button-next swiper-button">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_663_1756)">
              <circle cx="16" cy="16" r="15" stroke="#A65CF0" fill="white" stroke-width="2"/>
              <path d="M14 11L19 16L14 21" stroke="#A65CF0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
            
        </div>
      </div>

      <button class="modal__button-close btn-reset">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.3812 0.397739L11.2581 9.03977C11.8029 9.57009 11.8029 10.4299 11.2581 10.9602L2.3812 19.6023C1.83647 20.1326 0.953281 20.1326 0.408549 19.6023C-0.136183 19.0719 -0.136183 18.2121 0.408549 17.6818L8.29914 10L0.40855 2.31819C-0.136182 1.78787 -0.136181 0.928057 0.408551 0.397739C0.953283 -0.13258 1.83647 -0.13258 2.3812 0.397739Z" fill="#999999"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6188 0.397739L8.74188 9.03977C8.19715 9.57009 8.19715 10.4299 8.74188 10.9602L17.6188 19.6023C18.1635 20.1326 19.0467 20.1326 19.5914 19.6023C20.1362 19.0719 20.1362 18.2121 19.5914 17.6818L11.7009 10L19.5914 2.31819C20.1362 1.78787 20.1362 0.928057 19.5914 0.397739C19.0467 -0.13258 18.1635 -0.13258 17.6188 0.397739Z" fill="#999999"/>
        </svg>          
      </button>
    </div>  
  `
  }




  //Создаём модальное окно покупки
  function createModal() {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.insertAdjacentHTML('beforeend', createModalBuy());
    document.querySelector('body').append(modal);
    
    document.querySelector('.modal').classList.add('animate__animated', 'animate__fadeIn');

    addTelMask('.modal__input-phone');

    document.querySelectorAll('.modal__input').forEach((i) => {
      i.addEventListener('input', () => {
        i.classList.remove ('modal__input--alert');
      });
    });

    document.querySelector('.modal__checkbox').addEventListener('input', () => {
      document.querySelector('.modal__span-bottom').classList.remove('modal__span-bottom--alert');
    });
    
    document.querySelector('.modal__btn').addEventListener('click', sendForm);
    document.querySelector('.modal__button-close').addEventListener('click', closeModal);
  };

  //Возвращаем HTML модального окна покупки
  function createModalBuy() {
    return `    
    <div class="modal__content modal__content-buy">
      <h2 class="modal__title">
        Купить в один клик
      </h2>

      <p class="modal__desc">
        Чтобы оформить заказ — заполните формы ниже и наш менеджер свяжется с вами в течении часа.
      </p>

      <form action="POST" class="modal__form flex">
        <label for="" class="modal__label-name modal__label">                
          <input type="text" placeholder="Как вас зовут?" class="modal__input-name modal__input">

          <span class="modal__span-alert">
            Неверный формат
          </span>
        </label>

        <label for="" class="modal__label-phone modal__label">
          <input type="text" placeholder="Ваш телефон" class="modal__input-phone modal__input">
          
          <span class="modal__span-alert">
            Неверный формат
          </span>
        </label>

        <div class="modal__form-bottom flex">
          <button type="submit" class="modal__btn btn-fill">
            Отправить
          </button>

          <label for="" class="modal__label-bottom">
            <input id="modal-check" type="checkbox" class="modal__checkbox">

            <label for="modal-check" class="modal__span-bottom">
              Принимаю 
              <a href="#" class="modal__link">
                пользовательское соглашение
              </a>
            </label>
          </label>
        </div>
      </form>

      <button class="modal__button-close btn-reset">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.3812 0.397739L11.2581 9.03977C11.8029 9.57009 11.8029 10.4299 11.2581 10.9602L2.3812 19.6023C1.83647 20.1326 0.953281 20.1326 0.408549 19.6023C-0.136183 19.0719 -0.136183 18.2121 0.408549 17.6818L8.29914 10L0.40855 2.31819C-0.136182 1.78787 -0.136181 0.928057 0.408551 0.397739C0.953283 -0.13258 1.83647 -0.13258 2.3812 0.397739Z" fill="#999999"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6188 0.397739L8.74188 9.03977C8.19715 9.57009 8.19715 10.4299 8.74188 10.9602L17.6188 19.6023C18.1635 20.1326 19.0467 20.1326 19.5914 19.6023C20.1362 19.0719 20.1362 18.2121 19.5914 17.6818L11.7009 10L19.5914 2.31819C20.1362 1.78787 20.1362 0.928057 19.5914 0.397739C19.0467 -0.13258 18.1635 -0.13258 17.6188 0.397739Z" fill="#999999"/>
        </svg>          
      </button>
    </div>  
  `
  }
  
  function createModalThx() {
    return `
    <div class="modal__content modal__content-txh">
      <img src="../img/product/modal-logo.svg" alt="лого" class="modal__img">

      <p class="modal__desc-thx">
        Спасибо, мы вам перезвоним!
      </p>

      <button class="modal__button-close-thx modal__button-close btn-reset">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.3812 0.397739L11.2581 9.03977C11.8029 9.57009 11.8029 10.4299 11.2581 10.9602L2.3812 19.6023C1.83647 20.1326 0.953281 20.1326 0.408549 19.6023C-0.136183 19.0719 -0.136183 18.2121 0.408549 17.6818L8.29914 10L0.40855 2.31819C-0.136182 1.78787 -0.136181 0.928057 0.408551 0.397739C0.953283 -0.13258 1.83647 -0.13258 2.3812 0.397739Z" fill="#999999"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6188 0.397739L8.74188 9.03977C8.19715 9.57009 8.19715 10.4299 8.74188 10.9602L17.6188 19.6023C18.1635 20.1326 19.0467 20.1326 19.5914 19.6023C20.1362 19.0719 20.1362 18.2121 19.5914 17.6818L11.7009 10L19.5914 2.31819C20.1362 1.78787 20.1362 0.928057 19.5914 0.397739C19.0467 -0.13258 18.1635 -0.13258 17.6188 0.397739Z" fill="#999999"/>
        </svg>          
      </button>
    </div>
    `
  }

  //Отправляет форму покупки
  function sendForm(event) {
    event.preventDefault();

    if (validationForm()) {
      closeModalBuy();
      openModalThx();
    }
  }

  //Зокрываем модальное окно
  function closeModal() {
    document.querySelector('.modal').classList.add('animate__fadeOut');
    setTimeout(() => {
      document.querySelector('.modal').remove();
    }, 700);
  };

  //Проводим валидацию формы
  function validationForm() {
    let validationStatus = true;
    const modalCheckbox = document.querySelector('.modal__checkbox');
    
    document.querySelectorAll('.modal__input').forEach((i) => {
      if (!i.value) {
        i.classList.add('modal__input--alert'),
        validationStatus = false;
      }
    });

    if (!modalCheckbox.checked) {
      document.querySelector('.modal__span-bottom').classList.add('modal__span-bottom--alert');
      validationStatus = false;
    }

    return validationStatus
  };

  //Убираем модально окно покупки
  function closeModalBuy() {
    document.querySelector('.modal__content-buy').classList.add('animate__animated', 'animate__fadeOutDown')
    
    setTimeout(() => {
      document.querySelector('.modal__content-buy').remove();
    }, 700);
  };

  //Добавляем модальное окно благодарности
  function openModalThx() {
    document.querySelector('.modal').insertAdjacentHTML('beforeend', createModalThx());
    document.querySelector('.modal__content-txh').classList.add('animate__animated', 'animate__fadeInDown');
    document.querySelector('.modal__button-close-thx').addEventListener('click', closeModal);
  }

})();

