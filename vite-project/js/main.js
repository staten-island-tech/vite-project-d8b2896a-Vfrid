import '../styles/style.css'
import { inventory } from './array.js'

const DOMSelectors ={
  app: document.querySelector('#app'),
  item_name: document.querySelector(inventory.item),
  price: document.querySelector(inventory.price),
};
console.log(DOMSelectors.name);
function createcard(){
  console.log(item_name, price);
  return `<div class="box">
      <div class="item">
        <div class="item_link">
          <div class="item_bg"></div>
  
          <div class="item_title">
            <p class="name_title">${DOMSelectors.item_name} </p>
          </div>
            <span class="item_date"> $${DOMSelectors.price}
            </span>
        </div>
      </div>
    </div>`
  
}
DOMSelectors.app.insertAdjacentHTML(
      "afterbegin", createcard()
  )    