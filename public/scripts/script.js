$(function () {
  let menuBtnObj = {
    menu: $(".mobile-menu"),
    topElem: $(".mobile-menu__elem_top"),
    middleElem: $(".mobile-menu__elem_middle"),
    bottomElem: $(".mobile-menu__elem_bottom"),
    closeElemLeft: $(".mobile-menu__elem_ad-left"),
    closeElemRight: $(".mobile-menu__elem_ad-right")
  }

  let headerContainer = $(".header__container");
  let headerNav = $(".header__nav");
  let linksList = $(".navigate");
  let galleryItems = $(".gallery__items");
  let galleryItem = $(".gallery__item");
  let linksListFooter = $(".footer__nav-list");
  let btnCallback = $(".popup__callback");
  let overlay = $(".overlay");
  let formCallback = document.querySelector("#templ").content.querySelector("#sendTel");


  galleryItems.removeClass("no-js");
  galleryItem.removeClass("no-js");

  menuBtnObj.menu.on("click", function (e) {

    if ($(this).hasClass("mobile-menu_closed")) {
      menuBtnObj.topElem.animate()
      menuBtnObj.middleElem.animate({
        opacity: 0
      }, {
        duration: 100
      });
      menuBtnObj.bottomElem.animate()

      $(this)
        .removeClass("mobile-menu_closed")
        .addClass("mobile-menu_opened");

      headerContainer
        .removeClass("header__container")
        .addClass("header__container_moved");

      headerNav
        .removeClass("navigate_closed")
        .addClass("navigate_opened");

      return;
    }

    if ($(this).hasClass("mobile-menu_opened")) {
      menuBtnObj.topElem.animate()
      menuBtnObj.middleElem.animate({
        opacity: 1
      });
      menuBtnObj.bottomElem.animate()

      headerContainer
        .removeClass("header__container_moved")
        .addClass("header__container")

      headerNav
        .removeClass("navigate_opened")
        .addClass("navigate_closed")


      $(this)
        .removeClass("mobile-menu_opened")
        .addClass("mobile-menu_closed");
      return;
    }
  })


  linksList.on("click", (e) => {
    let target = $(e.target);
    if (target.prop("tagName") == "A") e.preventDefault();
    let scrollName = target.attr("data-scroll");
    let scrollElem = $(`#${scrollName}`);
    let scrollTop = scrollElem.offset().top;

    $('html, body').animate({
      scrollTop: scrollTop
    }, 500);

  })

  linksListFooter.on("click", (e) => {
    let target = $(e.target);
    if (target.prop("tagName") == "A") e.preventDefault();
    let scrollName = target.attr("data-scroll");
    let scrollElem = $(`#${scrollName}`);
    let scrollTop = scrollElem.offset().top;

    $('html, body').animate({
      scrollTop: scrollTop
    }, 500);

  })

  btnCallback.on("click", () => {
    let winWidth = $(window).width();

    if (!overlay.hasClass("overlay_active")) {
      // overlay.removeClass("overlay_disactive");
      overlay.addClass("overlay_active");
      overlay.css("top", pageYOffset);

      let fragment = new DocumentFragment();
      fragment.append(formCallback);

      overlay.append(fragment);

      document.body.style.overflow = "hidden";
      let newWinWidth = $(window).width();

      if (newWinWidth > winWidth) {
        $("body").css("padding-right", newWinWidth - winWidth + "px");
      }

      $(".form__close").on("click", () => {
        overlay.removeClass("overlay_active");
        // overlay.addClass("overlay_disactive");
        document.body.style.overflow = "";
        $("body").css("padding-right", 0);
      })

      overlay.on("click", (e) => {
        if (e.target.tagName == "DIV") {
          overlay.removeClass("overlay_active");
          // overlay.addClass("overlay_disactive");
          document.body.style.overflow = "";
          $("body").css("padding-right", 0);
        }
      })
    } else {
      // overlay.removeClass("overlay_disactive");
      // overlay.addClass("overlay_active");
    }
  })

  new Glide('.glide').mount()
  new Glide('.glide', {
    startAt: 0,
    breakpoints: {
      2000: {
        perView: 3
      },
      1199: {
        perView: 2
      },
      1023: {
        perView: 1
      }
    }
  }).mount()
})