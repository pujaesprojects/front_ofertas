(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{109:function(e,t,n){"use strict";n.r(t);var r=n(73),o=n(0);n(82),n(84),n(107),n(102),n(103),n(105),n(108),n(106),n(101),n(99),n(100),n(104);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(i,e);var t,n,r,o=(t=i,function(){var e,n=f(t);if(d()){var r=f(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return l(this,e)});function i(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(e=o.call(this)).host="http://34.70.156.253:8080/api",e}return u(i,null,[{key:"properties",get:function(){return{host:String,categories:Array}}}]),u(i,[{key:"getCategories",value:function(){var e=this;fetch(this.host+"/categories/").then((function(e){return e.json()})).then((function(t){e.categories=t._embedded.categories,e.dispatchEvent(new CustomEvent("categories-dm-success",{detail:e.categories}))})).catch((function(t){console.log("Error get Categories: ",+t),e.dispatchEvent(new CustomEvent("categories-dm-error"))}))}},{key:"getProducts",value:function(e){var t=this,n=this.categories.find((function(t){return t.name==e}));n=n._links.products.href,fetch(n).then((function(e){return e.json()})).then((function(e){t.dispatchEvent(new CustomEvent("products-dm-success",{detail:e._embedded.products}))})).catch((function(e){console.log("Error get Categories: ",+e),t.dispatchEvent(new CustomEvent("products-dm-error"))}))}},{key:"getProviderProducts",value:function(e){var t=this;return e.map((function(e){var n={};return t.getProviderProduct(e).then((function(e){return n=e})),n}))}},{key:"getProviderByProduct",value:function(e){var t=this,n=e._links.provider.href,r="";fetch(n).then((function(e){return r=e.url,e.json()})).then((function(e){t.dispatchEvent(new CustomEvent("product-with-provider-success",{detail:{detail:e.content,url:r}}))}))}},{key:"callProvider",value:(n=regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r.content);case 7:case"end":return e.stop()}}),e)})),r=function(){var e=this,t=arguments;return new Promise((function(r,o){var i=n.apply(e,t);function c(e){a(i,r,o,c,u,"next",e)}function u(e){a(i,r,o,c,u,"throw",e)}c(void 0)}))},function(e){return r.apply(this,arguments)})}]),i}(o.a);function h(e){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t,n){return t&&m(e.prototype,t),n&&m(e,n),e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}customElements.define("products-dm",p);var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(r,e);var t,n=(t=r,function(){var e,n=w(t);if(g()){var r=w(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return b(this,e)});function r(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(e=n.call(this)).host="http://34.70.156.253:8080/api/quotation",e}return v(r,null,[{key:"properties",get:function(){return{host:String,name:String,email:String,items:Array}}}]),v(r,[{key:"sendQuotation",value:function(){var e=this,t=new Headers;t.append("Content-Type","application/json");var n={customerName:this.name,email:this.email,products:this.items},r={method:"POST",headers:t,body:JSON.stringify(n)};fetch(this.host+"/create-quotation",r).then((function(e){return e.json()})).then((function(t){e.dispatchEvent(new CustomEvent("quotation-dm-success",{detail:{id:t.id}})),console.log(t)})).catch((function(e){console.log("Error crear cotizacion: ",+e)}))}}]),r}(o.a);function S(e){return(S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function E(){var e=C(["\n\n      .container {\n        margin: 20px;\n      }\n\n      bbva-header-main {\n        --bbva-header-main-bg-color: #1576f3;\n      }\n      .header {\n        background-color: #1464A5;\n      }\n\n      .list-products {\n        display: block;\n        padding: 1.5em;\n      }\n\n      .title {\n        text-align: center;\n        margin-top: 3rem;\n        font-size: larger;\n        font-weight: 600;\n      }\n\n      vaadin-grid-pro {\n        max-height: 300px;\n      }\n\n      .confirm-button {\n        text-align: center;\n        margin: 20px;\n      }\n    "]);return E=function(){return e},e}function k(){var e=C(['\n      <cells-template-paper-drawer-panel mode="seamed">\n        <div slot="app__header">\n          <bbva-header-main\n            class="header"\n            text="COTIZA TUS PRODUCTOS">\n          </bbva-header-main>\n        </div>\n\n        <div slot="app__main" class="container">\n        <vaadin-form-layout>\n          <vaadin-text-field id="txtName" label="Nombre" placeholder="Jane"></vaadin-text-field>\n          <vaadin-text-field label="Apellido" placeholder="Doe"></vaadin-text-field>\n          <vaadin-text-field id="txtEmail" label="Email" placeholder="jane.doe@example.com"></vaadin-text-field>\n          <vaadin-date-picker label="Fecha de entrega" placeholder="1993-06-23"></vaadin-date-picker>\n          <vaadin-combo-box @selected-item-changed=',' label="Categoría" placeholder="Celulares y teléfonos" colspan="2"></vaadin-combo-box>\n        </vaadin-form-layout>\n        <p class="title">Selecciona los productos de tu cotización</p>\n        <div class="list-products">\n          <vaadin-grid-pro overflow="bottom top">\n            <vaadin-grid-selection-column></vaadin-grid-selection-column>\n            <vaadin-grid-filter-column path="product" header="Producto" theme="small"></vaadin-grid-filter-column>\n            <vaadin-grid-filter-column path="prov" header="Proveedor" theme="small"></vaadin-grid-filter-column>\n            <vaadin-grid-pro-edit-column path="cant" header="Cantidad" editor-type="select"></vaadin-grid-pro-edit-column>\n          </vaadin-grid-pro>\n          <div class="confirm-button">\n            <vaadin-button @click=',' theme="primary">Agregar productos</vaadin-button>\n          </div>\n          <vaadin-dialog no-close-on-esc no-close-on-outside-click>\n          </vaadin-dialog>\n       </div>\n       <div slot="app__overlay" class="container">\n         <products-dm id="productsDM"\n            @categories-dm-success = ',"\n            @categories-dm-error = ","\n            @products-dm-success = ","\n            @product-with-provider-success = ",'\n          ></products-dm>\n          <quotation-dm id="quotationDM"\n            @quotation-dm-success = ',">\n          </quotation-dm>\n      </div>\n    </cells-template-paper-drawer-panel>"]);return k=function(){return e},e}function C(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(e,t,n){return t&&O(e.prototype,t),n&&O(e,n),e}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e,t){return!t||"object"!==S(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function R(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}customElements.define("quotation-dm",P);var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(r,e);var t,n=(t=r,function(){var e,n=q(t);if(R()){var r=q(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return j(this,e)});function r(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(e=n.call(this)).itemsCategory=[],e.itemsProducts=[],e.itemsSelected=[],e}return x(r,null,[{key:"is",get:function(){return"another-page"}},{key:"properties",get:function(){return{itemsCategoryitems:Array,itemsProducts:Object,name:String,email:String,itemsSelected:Array}}}]),x(r,[{key:"onPageEnter",value:function(){this.getCategories()}},{key:"reloadCategories",value:function(){this.getCategories()}},{key:"loadCategories",value:function(e){var t=this.shadowRoot.querySelector("vaadin-combo-box"),n=[];for(var r in e.detail)n.push(e.detail[r].name);t.items=n}},{key:"loadProducts",value:function(e){var t=this,n=this.shadowRoot.querySelector("vaadin-grid-pro");n.querySelector('[path="cant"]').editorOptions=this.returnNumbers(),this.itemsProducts=this.normalizeProductswithOutProvider(e.detail),this.normalizeProductsData(e.detail),setTimeout((function(){n.items=t.itemsProducts}),500)}},{key:"loadProductswithProvider",value:function(e){this.itemsProducts=this.itemsProducts.map((function(t){return t.idProvider===e.detail.url.substring(e.detail.url.length-11,e.detail.url.length-9)&&(t.prov=e.detail.detail.name),t}))}},{key:"normalizeProductswithOutProvider",value:function(e){return e.map((function(e){return{product:e.name,prov:"",cant:1,idProvider:e._links.self.href.substring(e._links.self.href.length-2)}}))}},{key:"normalizeProductsData",value:function(e){var t=this.shadowRoot.querySelector("#productsDM");return e.map((function(e){t.getProviderByProduct(e)}))}},{key:"returnNumbers",value:function(){for(var e=[],t=1;t<=100;)e.push(t),t+=1;return e}},{key:"getCategories",value:function(){this.shadowRoot.querySelector("#productsDM").getCategories()}},{key:"categorieSelected",value:function(e){var t=e.detail.value;this.shadowRoot.querySelector("#productsDM").getProducts(t)}},{key:"sendQuotation",value:function(){var e=this.shadowRoot.querySelector("#txtName").value,t=this.shadowRoot.querySelector("#txtEmail").value,n=this.shadowRoot.querySelector("#quotationDM");n.name=e,n.email=t,this.itemsSelected=this.itemsSelected.map((function(e){return{productName:e.product,quantity:e.cant}})),n.items=this.itemsSelected,n.sendQuotation()}},{key:"openDialog",value:function(){var e=this;if(this.selectedItems(),0===this.itemsSelected.length){var t=this.shadowRoot.querySelector("vaadin-dialog");t.renderer=function(e,t){var n=window.document.createElement("div");n.textContent="Debe agregar productos a su cotización";var r=window.document.createElement("br"),o=window.document.createElement("vaadin-button");o.setAttribute("theme","primary"),o.textContent="Aceptar",o.setAttribute("style","margin-right: 1em"),o.addEventListener("click",(function(){t.opened=!1})),e.appendChild(n),e.appendChild(r),e.appendChild(o)},t.opened=!0}else{var n=this.shadowRoot.querySelector("vaadin-dialog");n.renderer=function(t,n){var r=window.document.createElement("div");r.setAttribute("id","dialogText"),r.textContent="Desea enviar la cotización?";var o=window.document.createElement("br"),i=window.document.createElement("vaadin-button");i.setAttribute("theme","primary"),i.textContent="Enviar",i.setAttribute("style","margin-right: 1em"),i.addEventListener("click",(function(){e.sendQuotation(),n.opened=!1}));var a=window.document.createElement("vaadin-button");a.textContent="Cancelar",a.addEventListener("click",(function(){n.opened=!1})),t.appendChild(r),t.appendChild(o),t.appendChild(i),t.appendChild(a)},n.opened=!0}}},{key:"confirmQuotation",value:function(e){var t=this.shadowRoot.querySelector("vaadin-dialog");t.renderer=function(t,n){var r=window.document.createElement("div");r.textContent="Su cotización se ha registrado bajo el consecutivo:  "+e.detail.id+". En breve recibirá un correo electrónico con las ofertas de los proveedores";var o=window.document.createElement("br"),i=window.document.createElement("vaadin-button");i.setAttribute("theme","primary"),i.textContent="Aceptar",i.setAttribute("style","margin-right: 1em"),i.addEventListener("click",(function(){n.opened=!1,location.reload()})),t.appendChild(r),t.appendChild(o),t.appendChild(i)},t.opened=!0}},{key:"selectedItems",value:function(){var e=this.shadowRoot.querySelector("vaadin-grid-pro");this.itemsSelected=e.selectedItems}},{key:"render",value:function(){return Object(o.c)(k(),this.categorieSelected,this.openDialog,this.loadCategories,this.reloadCategories,this.loadProducts,this.loadProductswithProvider,this.confirmQuotation)}}],[{key:"styles",get:function(){return Object(o.b)(E())}}]),r}(r.a);window.customElements.define(D.is,D)}}]);