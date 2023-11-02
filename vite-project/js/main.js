import { inventory } from './array.js'

export const DOMSelectors ={
  app: document.querySelector('#app'),
  checkbox_form: document.querySelector('#checkbox_form'),
  cheap_checkbox: document.querySelector('#cheap_checkbox'),
  stock_checkbox: document.querySelector('#stock_checkbox'),
  light: document.querySelector('.light_button'),
  dark: document.querySelector('.dark_button'),
};
export const cheap = inventory.filter((invent)=>invent.price<100);
export const stock = inventory.filter((invent)=>invent.in_stock === true);
export const cheapstock = stock.filter((invent)=> invent.price<100);
export function createcheapcard(){
  return cheap.forEach((thing)=> DOMSelectors.app.insertAdjacentHTML(
    "afterbegin", 
`<div class="box">
    <div class="item">
      <div class="item_link">
        <div class="item_bg"></div>

        <div class="item_title">
          <p class="name_title">${thing.item} </p>
        </div>
          <span class="item_date"> $${thing.price}
          </span>
      </div>
    </div>
  </div>`
  ))
  }

export function createstockcard(){
  return stock.forEach((x)=> DOMSelectors.app.insertAdjacentHTML(
    "afterbegin", 
`<div class="box">
    <div class="item">
      <div class="item_link">
        <div class="item_bg"></div>

        <div class="item_title">
          <p class="name_title">${x.item} </p>
        </div>
          <span class="item_date"> $${x.price}
          </span>
      </div>
    </div>
  </div>`
  ))
  }

export function createcheapstockcard(){
  return cheapstock.forEach((x)=> DOMSelectors.app.insertAdjacentHTML(
    "afterbegin", 
`<div class="box">
    <div class="item">
      <div class="item_link">
        <div class="item_bg"></div>

        <div class="item_title">
          <p class="name_title">${x.item} </p>
        </div>
          <span class="item_date"> $${x.price}
          </span>
      </div>
    </div>
  </div>`
  ))
  }

export function createcard(){
  return inventory.forEach((invent)=> DOMSelectors.app.insertAdjacentHTML(
    "afterbegin", 
  `<div class="box">
      <div class="item">
        <div class="item_link">
          <div class="item_bg"></div>
  
          <div class="item_title">
            <p class="name_title">${invent.item} </p>
          </div>
            <span class="item_date"> $${invent.price}
            </span>
        </div>
      </div>
    </div>`) )
  
}
export function clearcards(){
  DOMSelectors.app.innerHTML = ""
}
createcard();
DOMSelectors.checkbox_form.addEventListener("click", function (event) {
  if (DOMSelectors.cheap_checkbox.checked === true){
    clearcards();
    createcheapcard();
    if (DOMSelectors.stock_checkbox.checked === true){
      clearcards();
      createcheapstockcard();
    }
  }
  else if (DOMSelectors.stock_checkbox.checked === true){
    clearcards();
    createstockcard();
    if (DOMSelectors.cheap_checkbox.checked === true){
      clearcards();
      createcheapstockcard();
    }
  }
  else{
    clearcards();
    createcard();
  }
});
