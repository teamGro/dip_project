$(function(){let e={menu:$(".mobile-menu"),topElem:$(".mobile-menu__elem_top"),middleElem:$(".mobile-menu__elem_middle"),bottomElem:$(".mobile-menu__elem_bottom"),closeElemLeft:$(".mobile-menu__elem_ad-left"),closeElemRight:$(".mobile-menu__elem_ad-right")},a=$(".header__container"),l=$(".header__nav"),o=$(".navigate"),t=$(".gallery__items"),m=$(".gallery__item"),i=$(".footer__nav-list");t.removeClass("no-js"),m.removeClass("no-js"),e.menu.on("click",function(o){return $(this).hasClass("mobile-menu_closed")?(e.topElem.animate(),e.middleElem.animate({opacity:0},{duration:100}),e.bottomElem.animate(),$(this).removeClass("mobile-menu_closed").addClass("mobile-menu_opened"),a.removeClass("header__container").addClass("header__container_moved"),void l.removeClass("navigate_closed").addClass("navigate_opened")):$(this).hasClass("mobile-menu_opened")?(e.topElem.animate(),e.middleElem.animate({opacity:1}),e.bottomElem.animate(),a.removeClass("header__container_moved").addClass("header__container"),l.removeClass("navigate_opened").addClass("navigate_closed"),void $(this).removeClass("mobile-menu_opened").addClass("mobile-menu_closed")):void 0}),o.on("click",e=>{let a=$(e.target);"A"==a.prop("tagName")&&e.preventDefault();let l=a.attr("data-scroll"),o=$(`#${l}`).offset().top;$("html, body").animate({scrollTop:o},500)}),i.on("click",e=>{let a=$(e.target);"A"==a.prop("tagName")&&e.preventDefault();let l=a.attr("data-scroll"),o=$(`#${l}`).offset().top;$("html, body").animate({scrollTop:o},500)}),new Glide(".glide").mount(),new Glide(".glide",{startAt:0,breakpoints:{2000:{perView:3},1199:{perView:2},1023:{perView:1}}}).mount()});