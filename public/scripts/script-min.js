function checkUserData(e,o,l,t=!1){if(""==o.val()||""==l.val())return""==o.val()&&o.addClass("form__field_err"),""==l.val()&&l.addClass("form__field_err"),void(t&&""==t.val()&&t.addClass("form__field_err"));o.removeClass("form__field_err"),l.removeClass("form__field_err"),t&&t.removeClass("form__field_err"),$(`${e} .form__fieldset`).remove(),$(".form__submit").addClass("form__submit_active")}function closePopup(e,o){e.removeClass("overlay_active"),$(`.overlay ${o}`).remove(),document.body.style.overflow="",$("body").css("padding-right",0)}function addErrClass(e){e.hasClass("form__field_err")&&e.removeClass("form__field_err")}function removeErrClass(e){""==e.val()&&e.addClass("form__field_err")}$(function(){let e={menu:$(".mobile-menu"),topElem:$(".mobile-menu__elem_top"),middleElem:$(".mobile-menu__elem_middle"),bottomElem:$(".mobile-menu__elem_bottom"),closeElemLeft:$(".mobile-menu__elem_ad-left"),closeElemRight:$(".mobile-menu__elem_ad-right")},o=$(".header__container"),l=$(".header__nav"),t=$(".navigate"),a=$(".gallery__items"),s=$(".gallery__item"),n=$(".footer__nav-list"),r=$(".overlay"),i=$(".popup__callback"),d=document.querySelector("#templ").content.querySelector("#sendTel"),m=$(".popup__mail"),_=document.querySelector("#templ").content.querySelector("#sendMail");a.removeClass("no-js"),s.removeClass("no-js"),e.menu.on("click",function(t){return $(this).hasClass("mobile-menu_closed")?(e.topElem.animate(),e.middleElem.animate({opacity:0},{duration:100}),e.bottomElem.animate(),$(this).removeClass("mobile-menu_closed").addClass("mobile-menu_opened"),o.removeClass("header__container").addClass("header__container_moved"),void l.removeClass("navigate_closed").addClass("navigate_opened")):$(this).hasClass("mobile-menu_opened")?(e.topElem.animate(),e.middleElem.animate({opacity:1}),e.bottomElem.animate(),o.removeClass("header__container_moved").addClass("header__container"),l.removeClass("navigate_opened").addClass("navigate_closed"),void $(this).removeClass("mobile-menu_opened").addClass("mobile-menu_closed")):void 0}),t.on("click",e=>{let o=$(e.target);"A"==o.prop("tagName")&&e.preventDefault();let l=o.attr("data-scroll"),t=$(`#${l}`).offset().top;$("html, body").animate({scrollTop:t},500)}),n.on("click",e=>{let o=$(e.target);"A"==o.prop("tagName")&&e.preventDefault();let l=o.attr("data-scroll"),t=$(`#${l}`).offset().top;$("html, body").animate({scrollTop:t},500)}),i.on("click",()=>{let e=$(window).width();if(!r.hasClass("overlay_active")){r.addClass("overlay_active"),r.css("top",pageYOffset);let o=new DocumentFragment;o.append(d.cloneNode(!0)),r.append(o),document.body.style.overflow="hidden";let l=$(window).width();l>e&&$("body").css("padding-right",l-e+"px");let t=$(".form__input_name");setTimeout(()=>{t.focus()},500),t.on("focus",function(){addErrClass($(this))}),t.on("blur",function(){removeErrClass($(this))});let a=$(".form__input_tel");a.on("focus",function(){addErrClass($(this))}),a.on("blur",function(){removeErrClass($(this))}),$(".form__btn_submit").on("click",()=>{checkUserData("#sendTel",t,a)}),$(".form__btn_close").on("click",()=>{closePopup(r,"#sendTel")}),r.on("click",e=>{e.preventDefault(),"DIV"==e.target.tagName&&closePopup(r,"#sendTel")}),$("body").on("keyup",e=>{27==e.keyCode&&closePopup(r,"#sendMail")})}}),m.on("click",()=>{let e=$(window).width();if(!r.hasClass("overlay_active")){r.addClass("overlay_active"),r.css("top",pageYOffset);let o=new DocumentFragment;o.append(_.cloneNode(!0)),r.append(o),document.body.style.overflow="hidden";let l=$(window).width();l>e&&$("body").css("padding-right",l-e+"px");let t=$(".form__input_name");setTimeout(()=>{t.focus()},500),t.on("focus",function(){addErrClass($(this))}),t.on("blur",function(){removeErrClass($(this))});let a=$(".form__input_tel");a.on("focus",function(){addErrClass($(this))}),a.on("blur",function(){removeErrClass($(this))});let s=$(".form__input_mail");s.on("focus",function(){addErrClass($(this))}),s.on("blur",function(){removeErrClass($(this))}),$(".form__btn_submit").on("click",()=>{checkUserData("#sendMail",t,a,s)}),$(".form__btn_close").on("click",()=>{closePopup(r,"#sendMail")}),r.on("click",e=>{e.preventDefault(),"DIV"==e.target.tagName&&closePopup(r,"#sendMail")}),$("body").on("keyup",e=>{27==e.keyCode&&closePopup(r,"#sendMail")})}}),new Glide(".glide").mount(),new Glide(".glide",{startAt:0,breakpoints:{2000:{perView:3},1199:{perView:2},1023:{perView:1}}}).mount()});