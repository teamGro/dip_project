$(function(){let e={menu:$(".mobile-menu"),topElem:$(".mobile-menu__elem_top"),middleElem:$(".mobile-menu__elem_middle"),bottomElem:$(".mobile-menu__elem_bottom"),closeElemLeft:$(".mobile-menu__elem_ad-left"),closeElemRight:$(".mobile-menu__elem_ad-right")},o=$(".header__container"),t=$(".header__nav"),a=$(".navigate"),l=$(".gallery__items"),s=$(".gallery__item"),n=$(".footer__nav-list"),r=$(".overlay"),i=$(".popup__callback"),d=document.querySelector("#templ").content.querySelector("#sendTel"),m=$(".popup__mail"),_=document.querySelector("#templ").content.querySelector("#sendMail");l.removeClass("no-js"),s.removeClass("no-js"),e.menu.on("click",function(a){return $(this).hasClass("mobile-menu_closed")?(e.topElem.animate(),e.middleElem.animate({opacity:0},{duration:100}),e.bottomElem.animate(),$(this).removeClass("mobile-menu_closed").addClass("mobile-menu_opened"),o.removeClass("header__container").addClass("header__container_moved"),void t.removeClass("navigate_closed").addClass("navigate_opened")):$(this).hasClass("mobile-menu_opened")?(e.topElem.animate(),e.middleElem.animate({opacity:1}),e.bottomElem.animate(),o.removeClass("header__container_moved").addClass("header__container"),t.removeClass("navigate_opened").addClass("navigate_closed"),void $(this).removeClass("mobile-menu_opened").addClass("mobile-menu_closed")):void 0}),a.on("click",e=>{let o=$(e.target);"A"==o.prop("tagName")&&e.preventDefault();let t=o.attr("data-scroll"),a=$(`#${t}`).offset().top;$("html, body").animate({scrollTop:a},500)}),n.on("click",e=>{let o=$(e.target);"A"==o.prop("tagName")&&e.preventDefault();let t=o.attr("data-scroll"),a=$(`#${t}`).offset().top;$("html, body").animate({scrollTop:a},500)}),i.on("click",()=>{let e=$(window).width();if(!r.hasClass("overlay_active")){r.addClass("overlay_active"),r.css("top",pageYOffset);let o=new DocumentFragment;o.append(d.cloneNode(!0)),r.append(o),document.body.style.overflow="hidden";let t=$(window).width();t>e&&$("body").css("padding-right",t-e+"px");let a=$(".form__input_name");setTimeout(()=>{a.focus()},500),a.on("focus",function(){addErrClass($(this))}),a.on("blur",function(){removeErrClass($(this))});let l=$(".form__input_tel");l.on("focus",function(){addErrClass($(this))}),l.on("blur",function(){removeErrClass($(this))}),$(".form__btn_submit").on("click",()=>{checkUserData("#sendTel",a,l)}),$(".form__btn_close").on("click",()=>{closePopup(r,"#sendTel")}),r.on("click",e=>{e.preventDefault(),"DIV"==e.target.tagName&&closePopup(r,"#sendTel")}),$("body").on("keyup",e=>{27==e.keyCode&&closePopup(r,"#sendMail")})}}),m.on("click",()=>{let e=$(window).width();if(!r.hasClass("overlay_active")){r.addClass("overlay_active"),r.css("top",pageYOffset);let o=new DocumentFragment;o.append(_.cloneNode(!0)),r.append(o),document.body.style.overflow="hidden";let t=$(window).width();t>e&&$("body").css("padding-right",t-e+"px");let a=$(".form__input_name");setTimeout(()=>{a.focus()},500),a.on("focus",function(){addErrClass($(this))}),a.on("blur",function(){removeErrClass($(this))});let l=$(".form__input_tel");l.on("focus",function(){addErrClass($(this))}),l.on("blur",function(){removeErrClass($(this))});let s=$(".form__input_mail");s.on("focus",function(){addErrClass($(this))}),s.on("blur",function(){removeErrClass($(this))}),$(".form__btn_submit").on("click",()=>{checkUserData("#sendMail",a,l,s)}),$(".form__btn_close").on("click",()=>{closePopup(r,"#sendMail")}),r.on("click",e=>{e.preventDefault(),"DIV"==e.target.tagName&&closePopup(r,"#sendMail")}),$("body").on("keyup",e=>{27==e.keyCode&&closePopup(r,"#sendMail")})}}),new Glide(".glide").mount(),new Glide(".glide",{startAt:0,breakpoints:{2000:{perView:3},1199:{perView:2},1023:{perView:1}}}).mount()});let dataPatterns={name:/^[а-яa-z0-9_-\S]{3,16}$/i,phone:/^((\+?7|8)[ \-]?)?((\(\d{3}\))|(\d{3}))?([ \-])?(\d{3}[\- ]?\d{2}[\- ]?\d{2})$/,mail:/^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/};function checkUserData(e,o,t,a=!1){dataPatterns.name.test(o.val())?dataPatterns.name.test(o.val())&&o.removeClass("form__field_err"):o.addClass("form__field_err"),dataPatterns.phone.test(t.val())?dataPatterns.name.test(t.val())&&t.removeClass("form__field_err"):t.addClass("form__field_err"),a&&(dataPatterns.mail.test(a.val())?dataPatterns.mail.test(a.val())&&a.removeClass("form__field_err"):a.addClass("form__field_err")),document.querySelector(".form__field_err")||($(`${e} .form__fieldset`).remove(),$(".form__submit").addClass("form__submit_active"))}function closePopup(e,o){e.removeClass("overlay_active"),$(`.overlay ${o}`).remove(),document.body.style.overflow="",$("body").css("padding-right",0)}function addErrClass(e){e.hasClass("form__field_err")&&e.removeClass("form__field_err")}function removeErrClass(e){""==e.val()&&e.addClass("form__field_err")}