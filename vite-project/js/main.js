import { inventory } from './array.js'

const DOMSelectors ={
  app: document.querySelector('#app'),
  checkbox_form: document.querySelector('#checkbox_form'),
  checkbox: document.querySelector('#checkbox'),
};
const cheap = inventory.filter((invent)=>invent.price<100);

function createcheapcard(){
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

// if (DOMSelectors.checkbox === true){
//   createcheapcard();
// }
// else{
//   createcard();
// }
DOMSelectors.checkbox.addEventListener("click", function (event) {
  event.preventDefault();
  if (DOMSelectors.checkbox.checked === true){
    createcheapcard();
  }
  else{
    createcard();
  }
  
});
