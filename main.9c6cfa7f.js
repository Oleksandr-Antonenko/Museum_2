parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".burger-button"),t=document.querySelector(".header__language"),n=document.querySelector(".menu"),s=document.querySelector(".menu__contacts"),c=document.querySelector(".menu__list"),l=document.querySelectorAll(".menu__link, .menu__button"),i=document.querySelector(".menu__line"),o=document.querySelector(".page__body"),r=document.querySelector(".menu__button"),a=document.querySelector(".menu__image");function u(){e.classList.toggle("burger-button--is-active"),n.classList.toggle("menu--is-open"),s.classList.toggle("menu__contacts--is-visible"),c.classList.toggle("menu__list--is-visible"),i.classList.toggle("menu__line--max-width"),o.classList.toggle("page__body--with-menu"),r.classList.toggle("menu__button--is-visible"),a.classList.toggle("menu__image--is-visible"),window.innerWidth>640||t.classList.toggle("header__language--is-visible")}function d(){n.classList.contains("menu--is-open")&&e.click()}e.addEventListener("click",u),l.forEach(function(e){return e.addEventListener("click",d)})}),document.addEventListener("DOMContentLoaded",function(){var e,t,n=document.querySelector(".select"),s=n.getElementsByTagName("select")[0],c=s.length;n.innerHTML+='<div class="select__button"><span class ="select__txt">'+s.options[s.selectedIndex].innerHTML+'</span><span class="select__chevron"></div>';var l=document.createElement("DIV");for(l.setAttribute("class","select__items select__items--hide"),e=0;e<c;e++)(t=document.createElement("DIV")).setAttribute("class","select__item"),s.options[e].hasAttribute("selected")&&t.classList.toggle("select__item--selected"),t.innerHTML=s.options[e].innerHTML,t.addEventListener("click",function(e){var t,n,s,c,l=this.parentNode.parentNode.getElementsByTagName("select")[0],i=l.length,o=document.querySelector(".select__txt");for(n=0;n<i;n++)if(l.options[n].innerHTML===this.innerHTML){for(l.selectedIndex=n,o.innerHTML=this.innerHTML,c=(t=this.parentNode.getElementsByClassName("select__item--selected")).length,s=0;s<c;s++)t[s].classList.remove("select__item--selected");this.classList.toggle("select__item--selected");break}o.click()}),l.appendChild(t);function i(e){var t,n=[],s=document.getElementsByClassName("select__items"),c=document.getElementsByClassName("select__button"),l=s.length,i=c.length;for(t=0;t<i;t++)e===c[t]?n.push(t):c[t].classList.remove("select__button--active");for(t=0;t<l;t++)n.indexOf(t)&&s[t].classList.add("select__items--hide")}n.appendChild(l),document.querySelector(".select__button").addEventListener("click",function(e){e.stopPropagation(),i(this),this.nextSibling.classList.toggle("select__items--hide"),this.classList.toggle("select__button--active")}),document.addEventListener("click",i)}),document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".event").forEach(function(e){e.addEventListener("mouseover",function(t){"img"===t.target.tagName.toLowerCase()&&(t.target.style.transform="scale(1.1)",e.querySelector(".event__title").style.color="#cd4d31"),t.target.classList.contains("event__title")&&(t.target.style.color="#cd4d31",e.getElementsByTagName("img")[0].style.transform="scale(1.1)")}),e.addEventListener("mouseout",function(){e.getElementsByTagName("img")[0].style.transform=null,e.querySelector(".event__title").style.color=null})})}),document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector("#subscribeButton"),t=document.querySelector(".subscribe__form");e.addEventListener("click",function(e){e.preventDefault(),!0===t.reportValidity()&&t.reset()},!1)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.9c6cfa7f.js.map