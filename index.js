/*FUNCIONES GENERALES*/
const ocultar = (element) => {
  return product.classList.add("hidden");
};

const mostrar = (element) => {
  return element.classList.remove("hidden");
};

/*GRID- LIST*/
/*selecciono*/
// const gridButton = document.querySelector('#grid-btn')
// const listButton = document.querySelector('#list-btn')
// const productsList = document.querySelector('.products-list');
// const productsDescriptions = document.querySelectorAll('.product-description');//todas las descripciones de los productos

/*pruebo si selecciona*/
// console.log(gridButton)
// console.log(listButton)
// console.log(productsList)
// console.log(productsDescriptions)

/* f(x) para mostrar en grid: **/
//   showGrid = () =>{
//     productsList.classList.remove("in-stack")
//     productsList.classList.add("grid")

//     for(let product of productsList){
//       product.classList.remove("line")
//     }

//     for(let desc of productsDescriptions){
//       hide(desc);
//     }
//   }

// showList = () =>{
//    productsList.classList.remove("grid")
//     productsList.classList.add("in-stack")

//     for(let product of productsList){
//       product.classList.add("line");
//     }
//     for(let desc of productsDescriptions){
//       show(desc);
//     }
//   }

//   gridButton.onclick = () =>{
//     showGrid();
//   }

//   listButton.onclick = () => {
//     showList();
//   }

/*/*NO ANDAN DESCRIPCIONES SFSSGSSS */

////////////////////* filtros */////////////////////

/*selecciono*/
const inputSearch = document.querySelector("#input-search"); /*CAJA BUSQUEDA*/
const products = document.getElementsByClassName(
  "product"
); /*LISTA DE PRODUCTOS*/
const starsFilter = document.getElementsByClassName(
  "filter-review"
); /*LISTA DE STRE*/
const categoryFilter = document.getElementsByClassName(
  "filter-category"
); /* LISTA DE CATEGORIAS*/
const checkboxesFilter = document.querySelectorAll(
  ".filter"
); /*LISTA DE CHECKBOXES*/
const clearAllFiltersBtn = document.querySelector(".clear-btn"); /*BOTON*/
const checkboxes = document.querySelectorAll(
  "input[type='checkbox']"
); /*CHECKBOX EN GRAL*/

console.log(inputSearch);
console.log(products);
console.log(starsFilter);
console.log(categoryFilter);
console.log(checkboxesFilter);
console.log(clearAllFiltersBtn);
/*ok*/

/*EJECUCION FILTROS/BOTON LIMPIAR*/
/*
Seleccionar elementos y guardarnos en const (OK)
recorrer todos los filters 
evocar f(x) si hay algun filtro onclick.
filtrar productos en consecuencia (a traves de c/ f(x))
dar resultado 

onclick clear-btn = limpiar todos los filtros (OK)(PONELE)
*/

const filtrarElementos = () => {
  for (let product of products) {
    if (pasaFiltros(element)) {
      mostrar(element);
    } else {
      ocultar(element);
    }
  }
};

/*busqueda por estrella*/
for (let estrella of starsFilter) {
    estrella.onclick = () => {
      //console.log(estrella)
        for (product of products) {
            if (starsFilter.checked) {
                if (estrella.dataset.stars === product.dataset.stars) {
                    card.classList.remove('hidden');
                }
                else {
                    card.classList.add('hidden');
                }
            }
            else {
                 card.classList.remove('hidden');
            }
        }
            
    };
  }
/*busqueda por categoria*/

for (let checkboxCategory of categoryFilter) {
  checkboxCategory.onclick = () => {
    // if (category.checked) {
    for (product of products) {
      if (category.dataset.category === card.dataset.category) {
        product.classList.remove("hidden");
      } else {
        product.classList.add("hidden");
      }
    }
  };
}

// BUSCAR POR NOMBRE //

// const somethingInInput = () => {
//   if (inputSearch.value) {
//   //  console.log('hay algo escrito');
//   } else {
//    // console.log('no hay nada escrito')
//   }
// };

// const compareInputProduct = (element) => {
//   if (element.dataset.name.includes(inputSearch.value.toLowerCase())){
//     return true
//   }
//   else {
//     return false
//   }
// }

// const runInputFilter =  (element)=> {
//   if (somethingInInput()){
//     if(compareInputProduct(element)){
//       return true
//     }
//     else {
//       return false
//     }
//   }
//   else {
//     return false
//   }
// }

// const inputFilter = () => {
//   for (let element of products){
//     if (runInputFilter(element) && runInputFilter(element)){
//       mostrar(element)
//     }
//     else {
//       ocultar(element)
//     }
//   }
// }

// //------------Limpiar Busqueda--------------//
// clearAllFiltersBtn.onclick = () => {
//   inputSearch.value = "";
//   for (let producto of products) {
//     producto.classList.remove("hidden");
//   }
//   for (let checkbox of checkboxes) {
//     checkbox.checked = false;
//   }
// };
