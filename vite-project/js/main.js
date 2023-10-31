import { inventory } from './array.js'

const DOMSelectors ={
  app: document.querySelector('#app'),
};
console.log(inventory)
function createcard(){
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
DOMSelectors.app.insertAdjacentHTML(
      "afterbegin", createcard()
  )    