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

  let overlay = $(".overlay");
  let btnCallback = $(".popup__callback");
  let formCallback = document.querySelector("#templ").content.querySelector("#sendTel");
  let btnMail = $(".popup__mail");
  let formMail = document.querySelector("#templ").content.querySelector("#sendMail");


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
      overlay.addClass("overlay_active");
      overlay.css("top", pageYOffset);

      let fragment = new DocumentFragment();
      fragment.append(formCallback.cloneNode(true));

      overlay.append(fragment);

      document.body.style.overflow = "hidden";
      let newWinWidth = $(window).width();

      if (newWinWidth > winWidth) {
        $("body").css("padding-right", newWinWidth - winWidth + "px");
      }

      let nameField = $(".form__input_name");
      let telField = $(".form__input_tel");

      $(".form__btn_submit").on("click", () => {
        checkUserData("#sendTel", nameField, telField,);
      })

      $(".form__btn_close").on("click", () => {
        closePopup(overlay, "#sendTel");
      })

      overlay.on("click", (e) => {
        e.preventDefault();
        if (e.target.tagName == "DIV") {
          closePopup(overlay, "#sendTel");
        }
      })
    }
  })

  btnMail.on("click", () => {
    let winWidth = $(window).width();

    if (!overlay.hasClass("overlay_active")) {
      overlay.addClass("overlay_active");
      overlay.css("top", pageYOffset);

      let fragment = new DocumentFragment();
      fragment.append(formMail.cloneNode(true));

      overlay.append(fragment);

      document.body.style.overflow = "hidden";
      let newWinWidth = $(window).width();

      if (newWinWidth > winWidth) {
        $("body").css("padding-right", newWinWidth - winWidth + "px");
      }

      let nameField = $(".form__input_name");
      let telField = $(".form__input_tel");
      let mailField = $(".form__input_mail");

      $(".form__btn_submit").on("click", () => {
        checkUserData("#sendMail", nameField, telField, mailField);
      })

      $(".form__btn_close").on("click", () => {
        closePopup(overlay, "#sendMail");
      })

      overlay.on("click", (e) => {
        e.preventDefault();
        if (e.target.tagName == "DIV") {
          closePopup(overlay, "#sendMail");
        }
      })
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

function checkUserData(formType, nameField, telField, mailField = false) {
  if (nameField.val() == "" || telField.val() == "") {
    if (nameField.val() == "") {
      nameField.addClass("form__field_err");
    }
    if (telField.val() == "") {
      telField.addClass("form__field_err");
    }
    if (mailField && mailField.val() == "") {
      mailField.addClass("form__field_err");
    }
    return;
  } else {
    nameField.removeClass("form__field_err");
    telField.removeClass("form__field_err");
    if (mailField) {
      mailField.removeClass("form__field_err");
    }
    $(`${formType} .form__fieldset`).remove();
    $(".form__submit").addClass("form__submit_active");
  }
  return;
}

function closePopup(handler, formType) {
  handler.removeClass("overlay_active");
  $(`.overlay ${formType}`).remove();
  document.body.style.overflow = "";
  $("body").css("padding-right", 0);
  return;
}
